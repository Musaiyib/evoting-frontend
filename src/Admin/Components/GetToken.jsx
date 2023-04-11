import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllVoteTokens, getVoteToken } from "../../Slices/voteSlice";

const GetToken = () => {
  const [regNo, setRegNo] = useState();
  const [phone, setPhone] = useState();
  const [error, setError] = useState();

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllVoteTokens())
  },[])

  const {voters } = useSelector(state => state.votes)

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
    dispatch(getVoteToken({ regNo, phone }));
  };
  return (
    <Container
      className="votingpage"
      // maxWidth={false}
      // disableGutters
      sx={{
        width: {sm: "500px",md: '800px', lg: "1500px"},
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        border: "2px solid gray",
        borderRadius: "10px",
        padding: "20px",
      }}>
          <Typography variant="h5" component={"h5"}>
            Get Voter Token
          </Typography>
          {error && (
            <Typography variant="p" component={"p"} color="error">
              {error}
            </Typography>
          )}
      <FormControl
        sx={{
          m: 1,
          minWidth: 120,
          textAlign: "center",
          flexDirection: {sm: "column", md: "row", lg: "row"},
        }}
        size="small">
        <FormGroup>
          <TextField
            onChange={(e) => setRegNo(e.target.value)}
            sx={{ m: 1 }}
            label="Voter Registration Number"
            required
          />
        </FormGroup>
        <FormGroup>
          <TextField
            onChange={(e) => setPhone(e.target.value)}
            sx={{ my: 1 }}
            label="Voter Phone Number"
            required
          />
        </FormGroup>
      </FormControl>
          <Button sx={{ mt: 0 }} onClick={handleSubmit} variant="contained">
            Submit
          </Button>
      <Grid container spacing={2} mt={5} width="100%" display="flex" justifySelf="center" alignItems="center">
        <Grid item flexDirection='row' width="100%" display="flex" justifyContent="space-evenly" alignItems="center">
          <Typography variant="p" flex={1} component="h4">Registraion Num.</Typography>
          <Typography variant="p" flex={1} component="h4">Vote Pin</Typography>
          <Typography variant="p" flex={1} component="h4">Voted</Typography>
          <Typography variant="p" flex={1} component="h4">Phone Num.</Typography>
        </Grid>
        {voters.map((voter) => (
        <Grid
          key={voter._id}
          item
          flexDirection='row'
          width="100%"
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Typography variant="body1" flex={1} component="p">
            {voter.regNo}
          </Typography>
          <Typography variant="body1" flex={1} component="p">
            {voter.votePin}
          </Typography>
          <Typography variant="body1" flex={1} component="p">
            {voter.voted ? 'Yes' : 'No'}
          </Typography>
          <Typography variant="body1" flex={1} component="p">
            {voter.phone}
          </Typography>
        </Grid>
      ))}
      </Grid>
    </Container>
  );
};

export default GetToken;
