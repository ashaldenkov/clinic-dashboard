import { useEffect, useState } from 'react';

import { fetchPatients } from '../api/patients';
import type { Patient } from '../types/patient';

export type PatientsState =
  | { status: 'loading' }
  | { status: 'error'; error: Error }
  | { status: 'success'; patients: Patient[] };

export function usePatients(): PatientsState {
  const [state, setState] = useState<PatientsState>({ status: 'loading' });

  useEffect(function loadPatients() {
    const controller = new AbortController();

    fetchPatients(controller.signal)
      .then((patients) => {
        setState({ status: 'success', patients });
      })
      .catch((error: unknown) => {
        // Aborted on unmount; nobody is waiting for the result.
        if (controller.signal.aborted) return;
        setState({
          status: 'error',
          error: error instanceof Error ? error : new Error(String(error)),
        });
      });

    return function abortLoadPatients() {
      controller.abort();
    };
  }, []);

  return state;
}
