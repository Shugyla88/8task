

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';

describe('App integration tests', () => {
  test('adds a new ad', () => {
    render(<App />);

    fireEvent.change(screen.getByPlaceholderText(/тема объявления/i), { target: { value: 'Новое объявление' } });
    fireEvent.change(screen.getByPlaceholderText(/Описание/i), { target: { value: 'Текст нового объявления' } });
    fireEvent.click(screen.getByText(/Добавить/i));

    expect(screen.getByText(/Новое объявление/i)).toBeInTheDocument();
    expect(screen.getByText(/Текст нового объявления/i)).toBeInTheDocument();
  });


});
