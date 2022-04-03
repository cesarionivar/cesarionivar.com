import { render } from '@testing-library/react';
import Home from '../../pages';

describe('Home', () => {
  test('it renders Homepage unchanged', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
