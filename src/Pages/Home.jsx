import { Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import PaperComponent from "../Components/PaperComponent";
import "../sass/home.scss";

const Home = () => {
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
      }}>
      <div className="header"></div>
      <div className="welcome">
        <Typography variant="heading" fontSize={50} component="h2">
          Welcome to Nacos
        </Typography>
        <Typography variant="p" fontSize={30} component="h5">
          E-Voting website
        </Typography>
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
        <PaperComponent voteBtn={false} />
        <PaperComponent voteBtn={false} />
        <PaperComponent voteBtn={false} />
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
        <PaperComponent voteBtn={false} />
        <PaperComponent voteBtn={false} />
        <PaperComponent voteBtn={false} />
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
        <PaperComponent voteBtn={false} />
        <PaperComponent voteBtn={false} />
        <PaperComponent voteBtn={false} />
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
        <PaperComponent voteBtn={false} />
        <PaperComponent voteBtn={false} />
        <PaperComponent voteBtn={false} />
      </Grid>
    </Container>
  );
};

export default Home;
