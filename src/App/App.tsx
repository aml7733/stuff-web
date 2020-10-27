import React, {ReactElement} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Container, CssBaseline} from '@material-ui/core';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {purple, brown} from '@material-ui/core/colors';
import LandingPage from '../components/LandingPage/LandingPage';
import LogIn from '../components/LogIn/LogIn';
import SignUp from '../components/SignUp/SignUp';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[700],
    },
    secondary: {
      main: brown[400],
    },
  },
});

function App(): ReactElement {
  return (
    <Container>
      <CssBaseline />
      <Router>
        <ThemeProvider theme={theme}>
          <Container>
            <Switch>
              <Route path="/login">
                <LogIn />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/">
                <LandingPage />
              </Route>
            </Switch>
          </Container>
        </ThemeProvider>
      </Router>
    </Container>
  );
}

export default App;
