import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Newnavbar from './components/newnavbar';
import Add from "./components/add";
import Footer_1 from './components/footer';
import Home from './pages/home';
import LoginPage from './pages/login';
import {Route,Router,Routes} from "react-router-dom"
import { Outlet } from 'react-router-dom';


function App() {
  

  return (
    <>
    
    <Add />
    <div className="w-full max-w-full min-h-screen overflow-x-hidden">
    <Navbar />
    


    {/*{component}     Burada yapmaya çalıştığım bir js kısmı direk verip hangisi çağrılıyorsa onun gelmesi*/ }
    <div className='container'>
    
    <Outlet/>
    </div>
    

    </div>

    </>
    
  );
}

export default App;
