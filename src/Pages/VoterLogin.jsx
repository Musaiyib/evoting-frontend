import React, { useState } from "react";
import FormInput from "../Components/FormInput";
import "../sass/voterlogin.scss";
import { logVoter } from "../Slices/voteSlice";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from 'react-router-dom';

const VoterLogin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
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
      label: "Registration Number",
      required: true,
    },
    {
      id: 2,
      name: "token",
      type: "text",
      placeholder: "Enter your token",
      label: "Token",
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(logVoter({ regNo: values.regNo, votePin: values.token })).then(res => {
        navigate('/voting')
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
        <h1>Voter Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name] || ""}
            onChange={onChange}
          />
        ))}
        <button>Validate</button>
      </form>
    </div>
  );
};

export default VoterLogin;
