import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Reset from "./pages/Reset";
import Forgot from "./pages/Forgot";
import Register from "./pages/Register";
import Message from "./pages/Message";
import Detect from "./pages/Detect";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
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
            <Route path="/password-reset" element={<Reset />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/register" element={<Register />} />
            <Route path="/message" element={<Message />} />
            <Route path="/detect" element={<Detect />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
