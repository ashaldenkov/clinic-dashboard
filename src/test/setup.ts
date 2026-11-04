import '@testing-library/jest-dom/vitest';

import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

// jsdom has no canvas; chart data is covered by the vitals tests.
vi.mock('react-chartjs-2', () => ({ Line: () => null }));

afterEach(() => {
  cleanup();
});
