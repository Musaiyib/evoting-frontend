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
import React from "react";
import logo from "../image/nacos.png";
import { useSelector } from "react-redux";

const PaperComponent = ({ candidate, voteBtn, handleCandidateSelect }) => {

  const { loginVoter } = useSelector(state => state.votes)
  
  const handleVoteClick = () => {
    handleCandidateSelect(candidate);
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
              height: !voteBtn ? 290 : 290,
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
                component="div"
              >
                {candidate?.name}
              </Typography>
              <Typography
                variant="h5"
                fontWeight="bold"
                fontSize={12}
                textTransform="capitalize"
                component="div">
                {`(${candidate?.nickname})`}
              </Typography>
              <Typography
                fontSize={18}
                color="green"
                fontWeight="bolder"
                variant="h2"
                textTransform="capitalize"
                component="p"
                sx={{
                  marginTop: 2,
                }}

              >
                {candidate?.votes}
              </Typography>
            </CardContent>
          </CardActionArea>
          {voteBtn && loginVoter?.voted !== true && (
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Button
                sx={{ textAlign: "center", width: "100%" }}
                size="small"
                color="primary"
                onClick={handleVoteClick}
              >
                <Typography>Vote</Typography>
              </Button>
            </CardActions>
          )}
        </Card>
      </Grid>
    </Paper>
  );
};

export default PaperComponent;
