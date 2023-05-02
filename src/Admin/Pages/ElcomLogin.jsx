import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormInput from "../../Components/FormInput";
import "../../sass/voterlogin.scss";
import { loginUser } from "../../Slices/authSlice";
import { useNavigate } from "react-router-dom";

const ElcomLogin = () => {
  const { isLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate()
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Enter your password",
      label: "Password",
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginUser(values)).then((res) => {
        navigate('/elcom/dashboard')
      })
    } catch (error) {
      console.error(error)
    }
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
        <button onClick={() => handleSubmit}>
          {isLoading ? "loading..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default ElcomLogin;
