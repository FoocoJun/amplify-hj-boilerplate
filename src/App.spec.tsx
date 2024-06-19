import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

const renderComponent = () => {
  render(<App />);
};

describe('test App testing', () => {
  test('test title', async () => {
    renderComponent();

    const title = await screen.findByText('My todos');
  
    expect(title).not.toBeNull();
  })
});
