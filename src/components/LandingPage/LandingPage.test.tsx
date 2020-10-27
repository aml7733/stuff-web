import React from 'react';
import LandingPage from './LandingPage';
import {render, screen, waitFor} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';

describe('LandingPage', () => {
  test('it renders without crashing', async () => {
    render(
        <Router>
          <LandingPage />
        </Router>,
    );

    const login = await waitFor(() => screen.queryByText('Login to Account'));

    expect(login).toBeInTheDocument();
  });

  test('it matches snapshot', async () => {
    const {container} = render(
        <Router>
          <LandingPage />
        </Router>,
    );

    await waitFor(() => screen.queryByText('Login to Account'));

    expect(container).toMatchSnapshot();
  });
});
