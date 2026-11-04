import DiagnosisHistory from './components/DiagnosisHistory';
import DiagnosticList from './components/DiagnosticList';
import Header from './components/Header';
import LabResults from './components/LabResults';
import PatientList from './components/PatientList';
import PatientProfile from './components/PatientProfile';
import { usePatients } from './hooks/usePatients';

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
  // as far as there's no need for displaying other patients' data, Jessica's data is hardcoded as active patient
  const activePatient = patients[3];

  return (
    <>
      <PatientList patientList={patients} />
      <div>
        <DiagnosisHistory clientData={activePatient} />
        <DiagnosticList clientData={activePatient} />
      </div>
      <div>
        <PatientProfile clientData={activePatient} />
        <LabResults clientData={activePatient} />
      </div>
    </>
  );
}

export default App;
