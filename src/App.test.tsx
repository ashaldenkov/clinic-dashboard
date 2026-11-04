import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { App } from './App';
import { patients } from './test/fixtures/patients';

function respondWith(response: Response) {
  vi.stubGlobal(
    'fetch',
    vi.fn<typeof fetch>(() => Promise.resolve(response)),
  );
}

describe('App', () => {
  it('shows the featured patient once the data has loaded', async () => {
    respondWith(Response.json(patients));
    render(<App />);

    expect(screen.getByRole('status')).toHaveTextContent('Loading patients');

    expect(await screen.findByRole('heading', { name: 'Jessica Taylor' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^Jessica Taylor/ })).toHaveAttribute(
      'aria-current',
      'true',
    );
    expect(screen.getByText('August 23, 1996')).toBeInTheDocument();
    expect(screen.getAllByText('Blood Tests')).toHaveLength(1);
  });

  it('switches every panel to the patient picked from the list', async () => {
    const user = userEvent.setup();
    respondWith(Response.json(patients));
    render(<App />);

    await user.click(await screen.findByRole('button', { name: /^Ryan Johnson/ }));

    expect(screen.getByRole('heading', { name: 'Ryan Johnson' })).toBeInTheDocument();
    expect(screen.getByText('November 2, 1979')).toBeInTheDocument();
    expect(screen.getByText('Male')).toBeInTheDocument();
    expect(screen.getByText('MRI')).toBeInTheDocument();
    expect(screen.queryByText('Blood Tests')).not.toBeInTheDocument();

    const diagnoses = screen.getByRole('table', { name: 'Diagnostic List' });
    // Rows sharing the name "Allergies" must not collapse into one.
    expect(within(diagnoses).getAllByRole('row')).toHaveLength(3);
  });

  it('shows an error when the patients cannot be loaded', async () => {
    respondWith(new Response(null, { status: 500 }));
    render(<App />);

    expect(await screen.findByRole('alert')).toHaveTextContent('HTTP 500');
  });
});
