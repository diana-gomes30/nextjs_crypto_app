import { Button } from '@components/common/Button';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('button', () => {
  it('Show button on page', () => {
    render(<Button label="text" />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).not.toHaveTextContent('text1');
  });
});
