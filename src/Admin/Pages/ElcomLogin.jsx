import React, { useState } from "react";
import FormInput from "../../Components/FormInput";
import "../../sass/voterlogin.scss";

const ElcomLogin = () => {
  const [values, setValues] = useState({
    regNo: "",
    token: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "text",
      placeholder: "Email",
      errorMessage: "Invalid email",
      label: "Email",
      pattern:
        "^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Enter your password",
      errorMessage: "Password must be 8 character long",
      label: "Password",
      pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$",
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
        <h1>Elcom Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name] || ""}
            onChange={onChange}
          />
        ))}
        <button>Login</button>
      </form>
    </div>
  );
};

export default ElcomLogin;
