import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { generateVoteToken } from "../../Slices/voteSlice";

const GenerateToken = () => {
  const [regNo, setRegNo] = useState();
  const [phone, setPhone] = useState();
  const [level, setLevel] = useState();
  const [error, setError] = useState();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    setError(null);
    e.preventDefault();

    if (regNo === undefined || regNo === "" || regNo === null) {
      setError("Registration number field is required");
      return false;
    }
    if (phone === undefined || phone === "" || phone === null) {
      setError("Phone field is required");
      return false;
    }
    if (phone.length < 11) {
      setError("Please enter a valid phone number");
    }
    if (level === undefined || level === null) {
      setError("level field is required");
      return false;
    }

    console.log(regNo, phone, level);
    dispatch(generateVoteToken({ regNo, phone, level }));
  };
  return (
    <Container
      className="votingpage"
      maxWidth={false}
      disableGutters
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        border: "2px solid gray",
        borderRadius: "10px",
        padding: "20px",
      }}>
      <FormControl
        sx={{
          m: 1,
          minWidth: 120,
          textAlign: "center",
        }}
        size="small">
        <Typography variant="h5" component={"h5"}>
          Generate Voter Token
        </Typography>
        {error && (
          <Typography variant="p" component={"p"} color="error">
            {error}
          </Typography>
        )}
        <FormGroup>
          <TextField
            onChange={(e) => setRegNo(e.target.value)}
            sx={{ my: 1 }}
            label="Candidate Registration Number"
            required
          />
        </FormGroup>
        <FormGroup>
          <TextField
            onChange={(e) => setPhone(e.target.value)}
            sx={{ my: 1 }}
            label="Candidate Phone Number"
            required
          />
        </FormGroup>
        <FormGroup>
          <select
            onChange={(e) => setLevel(e.target.value)}
            label="Candidate Level"
            type="number"
            required
            style={{
              height: 50,
              background: "none",
              color: "#c0c0c0",
              // fontWeight: "500",
              fontSize: 15,
              marginTop: 10,
              paddingLeft: 10,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#878787",
            }}>
            <option value={null}>--Select Level--</option>
            <option value={400}>400</option>
            <option value={300}>300</option>
            <option value={200}>200</option>
            <option value={100}>100</option>
          </select>
        </FormGroup>
        <FormGroup>
          <Button sx={{ mt: 2 }} onClick={handleSubmit}>
            Submit
          </Button>
        </FormGroup>
      </FormControl>
    </Container>
  );
};

export default GenerateToken;
