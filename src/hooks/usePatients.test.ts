import { renderHook, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { patients } from '../test/fixtures/patients';
import { usePatients } from './usePatients';

const { VITE_API_URL, VITE_API_USERNAME, VITE_API_PASSWORD } = import.meta.env;
const SNAPSHOT_URL = '/patients-snapshot.json';

function stubFetch(implementation: typeof fetch) {
  const fetchMock = vi.fn(implementation);
  vi.stubGlobal('fetch', fetchMock);
  return fetchMock;
}

function silenceWarnings() {
  return vi.spyOn(console, 'warn').mockImplementation(() => undefined);
}

// A request that never answers and only settles once its signal aborts.
const hangingFetch: typeof fetch = (_input, init) =>
  new Promise((_resolve, reject) => {
    init?.signal?.addEventListener('abort', () => {
      reject(new Error('aborted'));
    });
  });

describe('usePatients', () => {
  it('loads patients from the API using basic auth', async () => {
    const fetchMock = stubFetch(() => Promise.resolve(Response.json(patients)));

    const { result } = renderHook(() => usePatients());

    expect(result.current).toEqual({ status: 'loading' });
    await waitFor(() => {
      expect(result.current).toEqual({ status: 'success', patients });
    });
    expect(fetchMock).toHaveBeenCalledWith(
      VITE_API_URL,
      expect.objectContaining({
        headers: { Authorization: `Basic ${btoa(`${VITE_API_USERNAME}:${VITE_API_PASSWORD}`)}` },
      }),
    );
  });

  it('falls back to the bundled snapshot when the API fails', async () => {
    const warn = silenceWarnings();
    const fetchMock = stubFetch((input) =>
      input === VITE_API_URL
        ? Promise.reject(new TypeError('Failed to fetch'))
        : Promise.resolve(Response.json(patients)),
    );

    const { result } = renderHook(() => usePatients());

    await waitFor(() => {
      expect(result.current).toEqual({ status: 'success', patients });
    });
    expect(fetchMock).toHaveBeenLastCalledWith(SNAPSHOT_URL, expect.anything());
    expect(warn).toHaveBeenCalledOnce();
  });

  it('reports the API error when the snapshot is unavailable too', async () => {
    silenceWarnings();
    stubFetch(() => Promise.resolve(new Response(null, { status: 500 })));

    const { result } = renderHook(() => usePatients());

    await waitFor(() => {
      expect(result.current).toMatchObject({
        status: 'error',
        error: { message: 'Failed to load patients: HTTP 500' },
      });
    });
  });

  it('aborts the request on unmount without falling back', async () => {
    const warn = silenceWarnings();
    const fetchMock = stubFetch(hangingFetch);

    const { unmount } = renderHook(() => usePatients());
    const signal = fetchMock.mock.calls[0]?.[1]?.signal;
    expect(signal?.aborted).toBe(false);

    unmount();
    expect(signal?.aborted).toBe(true);

    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(fetchMock).toHaveBeenCalledOnce();
    expect(warn).not.toHaveBeenCalled();
  });
});
