import type { Patient } from '../types/patient';

const { VITE_API_URL, VITE_API_USERNAME, VITE_API_PASSWORD } = import.meta.env;

export async function fetchPatients(signal?: AbortSignal): Promise<Patient[]> {
  const response = await fetch(VITE_API_URL, {
    headers: { Authorization: `Basic ${btoa(`${VITE_API_USERNAME}:${VITE_API_PASSWORD}`)}` },
    signal,
  });

  if (!response.ok) {
    throw new Error(`Failed to load patients: HTTP ${response.status}`);
  }

  return (await response.json()) as Patient[];
}
