import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Form from "./components/Form/form";
import Posts from "./components/Posts/posts";
// image
import memory from "./img/memories.png";
// styles
import useStyles from "./styles";

// main

const App = () => {
  const [currentId, setCurrentId] = useState(null);

  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center" className={classes.heading}>
          MemoPAD
        </Typography>
        <img
          src={memory}
          alt="memories"
          height="60"
          className={classes.image}
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            className={classes.mainContainer}
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
