import Typography from './Typography';
import { VARIANTS } from './Typography.constants';
import { describe, it, expect, render, screen } from '../../utils/testing';

describe('Typography component', () => {
  it('should render', () => {
    render(<Typography />);

    expect(screen.getByTestId('typography')).toBeInTheDocument();
  });

  it('should render with children prop', () => {
    render(<Typography>Content</Typography>);

    expect(screen.getByTestId('typography')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('should render with <h1 /> tag', () => {
    render(<Typography as='h1' />);

    expect(screen.getByTestId('typography')).toBeInTheDocument();
    expect(screen.getByTestId('typography')).toBe(document.querySelector('h1'));
  });

  it('should render with variant prop', () => {
    render(<Typography variant='h1' />);

    expect(screen.getByTestId('typography')).toBeInTheDocument();
    expect(screen.getByTestId('typography')).toHaveClass(VARIANTS['h1']);
  });
});
