import { render, screen } from '@testing-library/react';
import { Footer } from '../../components/Footer';

describe('Footer component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test('should have the author name', () => {
    const authorElement = screen.getByText(/Cesario Nivar/i);

    expect(authorElement).toBeInTheDocument();
  });

  test('should have the author social links', () => {
    const socialLinks = screen.getAllByRole('link');
    socialLinks.forEach((link) => {
      expect(link).toHaveAttribute('href');
    });
  });
});
