import {
  Button,
  FormControl,
  FormGroup,
  Input,
  Stack,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCandidate, getRoles } from "../../Slices/candidateSlice";

const AddCandidates = () => {
  const [name, setName] = useState();
  const [regNo, setRegNo] = useState();
  const [phone, setPhone] = useState();
  const [level, setLevel] = useState();
  const [nickname, setNickname] = useState();
  const [image, setImage] = useState();
  const [position, setPosition] = useState();
  const [error, setError] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoles())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const { roles } = useSelector(state => state.candidates)
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
    if (level === undefined || level === null) {
      setError("level field is required");
      return false;
    }
    if (nickname === undefined || nickname === "" || nickname === null) {
      setError("Nickname field is required");
      return false;
    }
    if (image === undefined || image === "" || image === null) {
      setError("You need to upload an image");
      return false;
    }
    if (phone === undefined || phone === "" || phone === null) {
      setError("Phone field is required");
      return false;
    }
    if (position === undefined || position === "" || position === null) {
      setError("Position field is required");
      return false;
    }
    const parsedLevel = JSON.parse(level);
    dispatch(
      createCandidate({
        name,
        level: parsedLevel,
        phone,
        position,
        regNo,
        nickname,
      })
    );
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
          <TextField
            onChange={(e) => setNickname(e.target.value)}
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
            onChange={(e) => setPosition(e.target.value)}
          >
            <option value={null}>--Select Position--</option>
            {roles.map((role) => (
              <option key={role} value={role.toLowerCase()}>{role}</option>
            ))}
          </select>
          <Button sx={{ mt: 2 }} onClick={handleSubmit}>
            Submit
          </Button>
        </FormGroup>
      </FormControl>
    </Container>
  );
};

export default AddCandidates;
