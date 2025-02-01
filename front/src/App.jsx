import './App.css'
import NavBar from './components/NavBar';
//import Appointments from './views/Appointments';
//import Home from './views/Home';
import RegisterUser from './views/RegisterUser'
import LoginUser from "./views/LoginUser"

function App() {

  return (
    <>
        <NavBar/>
        <LoginUser/>
        <RegisterUser/>
    </>
  )
}

export default App
