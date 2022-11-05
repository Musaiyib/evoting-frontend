import { Group, MapsHomeWork } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Grid,
  List,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const Main = ({ setSelectedLink, link }) => {
  const users = {};
  const rooms = {};
  useEffect(() => {
    setSelectedLink(link);
  }, []);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    // <Box
    //   sx={{
    //     display: { xs: "flex", md: "grid" },
    //     justifyContent: "center",
    //     alignItems: "center",
    //     gridTemplateColumns: "repeat(3,1fr)",
    //     gridAutoRows: "minmax(100px, auto)",
    //     gap: 3,
    //     textAlign: "center",
    //     flexDirection: "column",
    //   }}>
    <Grid container gap={2} width="100%">
      <Grid item sm={12}>
        <Paper elevation={3} sx={{ p: 3, minWidth: 250 }}>
          <Typography variant="h4">Total Users</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Group sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }} />
            <Typography variant="h4">{users.length}</Typography>
          </Box>
        </Paper>
      </Grid>

      <Grid item sm={12}>
        <Paper elevation={3} sx={{ p: 3, minWidth: 250 }}>
          <Typography variant="h4">Total Rooms</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <MapsHomeWork
              sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }}
            />
            <Typography variant="h4">{rooms.length}</Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
    // </Box>
  );
};

export default Main;
