import { render } from '@testing-library/react';
import Home from '../../pages';

describe('Home', () => {
  test('it renders HomePage unchanged', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
