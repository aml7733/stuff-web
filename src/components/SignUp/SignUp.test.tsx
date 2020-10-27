import React from 'react';
import SignUp from './SignUp';
import {render, screen, waitFor} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';

describe('Login', () => {
  test('it renders without crashing', async () => {
    render(
        <Router>
          <SignUp />
        </Router>,
    );

    const submit = await waitFor(() => screen.queryByText('Sign Up'));

    expect(submit).toBeInTheDocument();
  });

  test('it matches snapshot', async () => {
    const {container} = render(
        <Router>
          <SignUp />
        </Router>,
    );

    await waitFor(() => screen.queryByText('Sign Up'));

    expect(container).toMatchSnapshot();
  });
});
