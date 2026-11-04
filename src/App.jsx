
import Header from './components/header'
import Patients from './components/patients';
import PatientProfile from './components/patientProfile'
import LabResults from './components/labResults'
import DiagnosisHistory from './components/diagnosisHistory'
import DiagnosticList from './components/diagnosticList'

import { useGetData } from './hooks/useGetData';

function App() {
  const { clients } = useGetData();
  
  return (
    <div className="bg-bodyBg p-[18px] ">
      <Header/>
      <div className='flex justify-center'>
        <Patients patientList={clients}/>
        <div>
          {/* as far as there's no need for displaying other patients' data, Jessica's data is hardcoded as active patient*/}
          <DiagnosisHistory clientData={clients[3]}/>
          <DiagnosticList clientData={clients[3]}/>
        </div>
        <div>
          {/* patient profile has strange margins alike the other columns on the mockup, that's why right columns slightly out of the position*/}
          <PatientProfile clientData={clients[3]}/>
          <LabResults clientData={clients[3]}/>
        </div>
      </div>

    </div>
  );
}

export default App;
