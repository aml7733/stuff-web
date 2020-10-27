import React, {ReactElement} from 'react';
import {Typography, Button, Grid, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

function LandingPage(): ReactElement {
  const classes = useStyles();

  return (
    <Box className={classes.paper}>
      <Typography align="center" variant="h2">
        Placeholder Landing Page
      </Typography>
      <Grid item>
        <Link to="/login">
          <Button>Login to Account</Button>
        </Link>
      </Grid>
    </Box>
  );
}

export default LandingPage;
