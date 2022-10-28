import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import PaperComponent from "../Components/PaperComponent";
import "../sass/votingpage.scss";

const VotingPage = () => {
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
        <Typography variant="p" fontSize={16} component="h5">
          <b>NOTE: </b>Vote wisely, you can only use your TOKEN once
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
      <Button
        variant="text"
        sx={{
          ":hover": {
            bgcolor: "rgb(11, 190, 11)",
          },
          backgroundColor: "green",
          width: "300px",
          margin: 3,
          color: "white",
          fontWeight: "bold",
          fontSize: 16,
        }}>
        Submit vote
      </Button>
    </Container>
  );
};

export default VotingPage;
