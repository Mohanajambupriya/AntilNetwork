import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css"; // Import CSS file

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Car Data State
  const [cars, setCars] = useState([]);

  // Message State for Added Notification
  const [message, setMessage] = useState("");

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("admin-auth");
    navigate("/home");
  };

  // Handle Add Car
  const addCar = () => {
    setCars([...cars, { id: Date.now(), name: "", price: "", fuel: "", image: "", status: "Available" }]);
  };

  // Handle Update Car Data
  const updateCarData = (id, field, value) => {
    setCars((prevCars) =>
      prevCars.map((car) => (car.id === id ? { ...car, [field]: value } : car))
    );
  };

  // Handle Upload Image
  const uploadCarImage = (id, file) => {
    const imageURL = URL.createObjectURL(file);
    updateCarData(id, "image", imageURL);
  };

  // Handle Added Button Click
  const handleAddedClick = (car) => {
    if (car.name && car.price && car.fuel && car.image) {
      setMessage("Car added into car list");
      setTimeout(() => setMessage(""), 9000); // Clear message after 3 seconds
    } else {
      alert("Please fill in all details before adding the car.");
    }
  };

  return (
    <div className="dashboard-container">
      <h2 className="admin-title">Welcome, Admin!</h2>

      {/* Message Box for Car Added Notification */}
      {message && <div className="message-box">{message}</div>}

      {/* Car Management Section */}
      <div className="admin-section">
        <h3>Car Management</h3>
        <button className="admin-btn_add-car" onClick={addCar}>➕ Add Car</button>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Car Image</th>
              <th>Car Name</th>
              <th>Price ($)</th>
              <th>Fuel Type</th>
              <th>Upload Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car.id}>
                <td>
                  {car.image ? <img src={car.image} alt="Car" className="car-image" /> : "No Image"}
                </td>
                <td>
                  <input
                    type="text"
                    className="admin-input"
                    value={car.name}
                    onChange={(e) => updateCarData(car.id, "name", e.target.value)}
                    placeholder="Enter Car Name"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="admin-input"
                    value={car.price}
                    onChange={(e) => updateCarData(car.id, "price", e.target.value)}
                    placeholder="Enter Price"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="admin-input"
                    value={car.fuel}
                    onChange={(e) => updateCarData(car.id, "fuel", e.target.value)}
                    placeholder="Enter Fuel Type"
                  />
                </td>
                <td>
                  <input
                    type="file"
                    accept="image/*"
                    className="admin-input"
                    onChange={(e) => uploadCarImage(car.id, e.target.files[0])}
                  />
                </td>
                <td>
                  <button className="book-button" onClick={() => handleAddedClick(car)}>Added</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Logout Button */}
      <button className="admin-logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard; 