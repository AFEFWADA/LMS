import React, { useState, useEffect } from "react";
import axios from "axios";
import SidebarUser from "./Sidebar";

function UserProfile() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3300/api/v1/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { name, lastName, email } = response.data;
        setFormData({
          name: name || "",
          lastName: lastName || "",
          email: email || "",
          password: "",
          confirmPassword: "",
        });
      } catch (error) {
        setErrorMessage(error.response?.data?.message || "Failed to fetch user data.");
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password && formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const updateData = {
        name: formData.name,
        lastName: formData.lastName,
        email: formData.email,
      };

      if (formData.password) {
        updateData.password = formData.password;
      }

      await axios.put("http://localhost:3300/api/v1/user/update-profile", updateData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSuccessMessage("Profile updated successfully!");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "An error occurred.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="d-flex">
      <SidebarUser />
      <div className="container mt-5 ms-4">
        <h1>User Profile Settings</h1>
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">Update Profile</button>
        </form>
      </div>
    </div>
  );
}

export default UserProfile;
