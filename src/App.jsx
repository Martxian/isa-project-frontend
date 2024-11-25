import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { VerifyRoute } from "./components/VerifyRoute";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from './pages/Dashboard'
import PasswordReset from './pages/PasswordReset'
import Forgot from './pages/Forgot'
import Register from "./pages/Register";
import Message from './pages/Message'
import Detect from './pages/Detect'
import Admin from './pages/Admin'
// import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-300">
        <Navbar />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/password-reset" element={<PasswordReset />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/register" element={<Register />} />
            <Route path="/message" element={<Message />} />
            <Route path="/detect" element={<Detect />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
