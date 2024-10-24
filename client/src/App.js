
import './App.css';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgotPassword from './components/auth/Patient/ForgotPassword';
import Otp from './components/Signup-Login-Pages/Otp';
import Dashboard from './components/Dashboard/Dashboard';
import DoctorDashboard from './components/Dashboard/DoctorDashboard';
import PatientDashboard from './components/Dashboard/PatientDashboard';
import DoctorManagement from  './components/Dashboard/DoctorManagement';
import AddDoctor  from './components/Dashboard/AddDoctor';
import UserProfile from './components/profile/UserProfile';
import ProfileChnagepassword from './components/profile/ProfileChnagepassword';
import TermsAndCondition from './components/profile/TermsAndCondition';
import PrivacyPolicy from './components/profile/PrivacyPolicy';
import AdminLogin from './components/auth/Admin/AdminLogin';
import PatientSignup from './components/auth/Patient/PatientSignup';
import DoctorLogin from './components/auth/Doctor/DoctorLogin';
import AdminSignup from './components/auth/Admin/AdminSignup';
import PatientLogin from './components/auth/Patient/PatientLogin';
import Reportingandanalytics from './components/Dashboard/Reportingandanalytics';
import Monitorbilling from './components/Dashboard/Monitorbilling';
import InsuranceClaims from './components/Dashboard/InsuranceClaims';
import PaymentProcess from './components/Dashboard/PaymentProcess';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={AdminLogin} />
          <Route path="/patient/signup" element={PatientSignup} />
          <Route path="/patient/login" element={PatientLogin} />
          
          <Route path="/doctor/login" element={DoctorLogin} />

          <Route path="/admin/login" element={AdminLogin} />
          <Route path="/admin/signup" element={AdminSignup} />

          <Route path="/forgot-password" element={ForgotPassword} />
          <Route path="/otp-verification" element={Otp} />
          
          <Route path='userprofile' Component={UserProfile} />    
          <Route path='Profile/chnagepassword' Component={ProfileChnagepassword} />    
          <Route path='Profile/termsandconditions' Component={TermsAndCondition} />    
          <Route path='Profile/privacypolicy' Component={PrivacyPolicy} />    

          <Route path='/dashboard' Component={Dashboard}/>
          <Route path='/doctordashboard' Component={DoctorDashboard}/>
          <Route path='/patientdashboard' Component={PatientDashboard}/>
          <Route path='/doctormanagement'  Component={DoctorManagement}/>
          <Route  path='/adddoctor' Component={AddDoctor} />
          <Route  path='/reportingandanalytics' Component={Reportingandanalytics} />
          <Route  path='/monitorbilling' Component={Monitorbilling} />
          <Route  path='/insuranceclaims' Component={InsuranceClaims} />
          <Route  path='/paymentprocess' Component={PaymentProcess} />
          <Route  path='/adddoctor' element={AddDoctor} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
