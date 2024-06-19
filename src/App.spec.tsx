import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { RecoilRoot } from 'recoil';

const renderComponent = () => {
  render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
};

describe('test App testing', () => {
  test('test title', async () => {
    renderComponent();

    const title = await screen.findByText('My todos');

    expect(title).not.toBeNull();
  });
});
