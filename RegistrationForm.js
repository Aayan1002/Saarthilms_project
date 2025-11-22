import React, { useState } from "react";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  gender: "",
  terms: false,
};

function RegistrationForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!values.firstName.trim()) newErrors.firstName = "First name is required";
    if (!values.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!values.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!values.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(values.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    if (!values.password) {
      newErrors.password = "Password is required";
    } else if (values.password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    }

    if (!values.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (values.confirmPassword !== values.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!values.gender) {
      newErrors.gender = "Please select gender";
    }

    if (!values.terms) {
      newErrors.terms = "You must accept the terms";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid
      setSubmittedData(values);
      setValues(initialValues);
    } else {
      setSubmittedData(null);
    }
  };

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>

        <div className="form-row">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>

        <div className="form-row">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="example@mail.com"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-row">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            placeholder="10-digit number"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className="form-row">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="form-row">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter password"
          />
          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword}</span>
          )}
        </div>

        <div className="form-row">
          <label>Gender</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={values.gender === "male"}
                onChange={handleChange}
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={values.gender === "female"}
                onChange={handleChange}
              />
              Female
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={values.gender === "other"}
                onChange={handleChange}
              />
              Other
            </label>
          </div>
          {errors.gender && <span className="error">{errors.gender}</span>}
        </div>

        <div className="form-row checkbox-row">
          <label>
            <input
              type="checkbox"
              name="terms"
              checked={values.terms}
              onChange={handleChange}
            />
            I accept the terms & conditions
          </label>
          {errors.terms && <span className="error">{errors.terms}</span>}
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="summary">
          <h2>Submitted Data</h2>
          <p>
            <strong>Name:</strong> {submittedData.firstName}{" "}
            {submittedData.lastName}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Phone:</strong> {submittedData.phone}
          </p>
          <p>
            <strong>Gender:</strong> {submittedData.gender}
          </p>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
