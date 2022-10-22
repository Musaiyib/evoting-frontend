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

const PaperComponent = ({ voteBtn }) => {
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
                component="div">
                Musaiyib Yakubu Usman
              </Typography>
              <Typography
                variant="h5"
                fontWeight="bold"
                fontSize={12}
                component="div">
                (Supplier)
              </Typography>
              <Typography
                fontSize={18}
                color="green"
                fontWeight="bolder"
                variant="h2"
                mt={2}
                component="p">
                Votes: 204
              </Typography>
            </CardContent>
          </CardActionArea>
          {voteBtn && (
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
                color="primary">
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
