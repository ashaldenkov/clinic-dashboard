
import Header from './components/Header'
import PatientList from './components/PatientList';
import PatientProfile from './components/PatientProfile'
import LabResults from './components/LabResults'
import DiagnosisHistory from './components/DiagnosisHistory'
import DiagnosticList from './components/DiagnosticList'

import { useGetData } from './hooks/useGetData';

function App() {
  const { clients } = useGetData();
  
  return (
    <div className="bg-page p-[18px] ">
      <Header/>
      <div className='flex justify-center'>
        <PatientList patientList={clients}/>
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
