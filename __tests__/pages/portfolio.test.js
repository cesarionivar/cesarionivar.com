import { render, screen } from '@testing-library/react';
import Portfolio from '../../pages/portfolio';

describe('Porfolio page', () => {
  render(<Portfolio />);

  test('should has portfolio title', () => {
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
  });
});
