"use client";
import { useState } from 'react';
import './Register.css';
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import Loader from '../loader/Loader';

const RegisterForm = () => {
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

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // Loader state
  const validate = () => {
    let formErrors = {};

    // Name validation (Required)
    if (!formData.name.trim()) {
      formErrors.name = "*Name is required";
    }

    // Email validation 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      formErrors.email = "*Email is required";
    } else if (!emailPattern.test(formData.email)) {
      formErrors.email = "*Invalid email format";
    }

    // Password validation
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{6,}$/;
    if (!formData.password) {
        formErrors.password = "*Password is required";
    } else if (!passwordPattern.test(formData.password)) {
        formErrors.password = "*Password must be at least 6 characters, include an uppercase letter, a lowercase letter, a number, and a special character.";
    }

    // Mobile validation 
    const mobilePattern = /^[0-9]{10}$/;
    if (!formData.mobile) {
      formErrors.mobile = "*Mobile number is required";
    } else if (!mobilePattern.test(formData.mobile)) {
      formErrors.mobile = "*Mobile number should be 10 digits";
    }

    // Address validation 
    if (!formData.address.trim()) {
      formErrors.address = "*Address is required";
    }

    // State validation 
    if (!formData.state.trim()) {
      formErrors.state = "*State is required";
    }

    // Pincode validation 
    const pincodePattern = /^[0-9]{6}$/;
    if (!formData.pincode) {
      formErrors.pincode = "*Pincode is required";
    } else if (!pincodePattern.test(formData.pincode)) {
      formErrors.pincode = "*Pincode should be 6 digits";
    }

    let imageReg = /(\.jpg|\.jpeg|\.bmp|\.gif|\.png)$/i;
    console.log("===formData.profilePic===>", formData.profilePic);
    // Profile pic validation 
    if (!formData.profilePic) {
      formErrors.profilePic = "*Profile picture is required";
    } else if(!imageReg.exec(formData.profilePic.name)){
      formErrors.profilePic = "*Only Images allowed";
    }

    if (!formData.handlename.trim()) {
        formErrors.handlename = "*Handle Name is required";
    }
    console.log("=====fromErrors====>", formErrors)
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // running on onchange of input fields
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
    Object.keys(errors).forEach((inputName) => {
        if(inputName === name && value !== '') {
            delete errors[inputName];
        }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      try {
        const formDataToSend = new FormData();
        Object.keys(formData).forEach(key => {
          formDataToSend.append(key, formData[key]);
        });

        const response = await fetch('/api/auth/register', {
          method: 'POST',
          body: formDataToSend,
        });

        const data = await response.json();

        if (response.ok) {
          setMessage(data.message);
          setFormData({
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
          setErrors({});
          toast.success("Register Successsfully", { position: "top-right" });
          router.push('/login'); // Redirect to the login page
        } else {
          toast.error(data.error, { position: "top-right" });
          setMessage(data.error);
        }
      } catch (error) {
        console.error('Error during registration:', error);
        toast.error("Registration failed", { position: "top-right" });
        setMessage('An error occurred during registration. Please try again.');
      } finally {
        setLoading(false);    // stop loader
      }
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
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
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
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

        <button type="submit" className="submit-btn">Register</button>
        <Loader isLoading={loading} />
      </form>
    </div>
  );
};

export default RegisterForm;
