import {
  Button,
  FormControl,
  FormGroup,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "@mui/material/Modal";
import { updateCandidate } from "../../Slices/candidateSlice";

const EditModal = ({ open, close, candidate }) => {
  const [name, setName] = useState(candidate?.name);
  const [regNo, setRegNo] = useState(candidate?.regNo);
  const [phone, setPhone] = useState(candidate?.phone);
  const [level, setLevel] = useState(candidate?.level);
  const [nickname, setNickName] = useState(candidate?.nickname);
  const [image, setImage] = useState();
  const [position, setPosition] = useState(candidate?.position);
  const [error, setError] = useState();

  const dispatch = useDispatch();

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
    // console.log(name, regNo, phone, position, image, level);
    // const parsedLevel = JSON.parse(level);
    const data = {
      name,
      level,
      phone,
      position,
      regNo,
      nickname,
    };

    dispatch(updateCandidate({ id: candidate._id, data }));
  };
  return (
    <div
      className="modal"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <FormControl
          sx={{
            m: 1,
            minWidth: 120,
            textAlign: "center",
            backgroundColor: "#282828",
            padding: 5,
          }}
          size="small">
          <Typography variant="h5" component={"h5"}>
            Candidate Update Form
          </Typography>
          <Button
            onClick={close}
            color="error"
            sx={{
              position: "absolute",
              top: 30,
              right: 10,
              fontWeight: "bolder",
              fontSize: 20,
            }}>
            X
          </Button>
          {error && (
            <Typography variant="p" component={"p"} color="error">
              {error}
            </Typography>
          )}
          <FormGroup>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ my: 1 }}
              label="Candidate Full name"
              required
            />
          </FormGroup>
          <FormGroup>
            <TextField
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
              sx={{ my: 1 }}
              label="Candidate Registration Number"
              required
            />
          </FormGroup>
          <FormGroup>
            <TextField
              value={phone}
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
              value={level}
              required
              style={{
                height: 50,
                background: "none",
                color: "#c0c0c0",
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
              value={nickname}
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
              onChange={(e) => {
                console.log(e);
                setPosition(e.target.value);
              }}>
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
            <Button sx={{ mt: 2 }} onClick={handleSubmit}>
              Submit
            </Button>
          </FormGroup>
        </FormControl>
      </Modal>
    </div>
  );
};

export default EditModal;
