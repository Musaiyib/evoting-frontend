import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import logo from "../../image/nacos.png";
import { useDispatch } from "react-redux";
import { deleteCandidate } from "../../Slices/candidateSlice";

const PaperComponent = ({ voteBtn, candidate, openModal }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteCandidate(id));
  };
  return (
    <Paper
      elevation={7}
      sx={{
        maxWidth: 200,
        minWidth: 200,
        borderRadius: 3,
      }}>
      <Grid>
        <Card
          sx={{
            maxWidth: 200,
            minWidth: 200,
            borderRadius: 3,
          }}>
          <CardActionArea
            sx={{
              height: !voteBtn ? 280 : 260,
            }}>
            <CardMedia
              component="img"
              height="160"
              image={logo}
              sx={{
                objectFit: "contain",
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                boxShadow: 1,
                paddingY: 1,
              }}
              alt="candidate picture"
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography
                fontSize={14}
                fontWeight="bold"
                variant="h2"
                color="green"
                textTransform="capitalize"
                component="div">
                {candidate.name}
              </Typography>
              <Typography
                variant="h5"
                fontWeight="bold"
                fontSize={12}
                textTransform="capitalize"
                component="div">
                ({candidate.nickname})
              </Typography>
              <Typography
                fontSize={18}
                color="green"
                fontWeight="bolder"
                variant="h2"
                mt={2}
                textTransform="capitalize"
                component="p">
                Votes: 204
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // mt: -2,
            }}>
            <Button
              sx={{ textAlign: "center", width: "100%" }}
              size="small"
              color="primary"
              startIcon={<EditIcon />}
              onClick={openModal}>
              <Typography fontSize={14}>Edit</Typography>
            </Button>
            <Button
              sx={{ textAlign: "center", width: "100%" }}
              size="small"
              color="error"
              startIcon={<DeleteForeverIcon />}
              onClick={() => handleDelete(candidate._id)}>
              <Typography fontSize={14}>Delete</Typography>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Paper>
  );
};

export default PaperComponent;
