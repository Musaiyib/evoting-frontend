import { Container, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../sass/votingpage.scss";
import { getCandidates } from "../../Slices/candidateSlice";
import PaperComponent from "../Components/PaperComponent";

const Candidates = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCandidates());
  }, []);

  const { candidates } = useSelector((state) => state.candidates);

  console.log(candidates);

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
      <div className="header"></div>
      <div className="welcome">
        <Typography
          variant="p"
          fontSize={16}
          component="h5"
          sx={{ px: 2, objectFit: "contain" }}>
          <b>NOTE: </b>Make sure you enhance FREE AND FAIR election for the
          benefits of the ASSOTIATION
        </Typography>
      </div>
      <Divider sx={{ marginY: 4 }} orientation="horizontal" flexItem>
        Presidents
      </Divider>
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
        {candidates.map((candidate) => (
          <PaperComponent
            key={candidate._id}
            candidate={candidate}
            voteBtn={true}
          />
        ))}
      </Grid>
      {/* <Divider sx={{ marginY: 4 }} orientation="horizontal" flexItem>
        Vice Presidents I
      </Divider>
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
        <PaperComponent voteBtn={true} />
        <PaperComponent voteBtn={true} />
        <PaperComponent voteBtn={true} />
      </Grid> */}
      {/* <Divider sx={{ marginY: 4 }} orientation="horizontal" flexItem>
        Vice Presidents II
      </Divider>
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
        <PaperComponent voteBtn={true} />
        <PaperComponent voteBtn={true} />
        <PaperComponent voteBtn={true} />
      </Grid>
      <Divider sx={{ marginY: 4 }} orientation="horizontal" flexItem>
        Secretary Generals
      </Divider>
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
        <PaperComponent voteBtn={true} />
        <PaperComponent voteBtn={true} />
        <PaperComponent voteBtn={true} />
      </Grid> */}
    </Container>
  );
};

export default Candidates;
