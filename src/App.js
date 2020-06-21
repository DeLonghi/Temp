import React from "react";
import {
  Container,
  TextField,
  Paper,
  makeStyles,
  Grid,
  Avatar,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    maxWidth: 1000,
  },
  container: {
    marginBottom: "auto",
    width: "auto",
  },
  paper: {
    padding: theme.spacing(1),
    margin: "auto",
  },
  avatar: {
    width: 100,
    height: 100,
  },
  layout: {
    padding: "0px 200px",
  },
  TextField: {
    marginTop: 15,
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container className={classes.layout} direction="column">
          <Grid container className={classes.container} spacing={2}>
            <Grid item>
              <Avatar
                className={classes.avatar}
                alt="complex"
                src="https://via.placeholder.com/150"
              />
            </Grid>
            <Grid item sm container>
              <Grid item xs container direction="column">
                <Grid item>
                  <TextField id="standard-basic" label="First Name" fullWidth />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="Second Name"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Typography variant="subtitle2" gutterBottom>
            Note: it will be display only for your friends
          </Typography>

          <Grid
            container
            className={classes.container}
            direction="column"
            spacing={1}
          >
            <Grid item>
              <TextField
                id="standard-basic"
                label="Your publick nickname"
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                className={classes.TextField}
                id="outlined-description"
                label="description"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
