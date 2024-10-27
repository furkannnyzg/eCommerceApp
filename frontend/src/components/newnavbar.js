import { Link } from "react-router-dom";
import Logo from "../img/wh_d8e078ec3.png";



export default function Newnavbar() {
  

  return (
    
   <header className="flex justify-between items-center text-black py-2 py-8 md:px-56 bg-[#FF8000] drop-shadow-md h-16">

    {/*Logo*/}
    <Link to="/home" className="">
        <img src={Logo} alt="" className="w-56 h-auto"  />
    </Link>

    {/*INPUT*/}
    <div className="relative hidden md:flex items-center justify-center gap-3">

    <a href="/" className="absolute right-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-6 text-[#FF8000] hover:text-[#CC6600] ">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
    </a>

    <input className="block w-96 h-9 border-solid border-2 hover:border-[#994C00] border-[#FF8000] duration-300 rounded-full pl-3 placeholder:font-medium focus:outline-none " type="text" placeholder="Kitap adı,yazar veya yayınevi ara"/>

    </div>



    {/*LOGIN BASKET*/}
    <ul className=" hidden xl:flex items-center  gap-12 font-medium text-base ">

      <li>selam</li>

      <li>selam</li>

      <li>selam</li>

      <li>selam</li>

    </ul>
    

   </header>





  );
}
