import { renderHook, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { patients } from '../test/fixtures/patients';
import { usePatients } from './usePatients';

function stubFetch(implementation: typeof fetch) {
  const fetchMock = vi.fn(implementation);
  vi.stubGlobal('fetch', fetchMock);
  return fetchMock;
}

describe('usePatients', () => {
  it('loads patients from the API using basic auth', async () => {
    const fetchMock = stubFetch(() => Promise.resolve(Response.json(patients)));

    const { result } = renderHook(() => usePatients());

    expect(result.current).toEqual({ status: 'loading' });
    await waitFor(() => {
      expect(result.current).toEqual({ status: 'success', patients });
    });

    const { VITE_API_URL, VITE_API_USERNAME, VITE_API_PASSWORD } = import.meta.env;
    expect(fetchMock).toHaveBeenCalledWith(
      VITE_API_URL,
      expect.objectContaining({
        headers: { Authorization: `Basic ${btoa(`${VITE_API_USERNAME}:${VITE_API_PASSWORD}`)}` },
      }),
    );
  });

  it('reports a failed response as an error', async () => {
    stubFetch(() => Promise.resolve(new Response(null, { status: 500 })));

    const { result } = renderHook(() => usePatients());

    await waitFor(() => {
      expect(result.current).toMatchObject({
        status: 'error',
        error: { message: 'Failed to load patients: HTTP 500' },
      });
    });
  });

  it('aborts the request on unmount', () => {
    let signal: AbortSignal | undefined;
    stubFetch((_input, init) => {
      signal = init?.signal ?? undefined;
      return new Promise<Response>(() => undefined);
    });

    const { unmount } = renderHook(() => usePatients());
    expect(signal?.aborted).toBe(false);

    unmount();
    expect(signal?.aborted).toBe(true);
  });
});
