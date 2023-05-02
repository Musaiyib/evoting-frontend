import React, { useEffect, useState } from "react";
import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import PaperComponent from "../Components/PaperComponent";
import "../sass/votingpage.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCandidates } from "../Slices/candidateSlice";
import { vote } from "../Slices/voteSlice";
import { useNavigate } from "react-router-dom";

const VotingPage = () => {
  const [selectedCandidates, setSelectedCandidates] = useState({
    "President": null,
    "Vice President I": null,
    "Vice President II": null,
    "Secretary General": null,
    "Assistant Secretary General": null,
    "Director Audit": null,
    "Assistant Director Audit": null,
    "Director Finance": null,
    "Assistant Director Finance": null,
    "Director Media and Publicity": null,
    "Assistant Director Media and Publicity": null,
    "Director Welfare and Services": null,
    "Assistant Director Welfare and Services": null,
    "Director Sports": null,
    "Assistant Director Sports": null,
    "Director Library": null,
    "Assistant Director Library": null,
    "Director Social": null,
    "Assistant Director Social": null,
    "Director Research and Innovations": null,
    "Assistant Director Research and Innovations": null,
    "Director Business": null,
    "Assistant Director Business": null,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { loginVoter } = useSelector(state => state.votes)
  const { candidates } = useSelector((state) => state.candidates);

  if (!loginVoter) {
    navigate('/login')
  }
  useEffect(() => {
    dispatch(getCandidates());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCandidateSelect = (role, candidate) => {
    setSelectedCandidates((prevSelectedCandidates) => {
      const updatedCandidates = {
        ...prevSelectedCandidates,
        [role]: candidate,
      };
      // Check if a candidate was already selected for this role
      if (prevSelectedCandidates[role]) {
        // Overwrite the previous selection with the new one
        updatedCandidates[role] = candidate;
      }
      return updatedCandidates;
    });
  };

  const handleVoteSubmit = () => {
    dispatch(vote({
      regNo: loginVoter.regNo,
      votePin: loginVoter.votePin,
      candidates: selectedCandidates
    }))
    console.log(selectedCandidates);
  } 

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
      <div className="welcome">
        <Typography variant="p" fontSize={16} component="h5">
          <b>NOTE: </b>Vote wisely, you can only use your TOKEN once
        </Typography>
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
                  voteBtn={true}
                  handleCandidateSelect={(candidate) => handleCandidateSelect(role, candidate)}
                />
              ))}
            </Grid>
          )}
        </React.Fragment>
      ))}
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
          marginTop: 6
        }}
        onClick={handleVoteSubmit}
      >
        Submit vote
      </Button>
    </Container>
  );
};

export default VotingPage;
