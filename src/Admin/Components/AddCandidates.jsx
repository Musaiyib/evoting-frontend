import {
  Button,
  FormControl,
  FormGroup,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";

const AddCandidates = () => {
  const [name, setName] = useState();
  const [regNo, setRegNo] = useState();
  const [level, setLevel] = useState();
  const [nickName, setNickName] = useState();
  const [image, setImage] = useState();
  const [position, setPosition] = useState();
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
    if (level === undefined || level === "" || level === null) {
      setError("level field is required");
      return false;
    }
    if (nickName === undefined || nickName === "" || nickName === null) {
      setError("Nickname field is required");
      return false;
    }
    if (image === undefined || image === "" || image === null) {
      setError("You need to upload an image");
      return false;
    }
    if (position === undefined || position === "" || position === null) {
      setError("Position field is required");
      return false;
    }

    console.log(name, level, position, regNo, nickName, image);
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
          <TextField
            onChange={(e) => setLevel(e.target.value)}
            sx={{ my: 1 }}
            label="Candidate Level"
            required
          />
        </FormGroup>
        <FormGroup>
          <TextField
            onChange={(e) => setNickName(e.target.value)}
            sx={{ my: 1 }}
            label="Candidate Nickname"
            required
          />
        </FormGroup>
        <FormGroup>
          <Stack direction="row" alignItems="center" spacing={2}>
            <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                id="contained-button-file"
                type="file"
                onChange={(e) => setImage(e.target.value)}
                required
              />
              <Button
                variant="contained"
                component="span"
                sx={{
                  mt: 0.5,
                  mb: 2,
                }}>
                Candidate Image
              </Button>
            </label>
          </Stack>
        </FormGroup>
        <FormGroup>
          <select
            value={position || ""}
            label="Position"
            style={{
              height: 50,
              background: "none",
              color: "#c0c0c0",
              // fontWeight: "500",
              fontSize: 15,
              paddingLeft: 10,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#878787",
            }}
            required
            onChange={(e) => setPosition(e.target.value)}>
            <option value={null}>--Select Position--</option>
            <option value="president">President</option>
            <option value="vp1">Vice President 1</option>
            <option value="vp2">Vice President 2</option>
            <option value="secgen">Secretary General</option>
            <option value="secgen2">Asst Secretary General</option>
            <option value="finance">Director Finance</option>
            <option value="finance2">Asst Finance</option>
            <option value="Research">Director Research & Innovation</option>
            <option value="media">Director Media & Publicity</option>
            <option value="welfare">Director Welfare</option>
            <option value="welfare2">Asst Welfare</option>
            <option value="sport">Director Sport</option>
            <option value="sport2">Asst Sport</option>
            <option value="library">Director Library</option>
            <option value="library2">Asst Library</option>
            <option value="social">Director Social</option>
            <option value="social2">Asst Social</option>
            <option value="auditor">Director Auditor</option>
            <option value="auditor2">Asst Auditor</option>
            <option value="business">Director Business</option>
            <option value="business2">Asst Business</option>
          </select>
          <Button onClick={handleSubmit}>Submit</Button>
        </FormGroup>
      </FormControl>
    </Container>
  );
};

export default AddCandidates;
