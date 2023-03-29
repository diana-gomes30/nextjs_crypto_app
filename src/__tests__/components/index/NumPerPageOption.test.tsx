import { act, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { NumPerPageOption } from '@components/index/NumPerPageOption';

describe('NumPerPageOption', () => {
  it(`display's data`, async () => {
    render(<NumPerPageOption onClick={() => {}} numPerPage={15} />);

    const menuMainButton = screen.getByRole('button');
    expect(menuMainButton).toHaveTextContent('15');
    expect(screen.getAllByText('15')).toHaveLength(1);
    expect(menuMainButton).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByText('30')).not.toBeInTheDocument();
    expect(screen.queryByText('50')).not.toBeInTheDocument();
    expect(screen.queryByText('100')).not.toBeInTheDocument();
    expect(screen.queryByText('150')).not.toBeInTheDocument();

    await act(async () => fireEvent.click(menuMainButton));

    expect(screen.getAllByText('15')).toHaveLength(2);
    expect(screen.getByText('30')).toBeInTheDocument();
    expect(screen.getByText('50')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('150')).toBeInTheDocument();
  });
});
