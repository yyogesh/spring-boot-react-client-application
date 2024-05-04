import React from 'react'
import {
    AppBar,
    Toolbar,
    Box,
    Card,
    Grid,
    Typography,
  } from "@mui/material";
  import { useEffect, useState } from "react";
import { IPost } from '../model';

const Search = () => {
    const [post, setPost] = useState<IPost[]>([]);

    useEffect(() => {
        const fetchInitialPosts = async () => {
            const response = await fetch(`http://localhost:8080/jobs`);
            const data = await response.json();
            console.log(data);
            setPost(data);
        }
         fetchInitialPosts();
      }, []);

  return (
        <Grid container spacing={2} sx={{ margin: "2%" }}>
                  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
 
          <Typography variant="h6" align='center' component="div" sx={{ flexGrow: 1 }}>
            Job Portal
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
      <Grid item xs={12} md={12} lg={12}>
      </Grid>
      {post &&
        post.map((p) => {
          return (
            <Grid key={p.postId} item xs={12} md={6} lg={4}>
              <Card sx={{ padding: "3%", overflow: "hidden", width: "84%" }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "2rem", fontWeight: "600" }}
                >
             {p.postProfile}
                </Typography>
                <Typography sx={{ color: "#585858", marginTop:"2%" }} variant="h6" >
                  Description: {p.postDesc}
                </Typography>
                <br />
                <br />
                <Typography variant="body1">
                  Years of Experience: {p.reqExperience} years
                </Typography>

                <Typography gutterBottom  variant="h6">Skills : </Typography>
                {p.postTechStack.map((s: string, i: number) => {
                  return (
                    <Typography variant="body1" gutterBottom key={p.postId + i}>
                      {s} .
                      {` `}
                    </Typography>
                  );
                })}
  
              </Card>
            </Grid>
          );
        })}
    </Grid>
  )
}

export default Search