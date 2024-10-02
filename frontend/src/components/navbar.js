import { useState,useRef,useEffect} from "react"
import Logo from "../img/logo2.png"


export default function Navbar() {
  
  
    //UseState 2 tane nesne döndürür 1.si veriyi alacağımız ya da bizim yazacağımız.2.si aldığımız ve verdiğimiz veriyi değiştireceğimiz nesnedir.
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isBasketOpen,setIsBasketOpen]=useState(false);
    const loginmenuRef = useRef(null);
    const loginbuttonRef = useRef(null);
    const basketmenuRef = useRef(null);
    const basketbuttonRef = useRef(null);
    
    const toggleLoginMenu = () => {
      setIsLoginOpen(!isLoginOpen);
    };

    const toggleBasketMenu=()=>{
      setIsBasketOpen(!isBasketOpen);
    };


    useEffect(() => {
      const handleClickOutside = (event) => {
        // Eğer menü dışına tıklanırsa
        if (loginmenuRef.current && !loginmenuRef.current.contains(event.target) && !loginbuttonRef.current.contains(event.target)) {
          setIsLoginOpen(false);
          
        }

        if (basketmenuRef.current && !basketmenuRef.current.contains(event.target) && !basketbuttonRef.current.contains(event.target)) {
          setIsBasketOpen(false);
          
        }
      };
  
      // Dış tıklamaları dinleme
      document.addEventListener("mousedown", handleClickOutside);
  
      // Temizleme
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
    
    return(
      
    <nav className='nav  bg-[#FF8000]'>
      <div className=" box-border flex justify-between items-center gap-8 p-0 px-4 h-16">
      
      <div className=" ml-36">
        <a href="/">
        <img src={Logo} alt="Logo" className=""  />
        </a>
      </div>


      <div className="relative block">
        <span className="absolute right-0 flex items-center pt-1.5 pr-3">
          <a href="/">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-[#FF8000] ">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </a>

        </span>
        <input className="block w-96 h-9 border-solid border-2 hover:border-[#994C00] border-[#FF8000] duration-300 rounded-full pl-3 placeholder:font-medium focus:outline-none " type="text" placeholder="Kitap adı,yazar veya yayınevi ara"/>
        
      </div>



      
       {/* ul unorder list sıralanmamış liste yapısı*/}
      <ul className="p-0 m-0 list-none inline flex gap-3 mr-36">

        <li
        
        onClick={toggleLoginMenu}
        ref={loginbuttonRef}
        >
          
          <button className="rounded-full px-3 py-2 text-sm font-medium text-white hover:bg-[#CC6600]  active:shadow-md duration-300 hover:text-white flex items-center btn-sign " href="" id="user-menu-button " 
          > 
          <svg 
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2 " >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>

          <span className="icon-text">Giriş Yap</span>



          {!isLoginOpen  && (
          <svg xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="size-6 ml-2  " id="down-icon"  >
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
          )}

          {isLoginOpen &&(
          <svg 
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" size-6 ml-2" id="up-icon" >
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
          )}
          </button>
          {isLoginOpen && (
            
              <div className="absolute   mt-5 w-36  rounded-md bg-[#FF8000]  shadow-lg font-medium  text-white "
              ref={loginmenuRef}
              >
                <ul>
                  
                  <a href="/" className="block px-4 py-2  rounded-t-md hover:bg-[#CC6600] duration-300">Giriş Yap</a>
                  
                  
                  <a href="/" className="block px-4 py-2  rounded-b-md hover:bg-[#CC6600] duration-300">Kayıt Ol</a>
                 
                </ul>
              </div>
            
            )}
        </li>

              {/*Bu sepet kısmı*/ }
        <li
        
        onClick={toggleBasketMenu}
        ref={basketbuttonRef}
        
        >
          
          <button className="rounded-full px-3 py-2 text-sm font-medium text-white hover:bg-[#CC6600]  active:shadow-md duration-300 hover:text-white flex items-center btn-sign " href="" id="user-menu-button " 
          > 
          
          <span className="icon-basket mr-2"></span>
          <span className="icon-text">Sepetim</span>



          {!isBasketOpen && (
          <svg xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 ml-2  "  >
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
          )}

          {isBasketOpen &&(
          <svg 
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" size-6 ml-2" >
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
          )}
          </button>
          {isBasketOpen && (


            
              <div className="absolute   mt-5 w-36  rounded-md bg-[#FF8000]  shadow-lg font-medium  text-white "
              ref={basketmenuRef}
              > {/*BURADAKİ SEPET BOX İÇERİĞİ TASARLANACAK 1.10.2024*/}
                <div>
                <ul>
                  
                  <a href="/" className="block px-4 py-2  rounded-t-md hover:bg-[#CC6600] duration-300">Giriş Yap</a>
                  
                  
                  <a href="/" className="block px-4 py-2  rounded-b-md hover:bg-[#CC6600] duration-300">Kayıt Ol</a>
                 
                </ul>
              </div>
            </div>
            )}
        </li>

          


      </ul>
</div>


      
    </nav>
     
    )
}
