import { render, screen } from '@testing-library/react';

import { StyledButton } from './index';

test('renders StyledButton', () => {
  render(<StyledButton>MyButton</StyledButton>);
  const btn = screen.getByText('MyButton');
  expect(btn).toBeInTheDocument();
});
