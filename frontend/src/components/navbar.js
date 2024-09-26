import { useState } from "react"
import Logo from "../img/logo2.png"

export default function Navbar() {
  const [isActive,setIsActive]=useState(false);

  const handleClick=() => {
    setIsActive(prevState =>!prevState);
  };

    return(
    <nav className='nav box-border bg-[#FF8000] flex justify-between  items-center gap-8 p-0 px-4 h-16'>
      <img src={Logo} alt="Logo" className=""  />
       {/* ul unorder list sıralanmamış liste yapısı*/}
      <ul className="p-0 m-0 list-none inline flex gap-8">
        <li>
          {/*Zaten benim yapmak istediğim focusmuş o yüzden gerek kalmadı(geneldede focus galiba)*/}
          <button className="rounded-full px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700  hover:text-white flex items-center btn-sign " href="" id="user-menu-button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2 " >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          <span className="icon-text">Giriş Yap</span>

          <svg xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 ml-2 icon-default" >
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2 icon-active hidden">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>


          </button>

          
          
        </li>
        <li>
          <a className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" href="/about">Sepetim</a>

          
        </li>
      </ul>
    </nav>
    )
}
