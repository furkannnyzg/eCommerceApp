import { Link } from "react-router-dom";
import Logo from "../img/logo2.png"
import { useState } from "react";




export default function Newnavbar() {

  const [isMobileMenuOpen,setMobilMenu]=useState(false);

  const toggleNavbar=()=>(
    setMobilMenu(!isMobileMenuOpen)
  );
  
  return (  
    <div className="w-full w-full absolute">
   <header className="flex justify-between flex-wrap top-0 items-center text-black  px-8 py-2 md:px-24 bg-[#FF8000] drop-shadow-md">

    {/*Logo*/}
    <div className="flex ">
    <Link to="/home" className="flex-shrink-0" >
        <img src={Logo} alt="" className=" w-56"  />
    </Link>
    </div>

    {/*INPUT*/}
    <div className=" hidden md:flex flex-grow items-center justify-center px-8 lg:px-4 xl:px-8 ">

      {/*Buradaki ikinci div şöyle bir element düşün grouplama gibi 3d designda guruplamanın dışında kalan aynı boyutta büyümüyo ya onun gibi bir şey grouplama yaptığında içindeki şeylerde onunla beraber gidip gelmekte*/}
    <div className="relative w-full max-w-lg">
    <a href="/" className="absolute right-3 top-1 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-6 text-[#FF8000] hover:text-[#CC6600] ">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
    </a>

    <input className="block w-full h-9 border-solid border-2 hover:border-[#994C00] border-[#FF8000] duration-300 rounded-full pl-3 placeholder:font-medium focus:outline-none " type="text" placeholder="Kitap adı,yazar veya yayınevi ara"/>
    </div>
    </div>



    {/*LOGIN BASKET*/}
    <ul className=" hidden xl:flex items-center  gap-6 ">

    <li>
            {/*Login button*/ }
          <button className="rounded-full px-3 py-2 text-sm font-medium text-white hover:bg-[#CC6600]  active:shadow-md duration-300 hover:text-white flex items-center btn-sign shadow-md ring-2 ring-white " href="" id="user-menu-button " 
          > 
          <svg 
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2 " >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        
          <span className="icon-text">Giriş Yap</span>



          
          </button>
      </li>

    <li>
            {/*Basket button*/ }
          <button className="rounded-full px-3 py-2 text-sm font-medium text-white hover:bg-[#CC6600]  active:shadow-md duration-300 hover:text-white flex items-center btn-sign shadow-md ring-2 ring-white " href="" id="user-menu-button " 
          > 
          
          <span className="icon-basket mr-2 pt-1 size-6"></span>

          <span className="icon-text">Sepetim</span>



          
          </button>
      </li>

     

    </ul>

    <div className="">
      <span onClick={toggleNavbar}
      className="icon-menu text-white size-3 xl:hidden  cursor-pointer xl:px font-medium p-2 hover:shadow-lg hover:bg-[#CC6600] duration-100 rounded-md"></span>

      

    </div>

    {isMobileMenuOpen && (

    <div className=" xl:hidden flex flex-col basis-full pt-3  items-center">
      <ul>
        <li className=" text-white hover:text-gray-500 cursor-pointer">
          Giriş Yap
        </li>
        <li className=" text-white pt-3 hover:text-gray-500 cursor-pointer">
          Kayıt Ol
        </li>
        <li className=" text-white pt-3 pb-3 hover:text-gray-500 cursor-pointer">
          Sepetim
        </li>
      </ul>
    </div>
    )}



    

   </header>
   </div>




  );
}
