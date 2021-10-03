import React from 'react';
import SignUp from './SignUp';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

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
});
