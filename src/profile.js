import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBackendData, putBackendData } from "./api/api-service";
import "./profile.css";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });


  const getUser = async () => {
    try {
      const data = await getBackendData("users/profile");
      setUser(data);
      setFormData({ name: data.name, email: data.email });
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login", { state: { message: "Please login first" } });
    } else {
      getUser();
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await putBackendData(`users/profile`, formData);
      alert("Profile updated successfully ");
      setUser({ ...user, name: formData.name });
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Something went wrong ");
    }
  };

  if (!user) {
    return (
      <div className="container mt-5 text-center">
        <h3>Loading profile...</h3>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src={user.backgroundImage || "https://via.placeholder.com/1200x300"}
          alt="Background"
          className="background-img"
        />
        <div className="profile-img-wrapper">
          <img
            src={user.profileImage || "https://via.placeholder.com/150"}
            alt="Profile"
            className="profile-img"
          />
        </div>
      </div>

      <div className="profile-body">
        <h2 className="username">{user.name}</h2>

        <div className="edit-form">
          <h5>Edit Profile</h5>
          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>


            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Profile Image</label>
              <input
                type="file"
                name="profileImage"
                accept="image/*"
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn-save">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
