import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from './';

describe('Search component', () => {
  test('renders without crashing', () => {
    render(<Search />);
  });

  test('updates search term on input change', () => {
    const { getByLabelText } = render(<Search />);
    const input = getByLabelText('Search keyword or phrase');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });

  test('calls onSearch with the correct search term on button click', () => {
    const onSearchMock = jest.fn();
    const { getByLabelText, getByText } = render(<Search onSearch={onSearchMock} />);
    const input = getByLabelText('Search keyword or phrase');
    const button = getByText('Search');

    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.click(button);

    expect(onSearchMock).toHaveBeenCalledWith('test');
  });

  test('clears search term after search', () => {
    const onSearchMock = jest.fn();
    const { getByLabelText, getByText } = render(<Search onSearch={onSearchMock} />);
    const input = getByLabelText('Search keyword or phrase');
    const button = getByText('Search');

    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.click(button);

    expect(input.value).toBe('');
  });
});
