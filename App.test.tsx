import React from 'react';
import { render, screen } from '@testing-library/react-native';
import App from './App';

describe('Login Screen', () => {
  test('renders email input', () => {
    render(<App />);

    expect(screen.getByPlaceholderText('Email')).toBeOnTheScreen();
  });

  test('renders login button', () => {
    render(<App />);

    expect(screen.getByText('Login')).toBeOnTheScreen();
  });
});
