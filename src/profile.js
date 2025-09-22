import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBackendData, putBackendData } from "./api/api-service";
import "./profile.css";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [newProfileImage, setNewProfileImage] = useState("");
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);


  const getUser = async () => {
    try {
      const data = await getBackendData("users/profile");
      console.log("Fetched user data from backend:", data);
      setUser(data);
      setFormData({
        name: data.name,
        email: data.email,
      });

      if (data.galleryImages) {
        setGalleryImages(JSON.parse(data.galleryImages));
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      alert("Failed to load profile");
    } finally {
      setLoading(false);
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGalleryChange = (e) => {
    const files = Array.from(e.target.files);
    const readers = files.map(
      (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        })
    );

    Promise.all(readers).then((images) => {
      setGalleryImages((prev) => [...prev, ...images]);
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        profileImage: newProfileImage || undefined,
        galleryImages: JSON.stringify(galleryImages),
      };
      const updatedUser = await putBackendData("users/profile", payload);
      alert("Profile updated successfully");
      setUser(updatedUser.user);
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Something went wrong");
    }
  };

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <h3>Loading profile...</h3>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-img-wrapper">
          <img
            src={newProfileImage || user?.profileImage}
            alt="Profile"
            className="profile-img"
          />
        </div>
      </div>

      <div className="profile-body">
        <h2 className="username">{user?.name}</h2>

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
                onChange={handleImageChange}
              />
            </div>

            <div className="form-group">
              <label>Gallery Images</label>
              <input
                type="file"
                name="galleryImages"
                accept="image/*"
                multiple
                onChange={handleGalleryChange}
              />
            </div>

            <div className="gallery-preview">
              {galleryImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`gallery-${index}`}
                  className="gallery-img"
                />
              ))}
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
