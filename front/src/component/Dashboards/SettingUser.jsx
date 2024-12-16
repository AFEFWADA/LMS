import React, { useState } from "react";
import SidebarUser from "./Sidebar";

const SettingsPage = () => {
  const [formData, setFormData] = useState({
    username: "Kate",
    surname: "Paisley",
    bio: "",
    job: "Project Designer",
    email: "Katepaisley@gmail.com",
    password: "",
    location: "United States of America",
  });

  const [image, setImage] = useState(null); // State to hold the uploaded image file
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle image file upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    const data = new FormData(); // Create a FormData object to send file and form fields
    data.append("username", formData.username);
    data.append("surname", formData.surname);
    data.append("bio", formData.bio);
    data.append("job", formData.job);
    data.append("email", formData.email);
    data.append("password", formData.password);
    data.append("location", formData.location);
    if (image) {
      data.append("image", image);
    }

    try {
      const response = await fetch("https://api.example.com/update-profile", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setSuccessMessage("Profile updated successfully!");
      } else {
        setErrorMessage("Failed to update profile. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={{ width: "250px" }}>
        <SidebarUser />
      </div>

      {/* Main Content */}
      <div style={styles.content}>
        <h2>Personal Information</h2>

        {/* Profile Image Section */}
        <div style={styles.profilePicSection}>
          <img
            src={image ? URL.createObjectURL(image) : "https://via.placeholder.com/80"}
            alt="Profile"
            style={styles.profilePic}
          />
          <label style={styles.uploadButton}>
            Upload
            <input type="file" style={{ display: "none" }} onChange={handleImageChange} />
          </label>
          <button
            style={styles.deleteButton}
            onClick={() => setImage(null)} // Remove selected image
          >
            Delete
          </button>
        </div>

        {/* Success and Error Messages */}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

        {/* Form */}
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label>User name</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label>User surname</label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

  

          <div style={styles.formGroup}>
            <label>Job</label>
            <input
              type="text"
              name="job"
              value={formData.job}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.buttonGroup}>
            <button type="submit" style={styles.uploadButton}>
              Add Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    fontFamily: "Arial, sans-serif",
    height: "100vh",
    backgroundColor: "#f7f9fc",
  },
  content: {
    flex: 1,
    padding: "40px",
    backgroundColor: "#fff",
    margin: "20px",
    borderRadius: "8px",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    height: "700px", // Set your desired height here
    overflowY: "auto",
  },
  profilePicSection: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  profilePic: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
  },
  uploadButton: {
    padding: "8px 16px",
    backgroundColor: "#1abc9c",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  },
  deleteButton: {
    padding: "8px 16px",
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  textarea: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    resize: "none",
    height: "80px",
  },
};

export default SettingsPage;
