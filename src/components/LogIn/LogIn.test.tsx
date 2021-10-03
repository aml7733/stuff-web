import React from 'react';
import LogIn from './LogIn';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Login', () => {
  test('it renders without crashing', async () => {
    render(
        <Router>
          <LogIn />
        </Router>,
    );

    const submit = await waitFor(() => screen.queryByText('Sign In'));

    expect(submit).toBeInTheDocument();
  });
});
