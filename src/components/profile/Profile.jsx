"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "../loader/Loader";
import './Profile.css'
 
const Profile = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '',
    address: '',
    state: '',
    pincode: '',
    profilePic: null,
    handlename: ''
  });

  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});
  const [changePassword, setChangePassword] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        return router.push("/login");
      }

      try {
        const response = await fetch("/api/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.status === 401) {
          // Token is expired or invalid
          console.log("Token expired");
          localStorage.removeItem("token"); // Remove the expired token
          return router.push("/login"); 
        }

        const data = await response.json();
        setFormData({
          ...formData,
          name: data.user.name,
          email: data.user.email,
          mobile: data.user.mobile,
          address: data.user.address,
          state: data.user.state,
          pincode: data.user.pincode,
          handlename: data.user.handlename,
          profilePic: data.user.profileimage 
        });

      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profilePic' && files.length > 0) {

      const file = files[0];
      setFormData({
        ...formData,
        profilePic: file,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const token = localStorage.getItem("token");

    if (!token) {
      return router.push("/login");
    }

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await fetch("/api/profile", {
        method: "PUT", 
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Profile updated successfully:", result);
      } else {
        console.error("Error updating profile:", result);
        setErrors(result);
      }
    } catch (error) {
      console.error("Error during profile update:", error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="form-container">
      <h2>My Account</h2>
      <div className="profile-pic-container">
        <img
          // src={formData.profilePic || "/default-profile.png"}
          src={formData.profilePic}
          alt="Profile"
          className="profile-pic"
        />
      </div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          {errors.mobile && <p className="error">{errors.mobile}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>

        <div className="form-group row">
          <div className="col">
            <label htmlFor="state">State:</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
            {errors.state && <p className="error">{errors.state}</p>}
          </div>

          <div className="col">
            <label htmlFor="pincode">Pincode:</label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
            />
            {errors.pincode && <p className="error">{errors.pincode}</p>}
          </div>
        </div>

        {
          formData.profilePic && <p>We have profile image saved if you want to add new select from bottom</p>
        }
        <div className="form-group">
          <label htmlFor="profilePic">Profile Pic:</label>
          <input
            type="file"
            id="profilePic"
            name="profilePic"
            onChange={handleChange}
          />
          {errors.profilePic && <p className="error">{errors.profilePic}</p>} 
        </div>

        <div className="form-group">
          <label htmlFor="handlename">Handle Name:</label>
          <input
            type="text"
            id="handlename"
            name="handlename"
            value={formData.handlename}
            onChange={handleChange}
          />
          {errors.handlename && <p className="error">{errors.handlename}</p>}
        </div>

        {
          changePassword && 
          <div>
              <div className="form-group">
                <label htmlFor="oldPassword">Old Password</label>
                <input
                  type="text"
                  id="oldPassword"
                  name="oldPassword"
                  value={formData.oldPassword}
                  onChange={handleChange}
                />
                {errors.oldPassword && <p className="error">{errors.oldPassword}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="newPassword">New Password</label>
                <input
                  type="text"
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                />
                {errors.newPassword && <p className="error">{errors.newPassword}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="Confirmassword">Confirm Password</label>
                <input
                  type="text"
                  id="Confirmassword"
                  name="Confirmassword"
                  value={formData.Confirmassword}
                  onChange={handleChange}
                />
                {errors.Confirmassword && <p className="error">{errors.Confirmassword}</p>}
            </div>
        </div>
        }

        <div className="changepwd">
          <input id="changePassCheck" type="checkbox" onChange={() => setChangePassword(!changePassword)} />
          <h6 htmlFor="changePassCheck">Change Password</h6>
        </div>
        
        <button type="submit" className="submit-btn">Update</button>

        <Loader isLoading={loading} />
      </form>
    </div>
  );
};

export default Profile;
