import renderer from 'react-test-renderer';
import CraLanding from './CraLanding';
import {render, screen} from "@testing-library/react";

test('renders learn react link', () => {
  render(<CraLanding />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('snapshot', () => {
  const component = renderer.create(
      <CraLanding />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
