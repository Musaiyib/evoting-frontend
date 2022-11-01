import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormInput from "../../Components/FormInput";
import "../../sass/voterlogin.scss";
import { registerUser } from "../../Slices/authSlice";

const ElcomSignup = () => {
  const [values, setValues] = useState({
    regNo: "",
    email: "",
    role: "",
    password: "",
    name: "",
  });
  const { isLoading } = useSelector((state) => state.auth);

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Full name",
      label: "Name",
      required: true,
    },
    {
      id: 2,
      name: "regNo",
      type: "text",
      placeholder: "Registration Number",
      label: "Registration Number",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "text",
      placeholder: "Email",
      errorMessage: "Invalid email",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Enter your password",
      label: "Password",
      required: true,
    },
  ];
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(values));
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="voter">
      <form onSubmit={handleSubmit}>
        <h1>Elcom Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name] || ""}
            onChange={onChange}
          />
        ))}
        <label htmlFor="role" style={{ fontSize: 12, color: "gray" }}>
          Role
        </label>
        <select
          name="role"
          value={values.role || ""}
          label="Role"
          style={{
            height: 50,
            width: "100%",
            background: "white",
            color: "#c0c0c0",
            // fontWeight: "500",
            fontSize: 15,
            paddingLeft: 10,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#878787",
          }}
          required
          onChange={onChange}>
          <option value={null}>--Select Position--</option>
          <option value="chairman">Chairman</option>
          <option value="secretary">Secretary</option>
          <option value="member">Member</option>
        </select>
        <button onClick={() => handleSubmit}>
          {isLoading ? "loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ElcomSignup;
