import React, { useState } from "react";
import FormInput from "../Components/FormInput";
import "../sass/voterlogin.scss";

const VoterLogin = () => {
  const [values, setValues] = useState({
    regNo: "",
    token: "",
  });

  const inputs = [
    {
      id: 1,
      name: "regNo",
      type: "text",
      placeholder: "Registration Number",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Registration Number",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 1,
      name: "token",
      type: "text",
      placeholder: "Enter your token",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Token",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="voter">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Validate</button>
      </form>
    </div>
  );
};

export default VoterLogin;
