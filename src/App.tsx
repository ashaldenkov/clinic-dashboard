import { useState } from 'react';

import { DiagnosisHistory } from './components/diagnosis-history/DiagnosisHistory';
import DiagnosticList from './components/DiagnosticList';
import Header from './components/Header';
import LabResults from './components/LabResults';
import PatientList from './components/PatientList';
import PatientProfile from './components/PatientProfile';
import { usePatients } from './hooks/usePatients';

// Featured patient from the design.
const DEFAULT_PATIENT_NAME = 'Jessica Taylor';

function App() {
  return (
    <div className="bg-page p-[18px]">
      <Header />
      <div className="flex justify-center">
        <Dashboard />
      </div>
    </div>
  );
}

function Dashboard() {
  const patientsState = usePatients();
  const [selectedName, setSelectedName] = useState(DEFAULT_PATIENT_NAME);

  if (patientsState.status === 'loading') {
    return (
      <p role="status" className="mt-10 text-body text-muted">
        Loading patients…
      </p>
    );
  }

  if (patientsState.status === 'error') {
    return (
      <p role="alert" className="mt-10 text-body">
        Could not load patients. {patientsState.error.message}
      </p>
    );
  }

  const { patients } = patientsState;
  const selected = patients.find((patient) => patient.name === selectedName) ?? patients[0];

  return (
    <>
      <PatientList
        patientList={patients}
        selectedName={selected?.name}
        onSelect={setSelectedName}
      />
      <div>
        {selected && <DiagnosisHistory history={selected.diagnosis_history} />}
        <DiagnosticList clientData={selected} />
      </div>
      <div>
        <PatientProfile clientData={selected} />
        <LabResults clientData={selected} />
      </div>
    </>
  );
}

export default App;
