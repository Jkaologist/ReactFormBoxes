import { render } from '@testing-library/react';
import App from './App';

// smoke tests
it("renders", function () {
  render(<App />);
});
// snapshot test
it("matches the snapshot", function () {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});