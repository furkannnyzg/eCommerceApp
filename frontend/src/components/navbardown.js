
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
                            (<div className=" absolute mt-2 left-[220px] ">

                                <ul className="flex space-x-2">
                                    <li>
                                    <div className=" flex items-center font-medium text-white hover:underline text-sm hover:cursor-pointer hover:bg-[#CC6600] p-1 pb-2 pt-0 rounded-t-md duration-700">
                                    <span>Çok Satan Kitaplar</span>
                                    <svg xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="size-5 ml-1 pt-1     text-white  " id="down-icon"  ><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" flex items-center font-medium text-white hover:underline text-sm hover:cursor-pointer hover:bg-[#CC6600] p-1 pb-2 pt-0 rounded-t-md duration-700">
                                    <span>Yeni Çıkan Kitaplar</span>
                                    <svg xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="size-5 ml-1 pt-1     text-white  " id="down-icon"  ><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" flex items-center font-medium text-white hover:underline text-sm hover:cursor-pointer hover:bg-[#CC6600] p-1.5 pt-0 rounded-md ">
                                    <span>Yayıncılar</span>
                                    
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" flex items-center font-medium text-white hover:underline text-sm hover:cursor-pointer hover:bg-[#CC6600] p-1.5  pt-0 rounded-md ">
                                    <span>Yazarlar</span>
                                    
                                    </div>
                                    </li>
                                    

                                    {/*TIKLANDIĞINDA KAPANMA Sorununu ÇÖZ*/ }
                                
                                </ul>

                                
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