import { useState } from "react"
import Logo from "../img/logo2.png"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
export default function Navbar() {
  

    return(
      
    <nav className='nav  bg-[#FF8000]'>
      <div className=" box-border flex justify-between  items-center gap-8 p-0 px-4 h-16">
      
      <div className="ml-36">
        <a href="/">
        <img src={Logo} alt="Logo" className=""  />
        </a>
      </div>
      
       {/* ul unorder list sıralanmamış liste yapısı*/}
      <ul className="p-0 m-0 list-none inline flex gap-3 mr-36">

        <li>
          {/*Zaten benim yapmak istediğim focusmuş o yüzden gerek kalmadı(geneldede focus galiba)  BU DEĞİŞCEK NOT*/}
          <button className="rounded-full px-3 py-2 text-sm font-medium text-white hover:bg-[#CC6600]  hover:text-white flex items-center btn-sign " href="" id="user-menu-button " >

          <svg 
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2 " >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>

          <span className="icon-text">Giriş Yap</span>

          <svg xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 ml-2 icon-default "  >
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>

          <svg 
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" size-6 ml-2 icon-active hidden" >
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
          </button>
        </li>

        <li>
          <button className="rounded-full px-3 py-2 text-sm font-medium text-white hover:bg-[#CC6600]  hover:text-white flex items-center btn-sign " href="" id="user-menu-button " >

          <span className="icon-basket mr-2"></span>

          <span className="icon-text">Sepetim</span>

          <svg xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 ml-2 icon-default "  >
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>

          <svg 
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" size-6 ml-2 icon-active hidden" >
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
          </button>
        </li>

      </ul>
</div>

<nav class="bg-[#F5F5F5] mt-2 h-8 p-4 flex items-center space-x-5 justify-start pl-60 "  >
<Menu>
                          {/*BURADAKİ MENU BUTTON AÇILDIKTAN SONRA BİR YERE BASMA SIKINTISINA BİR DAHA DÖNÜLECEK*/ }
      <MenuButton className="font-medium text-gray-500 hover:text-black">Kitap</MenuButton>
      <MenuItems anchor="bottom">
      <nav class="mt-2  flex items-center space-x-5 justify-start ml-40 "  >
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/settings">
            Settings
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/support">
            Support
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/license">
            License
          </a>
        </MenuItem>
      </nav>
      </MenuItems>
      
</Menu>
<Menu>
      <MenuButton className="font-medium text-gray-500 hover:text-black">Dergi</MenuButton>
      <MenuItems anchor="bottom" className="mt-2 flex items-center space-x-5 justify-start ml-6 ">
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/settings">
            Settings
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/support">
            Support
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/license">
            License
          </a>
        </MenuItem>
      </MenuItems>
      
</Menu>
<Menu>
      <MenuButton className="font-medium text-gray-500 hover:text-black" >Hobi&Oyuncak</MenuButton>
      <MenuItems anchor="bottom" className="mt-2 flex items-center space-x-5 justify-start ">
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/settings">
            Settings
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/support">
            Support
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/license">
            License
          </a>
        </MenuItem>
      </MenuItems>
      
</Menu>
<Menu>
      <MenuButton className="font-medium text-gray-500 hover:text-black">Kırtasiye</MenuButton>
      <MenuItems anchor="bottom">
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/settings">
            Settings
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/support">
            Support
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/license">
            License
          </a>
        </MenuItem>
      </MenuItems>
      
</Menu><Menu>
      <MenuButton className="font-medium text-gray-500 hover:text-black">Kırtasiye</MenuButton>
      <MenuItems anchor="bottom">
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/settings">
            Settings
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/support">
            Support
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/license">
            License
          </a>
        </MenuItem>
      </MenuItems>
      
</Menu>
<Menu>
      <MenuButton className="font-medium text-gray-500 hover:text-black">Kırkambar</MenuButton>
      <MenuItems anchor="bottom">
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/settings">
            Settings
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/support">
            Support
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/license">
            License
          </a>
        </MenuItem>
      </MenuItems>
      
</Menu>
<Menu>
      <MenuButton className="font-medium text-gray-500 hover:text-black">Tüm Kategoriler</MenuButton>
      <MenuItems anchor="bottom">
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/settings">
            Settings
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/support">
            Support
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/license">
            License
          </a>
        </MenuItem>
      </MenuItems>
      
</Menu>
    
   
      
    

  </nav>
      
    </nav>
     
    )
}
