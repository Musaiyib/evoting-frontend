import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormGroup,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const GenerateToken = () => {
  const [name, setName] = useState();
  const [regNo, setRegNo] = useState();
  const [error, setError] = useState();

  const handleSubmit = (e) => {
    setError(null);
    e.preventDefault();
    if (name === undefined || name === "" || name === null) {
      setError("Name field is required");
      return false;
    }
    if (regNo === undefined || regNo === "" || regNo === null) {
      setError("Registration number field is required");
      return false;
    }
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
      }}>
      <FormControl
        sx={{ m: 1, minWidth: 120, textAlign: "center" }}
        size="small">
        <Typography variant="h5" component={"h5"}>
          Candidate Upload Form
        </Typography>
        {error && (
          <Typography variant="p" component={"p"} color="error">
            {error}
          </Typography>
        )}
        <FormGroup>
          <TextField
            onChange={(e) => setName(e.target.value)}
            sx={{ my: 1 }}
            label="Candidate Full name"
            required
          />
        </FormGroup>
        <FormGroup>
          <TextField
            onChange={(e) => setRegNo(e.target.value)}
            sx={{ my: 1 }}
            label="Candidate Registration Number"
            required
          />
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
