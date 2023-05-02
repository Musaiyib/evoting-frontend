import { Container, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import PaperComponent from "../Components/PaperComponent";
import "../sass/home.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCandidates } from "../Slices/candidateSlice";
import { useNavigate } from "react-router-dom";
// import aukpic from "../image/auk.jpg";

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getCandidates());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { candidates } = useSelector((state) => state.candidates);
  const handleNavigate = () => {
    navigate("/login");
  }
  return (
    <Container
      className="home"
      maxWidth={false}
      disableGutters
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingBottom: 10
      }}>
      <div className="header"></div>
      <div className="welcome">
        <Typography variant="h1" color="white" fontSize={70} component="h1">
          Welcome to Nacos
        </Typography>
        <Typography variant="p" fontSize={30} component="h5">
          E-Voting website
        </Typography>
        <button style={{ zIndex: 2, width: 120, height: 50, borderRadius: 10, border: 'none', marginTop: 40 }} onClick={handleNavigate}>Click to Vote</button>
        {/* <p className="totalVoted">1304</p>
        <p className="totalExpected">3000</p> */}
        <div className="overlay"></div>
      </div>
      {Object.keys(candidates).map((role) => (
        <React.Fragment key={role}>
          <Divider sx={{ marginY: 4 }} orientation="horizontal" flexItem>
            {role}
          </Divider>
          {candidates[role].length === 0 ? (
            <Typography variant="subtitle2" color="red">No candidates for this role: {role}.</Typography>
          ) : (
            <Grid
              container
              sx={{
                margin: 0,
                padding: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
              }}>
              {candidates[role].map((candidate) => (
                <PaperComponent
                  key={candidate._id}
                  candidate={candidate}
                  voteBtn={false}
                />
              ))}
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Container>
  );
};

export default Home;
