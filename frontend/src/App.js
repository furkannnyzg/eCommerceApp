import logo from './logo.svg';
import './App.css';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Navbar from './components/navbar';
import Pricing from './pages/pricing';
import About from './pages/about';
import Home from './pages/home';
import {Route,Router,Routes} from "react-router-dom"


function App() {
  

  return (
    <>
    <Navbar />
    {/*{component}     Burada yapmaya çalıştığım bir js kısmı direk verip hangisi çağrılıyorsa onun gelmesi*/ }
    <div className='container'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
    </Routes>
    </div>


    </>
    
  );
}

export default App;
