import { Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import "../../sass/votingpage.scss";
import PaperComponent from "../Components/PaperComponent";

const Candidates = () => {
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
        <Typography variant="p" fontSize={16} component="h5" sx={{ px: 2 }}>
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

export default Candidates;
