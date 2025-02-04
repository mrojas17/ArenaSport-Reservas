import './App.css'
import {Routes, Route} from "react-router-dom";
import NavBar from './components/navBar/NavBar';
import Appointments from './views/appointments/Appointments';
import Home from './views/home/Home';
import RegisterUser from './views/register/RegisterUser'
import LoginUser from "./views/login/LoginUser"
import { ErrorPage } from './views/Errorpage';
import ScheduleAppointment from './components/Schedule/ScheduleAppointment';
import Contact from './views/contact/Contact';
import About from './views/About/About';

function App() {


  return (
    <div>
       <NavBar/>
      <Routes>
        <Route path="/" element={<LoginUser/>} />
        <Route path="/inicio" element={<Home/>} />
        <Route path='/mis-turnos' element={<Appointments/>} />
        <Route path='/contacto' element={<Contact/>}/>
        <Route path='sobre-nosotros' element={<About/>}/>
        <Route path="/registro" element={<RegisterUser/>} />
        <Route path='/crear-turno' element={<ScheduleAppointment/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </div>
  )
}

export default App
