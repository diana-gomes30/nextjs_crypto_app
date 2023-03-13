import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { NumPerPageOption } from '@components/index/NumPerPageOption';

describe('NumPerPageOption', () => {
  it(`display's data`, () => {
    const { rerender } = render(
      <NumPerPageOption onClick={() => {}} numPerPage={15} />
    );

    const menuMainButton = screen.getByRole('button');
    expect(menuMainButton).toHaveTextContent('15');
    expect(menuMainButton).toHaveAttribute('aria-expanded', 'false');

    rerender(<NumPerPageOption onClick={() => {}} numPerPage={30} />);
    expect(menuMainButton).toHaveTextContent('30');

    rerender(<NumPerPageOption onClick={() => {}} numPerPage={50} />);
    expect(menuMainButton).toHaveTextContent('50');

    rerender(<NumPerPageOption onClick={() => {}} numPerPage={100} />);
    expect(menuMainButton).toHaveTextContent('100');

    rerender(<NumPerPageOption onClick={() => {}} numPerPage={150} />);
    expect(menuMainButton).toHaveTextContent('150');
  });
});
