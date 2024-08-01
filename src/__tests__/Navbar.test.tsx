import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

// TypeScript ensures `tree` is of type `ReactTestRendererJSON | ReactTestRendererJSON[] | null`
it('Test Navigation renders correctly', () => {
  const tree: ReactTestRendererJSON | ReactTestRendererJSON[] | null = renderer
    .create(
      <Router>
        <Navbar />
      </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
