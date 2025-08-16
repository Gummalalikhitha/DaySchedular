import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TodoList from "./components/TodoList";
import ResetPassword from "./pages/ResetPassword";
import Contact from "./pages/Contact";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
    
  );
}
export default App;
