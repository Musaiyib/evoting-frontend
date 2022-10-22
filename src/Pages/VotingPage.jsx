import { Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import PaperComponent from "../Components/PaperComponent";

const VotingPage = () => {
  return (
    <Container
      sx={{
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}>
      <div className="header">
        <Typography variant="heading" fontSize={50} component="h2">
          Welcome to Nacos
        </Typography>
        <Typography variant="p" fontSize={30} component="h5">
          E-Voting website
        </Typography>
      </div>
      <div className="statistics">
        <p className="totalVoted">1304</p>
        <p className="totalExpected">3000</p>
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
        <PaperComponent voteBtn={true} />
        <PaperComponent voteBtn={true} />
        <PaperComponent voteBtn={true} />
      </Grid>
      <Divider sx={{ marginY: 4 }} orientation="horizontal" flexItem>
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
      </Grid>
      <Divider sx={{ marginY: 4 }} orientation="horizontal" flexItem>
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
      </Grid>
    </Container>
  );
};

export default VotingPage;
