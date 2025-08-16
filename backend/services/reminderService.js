// backend/services/reminderService.js
const cron = require("node-cron");
const nodemailer = require("nodemailer");
const Todo = require("../models/Todo");

// Build transporter using env vars
const transporter = nodemailer.createTransport({
  // host: process.env.SMTP_HOST,
  // port: parseInt(process.env.SMTP_PORT || "587", 10),
   host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/**
 * Helper: format time for email display
 */
function formatTaskForEmail(task) {
  // task.date (YYYY-MM-DD) & task.taskTime (HH:mm)
  return `${task.text} — ${task.date} ${task.taskTime}`;
}

/**
 * Check tasks every minute and send reminders for tasks scheduled around 'now'.
 * Tolerance window is +/- 30 seconds (server local time)
 */
function startReminderService() {
  // Runs every minute at second 0
  cron.schedule("* * * * *", async () => {
    try {
      const now = new Date();
      const windowStart = new Date(now.getTime() - 30 * 1000); // 30s ago
      const windowEnd = new Date(now.getTime() + 30 * 1000);   // 30s ahead

      // Find docs that contain at least one task with reminderSent: false
      const todosWithPending = await Todo.find({ "tasks.reminderSent": false });

      for (const userTodo of todosWithPending) {
        const toSend = [];
        // iterate tasks and find those that fall into the window
        userTodo.tasks.forEach((task, idx) => {
          if (task.reminderSent) return;

          // Build a Date object for scheduled date/time (local)
          // Expecting date 'YYYY-MM-DD' and taskTime 'HH:mm'
          const isoString = `${task.date}T${task.taskTime}:00`;
          const scheduled = new Date(isoString);

          if (isNaN(scheduled.getTime())) return; // skip invalid

          // If scheduled is within [windowStart, windowEnd], queue it
          if (scheduled >= windowStart && scheduled <= windowEnd) {
            toSend.push({ task, idx });
          }
        });

        if (toSend.length === 0) continue; // none for this user now

        // Send single email listing all tasks for this user at this trigger
        const mailOptions = {
          from: process.env.FROM_EMAIL, // e.g. "DayScheduler <no-reply@yourdomain.com>"
          to: userTodo.email,
          subject: `Reminder: ${toSend.length} scheduled task(s)`,
          html: `<p>Hello ${userTodo.username},</p>
                 <p>This is a reminder for the following scheduled task(s):</p>
                 <ul>
                   ${toSend.map(t => `<li>${formatTaskForEmail(t.task)}</li>`).join("")}
                 </ul>
                 <p>— DayScheduler</p>`,
        };

        try {
          const info = await transporter.sendMail(mailOptions);
          console.log(`Reminder sent to ${userTodo.email}: ${info.messageId}`);

          // mark those tasks as sent
          toSend.forEach(({ idx }) => {
            userTodo.tasks[idx].reminderSent = true;
          });
          await userTodo.save();
        } catch (mailErr) {
          console.error("Error sending reminder to", userTodo.email, mailErr);
          // don't mark as sent; we will attempt again next minute
        }
      }
    } catch (err) {
      console.error("Reminder service error:", err);
    }
  }, {
    scheduled: true,
    timezone: process.env.SCHEDULER_TZ || undefined // optional timezone
  });

  console.log("Reminder service started (cron every minute)");
}

module.exports = startReminderService;
