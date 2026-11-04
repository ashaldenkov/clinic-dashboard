import type { Patient } from '../types/patient';

const { VITE_API_URL, VITE_API_USERNAME, VITE_API_PASSWORD, BASE_URL } = import.meta.env;

const SNAPSHOT_URL = `${BASE_URL}patients-snapshot.json`;

export async function fetchPatients(signal: AbortSignal): Promise<Patient[]> {
  try {
    return await requestPatients(VITE_API_URL, signal, {
      Authorization: `Basic ${btoa(`${VITE_API_USERNAME}:${VITE_API_PASSWORD}`)}`,
    });
  } catch (error) {
    if (signal.aborted) throw error;
    // Keeps the demo usable while the assignment API is down.
    console.warn('Patients API is unavailable, using the bundled snapshot.', error);
    try {
      return await requestPatients(SNAPSHOT_URL, signal);
    } catch {
      throw error;
    }
  }
}

async function requestPatients(
  url: string,
  signal: AbortSignal,
  headers?: HeadersInit,
): Promise<Patient[]> {
  const response = await fetch(url, { headers, signal });

  if (!response.ok) {
    throw new Error(`Failed to load patients: HTTP ${response.status}`);
  }

  return (await response.json()) as Patient[];
}
