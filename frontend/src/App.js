import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Add from "./components/add";
import Home from './pages/home';
import {Route,Router,Routes} from "react-router-dom"


function App() {
  

  return (
    <>
    
    <Add />
    <Navbar />


    {/*{component}     Burada yapmaya çalıştığım bir js kısmı direk verip hangisi çağrılıyorsa onun gelmesi*/ }
    <div className='container'>
    <Routes>
      
      <Route path="/" element={<Home/>}/>
    </Routes>
    </div>


    </>
    
  );
}

export default App;
