"use client";
import { useState } from "react";
import "./Login.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      formErrors.email = "*Email is required";
    } else if (!emailPattern.test(formData.email)) {
      formErrors.email = "*Invalid email format";
    }

    // Password validation
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{6,}$/;
    if (!formData.password) {
      formErrors.password = "*Password is required";
    } else if (!passwordPattern.test(formData.password)) {
      formErrors.password =
        "*Password must be at least 6 characters, include an uppercase letter, a lowercase letter, a number, and a special character.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // running on onchange of input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    Object.keys(errors).forEach((inputName) => {
      if (inputName === name && value !== "") {
        delete errors[inputName];
      }
    });
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      
      try {
          const formDataToSend = new FormData();
          Object.keys(formData).forEach(key => {
            formDataToSend.append(key, formData[key]);
          });

        const response = await fetch("/api/auth/login", {
          method: 'POST',
          body: formDataToSend,
        });

        const data = await response.json();

        if (!response.ok) {
          toast.error(data.error, { position: "top-right" });
          setErrors({ ...data }); // Set errors if login fails
        } else {
          setFormData({
            email: '',
            password: '',
          });
          // Save the token 
          localStorage.setItem("token", data.token); // Store the token in local storage
          toast.success("Login Successsfully", { position: "top-right" });
          router.push('/'); // Redirect to the Home page
        }
      } catch (error) {
        console.error("Error during login:", error);
        toast.error(error, { position: "top-right" });
        setErrors({ general: "An error occurred. Please try again." });
      }
      
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="name">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>
      <div className="no-account">
        <p>
          No Account?
          <Link href="/register" className="link-register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
