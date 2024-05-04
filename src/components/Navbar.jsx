import React from 'react'
import {
  AppBar,
  Toolbar,
  Box,
  Grid,
  Typography,
  Button,
} from "@mui/material";


const Navbar = () => {
  return (
    <Grid container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: '#fff' }}>
          <Toolbar variant="dense">
            <Typography variant="h4" align='Left' component="div" sx={{ flexGrow: 1, fontFamily: "revert", fontSize: "500", color: "black" }}>
              Job Portal
            </Typography>

            <Box sx={{ m: 0.5, mx: 'auto', width: 80 }}>
              <Button variant="outlined" href='http://localhost:3000'>Home</Button>
            </Box>
            <Box sx={{ m: 0.5, mx: 'auto', width: 100 }}>
              <Button variant="outlined" href='http://localhost:3000/create'>Add Job</Button>
            </Box>
            <Box sx={{ m: 0.5, mx: 'auto', width: 180 }}>
              <Button variant="outlined" href='https://naukari.com/'>Contact Us</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Grid>
  )
}

export default Navbar
