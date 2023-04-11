import {Container, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../sass/votingpage.scss";
import { getCandidates } from "../../Slices/candidateSlice";
import PaperComponent from "../Components/PaperComponent";
import EditModal from "./EditModal";

const Candidates = () => {
  const [openModal, setOpenModal] = useState(false);
  const [person, setPerson] = useState();

  const handleModal = (candidate) => {
    setOpenModal(!openModal);
    setPerson(candidate);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCandidates());
  }, []);

  const { candidates } = useSelector((state) => state.candidates);

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
      {openModal && (
        <EditModal open={openModal} close={handleModal} candidate={person} />
      )}
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
                  openModal={() => handleModal(candidate)}
                  closeModal={handleModal}
                />
              ))}
            </Grid>
          )}
        </React.Fragment>
      ))}
      
    </Container>
  );
};

export default Candidates;
