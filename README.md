# 🗓️ Day Scheduler

A full-featured **Day Scheduler** application where users can efficiently plan, track, and manage their daily tasks.  
Each user has a **personal account** and can only access their own tasks, ensuring **data privacy and security**.  

🚀 **Live Demo**: [Day Scheduler](https://dayschedular.onrender.com)

---

## ✨ Features

- 👤 **User Authentication** – Secure login/register system (each user has their own private account).  
- ➕ **Add Tasks** – Schedule your daily activities with details.  
- 📊 **Track Task Status** – Mark tasks as *Mark as complete or *Completed*.  
- ❌ **Delete Tasks** – Remove tasks that are no longer relevant.  
- 🔔 **Notifications & Reminders** – Get notified about upcoming tasks (works locally; SMTP emails blocked on Render).  
- 🖥️ **Responsive UI** – Works smoothly across devices.  
- 🌐 **Deployed Online** – Accessible from anywhere.  

---

## 🛠️ Tech Stack

- **Frontend**: React.js / JavaScript / CSS  
- **Backend**: Node.js / Express.js  
- **Database**: MongoDB Atlas 
- **Authentication**: JWT + bcrypt (password hashing)  
- **Notifications**: Nodemailer (SMTP for email reminders)  
- **Deployment**: Render  

---

## 🚀 Getting Started

Follow the steps below to run the project locally.

### Prerequisites
- Node.js installed
- MongoDB setup (local or cloud)

### Installation

1. Clone the repository  
   ```bash
   git clone https://github.com/your-username/day-scheduler.git
   cd day-scheduler
Install dependencies

npm install
Set up environment variables
Create a .env file and configure the following:

env
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password_or_app_password

Start the server
npm start

📌 Future Enhancements

📱 Push Notifications (browser & mobile)

📅 Calendar Integration

📊 Task Analytics / Reports

🕒 Task Priority & Deadlines

📨 Alternative to SMTP (e.g., SendGrid / Twilio SendGrid for production-safe email delivery)

🤝 Contributing
Contributions are welcome! Feel free to fork this repo and submit pull requests.

🧑‍💻 Author
Gummala Likhitha

* 🌐 [Live App](https://dayschedular.onrender.com?utm_source=chatgpt.com) 
* 💻 [GitHub](https://github.com/your-username?utm_source=chatgpt.com)”


