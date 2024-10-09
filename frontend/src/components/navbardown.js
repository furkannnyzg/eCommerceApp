
import { useState,useRef,useEffect} from "react"


export default function NavbarDownBar() {

    const[isOpenDownBar,setDownBar] = useState(null);  
    
    const toggleDropdown = (menu) => {
        // Aynı menüye tekrar tıklanırsa kapat, farklı menüye tıklanırsa o menüyü aç
        setDownBar(isOpenDownBar === menu ? null : menu);
      };


    

    return(

        <nav className="nav  bg-[#FFFFFF] ">
            <div className="box-border flex items-center h-8">
                <div  className=" flex ml-56  ">
                    <ul className="flex space-x-5 ">
                        {/*Down-bar Kitap Kısmı*/ }
                        <li onClick={() => toggleDropdown('Kitap')}>
                            <button className="font-medium font hover:text-black  text-[#888]  ">
                                <div >Kitap</div>
                            </button>

                            {isOpenDownBar ==='Kitap' &&
                            (<div className=" absolute mt-2 left-[224px]">
                                <div className="font-medium text-white hover:underline text-sm">Çok satan kitaplar

                                </div>
                            </div>)
                            }






                        </li>





                        <li onClick={() => toggleDropdown('Dergi')}>
                            <button className="font-medium font hover:text-black text-[#888] ">
                                <div>Dergi</div>
                            </button>
                            {isOpenDownBar ==='Dergi' &&
                            (<div className=" absolute mt-2 left-[224px]">
                                <ul className="flex space-x-5">

                                    <li>
                                    <div className="font-medium text-white hover:underline text-sm hover:cursor-pointer">Çok satan kitaplar
                                    </div>
                                    </li>
                                    <li>
                                    <div className="font-medium text-white hover:underline text-sm hover:cursor-pointer">Çok satan kitaplar
                                    </div>
                                    </li>
                                    
                                </ul>
                            </div>)

                            }



                        </li>
                        <li>
                            <div className="font-medium font hover:text-black hover:cursor-pointer text-[#888] ">Hobi&Oyuncak</div>
                        </li>
                    </ul>
                </div>
            </div>
            <nav className="nav  bg-[#FF8000]">
            <div className="box-border flex items-center h-8">

            </div>
            </nav>
        </nav>


    )



}