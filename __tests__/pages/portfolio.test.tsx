import { render, screen } from '@testing-library/react';
import Portfolio from '../../pages/portfolio';

describe('Portfolio page', () => {
  beforeEach(() => {
    render(<Portfolio projects={[]} />);
  });

  test('should has portfolio title', () => {
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
  });
});
