import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import Cars from "./components/Cars";
import Booking from "./components/Booking";
import AdminDashboard from "./components/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute"; // Protect Admin Access
import AdminLogin from "./components/AdminLogin";

function App() {
  return (
    <Router>
      <Header /> {/* ✅ Global Header */}
      <Routes>
      <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/booking/:carId" element={<Booking />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admindash" element={<AdminDashboard/>}/>
  

        {/* ✅ Protected Admin Dashboard */}
        <Route 
          path="/admin-dashboard" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
