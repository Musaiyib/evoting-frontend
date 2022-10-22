import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import logo from "../image/nacos.png";

const Home = () => {
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
        <Paper
          elevation={7}
          sx={{
            maxWidth: 200,
            borderRadius: 3,
          }}>
          <Grid>
            <Card
              sx={{
                maxWidth: 200,
                borderRadius: 3,
              }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image={logo}
                  sx={{
                    objectFit: "contain",
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    boxShadow: 2,
                    paddingY: 1,
                  }}
                  alt="candidate picture"
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    fontSize={14}
                    fontWeight="bold"
                    variant="h2"
                    component="div">
                    Musaiyib Yakubu Usman
                  </Typography>
                  <Typography variant="h5" fontSize={12} component="div">
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
            </Card>
          </Grid>
        </Paper>
        <Paper
          elevation={7}
          sx={{
            maxWidth: 200,
            borderRadius: 3,
          }}>
          <Grid>
            <Card
              sx={{
                maxWidth: 200,
                borderRadius: 3,
              }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image={logo}
                  sx={{
                    objectFit: "contain",
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    boxShadow: 2,
                    paddingY: 1,
                  }}
                  alt="candidate picture"
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    fontSize={14}
                    fontWeight="bold"
                    variant="h2"
                    component="div">
                    Musaiyib Yakubu Usman
                  </Typography>
                  <Typography variant="h5" fontSize={12} component="div">
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
            </Card>
          </Grid>
        </Paper>
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
        <Paper
          elevation={7}
          sx={{
            maxWidth: 200,
            borderRadius: 3,
          }}>
          <Grid>
            <Card
              sx={{
                maxWidth: 200,
                borderRadius: 3,
              }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image={logo}
                  sx={{
                    objectFit: "contain",
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    boxShadow: 2,
                    paddingY: 1,
                  }}
                  alt="candidate picture"
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    fontSize={14}
                    fontWeight="bold"
                    variant="h2"
                    component="div">
                    Musaiyib Yakubu Usman
                  </Typography>
                  <Typography variant="h5" fontSize={12} component="div">
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
            </Card>
          </Grid>
        </Paper>
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
        <Paper
          elevation={7}
          sx={{
            maxWidth: 200,
            borderRadius: 3,
          }}>
          <Grid>
            <Card
              sx={{
                maxWidth: 200,
                borderRadius: 3,
              }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image={logo}
                  sx={{
                    objectFit: "contain",
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    boxShadow: 2,
                    paddingY: 1,
                  }}
                  alt="candidate picture"
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    fontSize={14}
                    fontWeight="bold"
                    variant="h2"
                    component="div">
                    Musaiyib Yakubu Usman
                  </Typography>
                  <Typography variant="h5" fontSize={12} component="div">
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
            </Card>
          </Grid>
        </Paper>
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
        <Paper
          elevation={7}
          sx={{
            maxWidth: 200,
            borderRadius: 3,
          }}>
          <Grid>
            <Card
              sx={{
                maxWidth: 200,
                borderRadius: 3,
              }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image={logo}
                  sx={{
                    objectFit: "contain",
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    boxShadow: 2,
                    paddingY: 1,
                  }}
                  alt="candidate picture"
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    fontSize={14}
                    fontWeight="bold"
                    variant="h2"
                    component="div">
                    Musaiyib Yakubu Usman
                  </Typography>
                  <Typography variant="h5" fontSize={12} component="div">
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
            </Card>
          </Grid>
        </Paper>
      </Grid>
    </Container>
  );
};

export default Home;
