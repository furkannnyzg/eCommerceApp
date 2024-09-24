import Logo from "../img/logo1.png"
export default function Navbar() {
    return(
    <nav className='nav box-border bg-[#FF8000] flex justify-between items-center gap-8 p-0 px-4'>
      <img src={Logo} alt="Logo" className=""  />
       {/* ul unorder list sıralanmamış liste yapısı*/}
      <ul className="p-0 m-0 list-none inline flex gap-8">
        <li>
          <a className="text-white hover:bg-white hover:text-black p-1 " href="/pricing">Pricing</a>
        </li>
        <li>
          <a className="text-white hover:bg-white hover:text-black" href="/about">About</a>
        </li>
      </ul>
    </nav>
    )
}
