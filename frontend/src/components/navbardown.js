
import { useState,useRef,useEffect} from "react"


export default function NavbarDownBar() {
    //burda başta açık olması gereken şeyi useState içerisinde belirtiyoruz ve sayfa açıldığında açık başlıyor.
    const[isOpenDownBar,setDownBar] = useState('Kitap');  
    
    const toggleDropdown = (menu) => {
        // Aynı menüye tekrar tıklanırsa kapat, farklı menüye tıklanırsa o menüyü aç
        //isOpenDownBar === menu ? null : menu önceki kod buydu 
        //bu içeriğide sekmedekinede basınca kapanıyodu şuan hiç bir şekilde birine basıldığında kapanmamakta 
        
        setDownBar(menu);
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

                            {isOpenDownBar ==='Kitap'  &&
                            (<div className=" absolute mt-2 left-[220px] w-[1100px] ">

                                <ul className="flex space-x-2">
                                    <li>
                                    <div className=" flex items-center font-medium text-white  text-sm hover:cursor-pointer hover:bg-[#CC6600] p-1 pb-2 pt-0 rounded-t-md duration-700">
                                    <span>Çok Satan Kitaplar</span>
                                    <svg xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="size-5 ml-1 pt-1     text-white  " id="down-icon"  ><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" flex items-center font-medium text-white  text-sm hover:cursor-pointer hover:bg-[#CC6600] p-1 pb-2 pt-0 rounded-t-md duration-700">
                                    <span>Yeni Çıkan Kitaplar</span>
                                    <svg xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="size-5 ml-1 pt-1     text-white  " id="down-icon"  ><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" flex items-center font-medium text-white  text-sm hover:cursor-pointer hover:bg-[#CC6600] p-1.5 pt-0 rounded-md ">
                                    <span>Yayıncılar</span>
                                    
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" flex items-center font-medium text-white  text-sm hover:cursor-pointer hover:bg-[#CC6600] p-1.5  pt-0 rounded-md ">
                                    <span>Yazarlar</span>
                                    
                                    </div>
                                    </li>

                                    <li>
                                    <div className=" absolute right-60 items-center text-white  text-sm hover:cursor-pointer hover:bg-[#CC6600] p-1.5  pt-0 rounded-md ">
                                    <span>#Çocuk Kitapları</span>
                                    
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" absolute right-32 items-center text-white  text-sm hover:cursor-pointer hover:bg-[#CC6600] p-1.5  pt-0 rounded-md ">
                                    <span>#Sınav Kitapları</span>
                                    
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" absolute right-6 items-center text-white  text-sm hover:cursor-pointer hover:bg-[#CC6600] p-1.5  pt-0 rounded-md ">
                                    <span>#Ne Okusam?</span>
                                    
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
                            (<div className=" absolute mt-2 left-[220px] w-[1100px] ">

                                <ul className="flex space-x-2">
                                    <li>
                                    <div className=" flex items-center font-medium text-white  text-sm hover:cursor-pointer hover:bg-[#CC6600] p-1 pb-2 pt-0 rounded-t-md duration-700">
                                    <span>Edebiyat Dergileri</span>
                                    <svg xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="size-5 ml-1 pt-1     text-white  " id="down-icon"  ><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" flex items-center font-medium text-white  text-sm hover:cursor-pointer hover:bg-[#CC6600] p-1 pb-2 pt-0 rounded-t-md duration-700">
                                    <span>Tüm Dergiler</span>
                                    <svg xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="size-5 ml-1 pt-1     text-white  " id="down-icon"  ><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                                    </div>
                                    </li>
                                   

                                    <li>
                                    <div className=" absolute flex right-64 items-center text-white  text-sm hover:cursor-pointer hover:bg-[#CC6600] p-1.5 pl-0 pt-0 rounded-md ">
                                    <svg xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="size-5 pt-1 -rotate-90   text-white  " id="down-icon"  ><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                                    <span>Çocuk Dergileri</span>
                                    
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" absolute flex right-36 items-center text-white  text-sm hover:cursor-pointer hover:bg-[#CC6600] p-1.5 pl-0  pt-0 rounded-md ">
                                    <svg xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="size-5 pt-1 -rotate-90   text-white  " id="down-icon"  ><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                                    <span>Tarih Dergileri</span>
                                    
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" absolute flex right-6 items-center text-white  text-sm hover:cursor-pointer hover:bg-[#CC6600] p-1.5 pl-0   pt-0 rounded-md ">
                                    <svg xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="size-5 pt-1 -rotate-90   text-white  " id="down-icon"  ><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>

                                    <span>Bilim Dergileri</span>
                                    
                                    </div>
                                    </li>
                                    

                                    {/*TIKLANDIĞINDA KAPANMA Sorununu ÇÖZ*/ }
                                
                                </ul>

                                
                            </div>)

                            }



                        </li>

                        <li onClick={() => toggleDropdown('Hobi')}>
                            <button className="font-medium font hover:text-black text-[#888] ">
                                <div>Hobi&Oyuncak</div>
                            </button>
                            {isOpenDownBar ==='Hobi' &&
                            (<div className=" absolute mt-2 left-[220px] w-[1100px] ">

                                <ul className="flex space-x-2">
                                    <li>
                                    <div className=" flex items-center font-medium text-white  text-sm hover:cursor-pointer hover:bg-[#CC6600] p-1 pb-2 pt-0 rounded-t-md duration-700">
                                    <span>Oyun ve Oyuncak</span>
                                    <svg xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="size-5 ml-1 pt-1     text-white  " id="down-icon"  ><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" flex items-center font-medium text-white  text-sm hover:cursor-pointer hover:bg-[#CC6600] p-1 pb-2 pt-0 rounded-t-md duration-700">
                                    <span>Puzzle ve Yapboz</span>
                                    <svg xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="size-5 ml-1 pt-1     text-white  " id="down-icon"  ><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                                    </div>
                                    </li>
                                   

                                    
                                    <li>
                                    <div className=" absolute flex right-6 items-center text-white  text-sm hover:cursor-pointer hover:bg-[#CC6600] p-1.5 pl-0   pt-0 rounded-md ">
                                    <svg xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="size-5 pt-1 -rotate-90   text-white  " id="down-icon"  ><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>

                                    <span>Montessori Oyuncakları</span>
                                    
                                    </div>
                                    </li>
                                    

                                    {/*TIKLANDIĞINDA KAPANMA Sorununu ÇÖZ*/ }
                                
                                </ul>

                                
                            </div>)

                            }



                        </li>

                        <li onClick={() => toggleDropdown('Kırtasiye')}>
                            <button className="font-medium font hover:text-black text-[#888] ">
                                <div>Kırtasiye</div>
                            </button>
                            {isOpenDownBar ==='Kırtasiye' &&
                            (<div className=" absolute mt-2 left-[220px] w-[1100px] ">

                                <ul className="flex space-x-2">
                                    <li>
                                    <div className=" flex items-center font-medium text-white  text-sm hover:cursor-pointer hover:bg-[#CC6600] p-1 pb-2 pt-0 rounded-t-md duration-700">
                                    <span>Defterler</span>
                                    <svg xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="size-5 ml-1 pt-1     text-white  " id="down-icon"  ><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" flex items-center font-medium text-white  text-sm hover:cursor-pointer hover:bg-[#CC6600] p-1 pb-2 pt-0 rounded-t-md duration-700">
                                    <span>Kitap Aksesuarları</span>
                                    <svg xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="size-5 ml-1 pt-1     text-white  " id="down-icon"  ><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" flex items-center font-medium text-white  text-sm hover:cursor-pointer hover:bg-[#CC6600] p-1 pb-2 pt-0 rounded-t-md duration-700">
                                    <span>Diğer Ürünler</span>
                                    <svg xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="size-5 ml-1 pt-1     text-white  " id="down-icon"  ><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                                    </div>
                                    </li>
                                   

                                    
                                    <li>
                                    <div className=" absolute flex right-6 items-center text-white  text-sm hover:cursor-pointer hover:bg-[#CC6600] p-1.5 pl-0   pt-0 rounded-md ">
                                    <svg xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="size-5 pt-1 -rotate-90   text-white  " id="down-icon"  ><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>

                                    <span>Kitap Hediye Kartları</span>
                                    
                                    </div>
                                    </li>
                                    

                                    {/*TIKLANDIĞINDA KAPANMA Sorununu ÇÖZ*/ }
                                
                                </ul>

                                
                            </div>)

                            }



                        </li>

                        <li onClick={() => toggleDropdown('Kırkambar')}>
                            <button className="font-medium font hover:text-black text-[#888] ">
                                <div>Kırkambar</div>
                            </button>
                            {isOpenDownBar ==='Kırkambar' &&
                            (<div className=" absolute mt-2 left-[220px] w-[1100px] ">

                                <ul className="flex space-x-2">
                                    <li>
                                    <div className=" flex items-center font-medium text-white  text-sm hover:cursor-pointer hover:bg-[#CC6600] p-1 pb-2 pt-0 rounded-t-md duration-700">
                                    <span>Temalı ve Lisanslı Ürünler</span>
                                    <svg xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="size-5 ml-1 pt-1     text-white  " id="down-icon"  ><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                                    </div>
                                    </li>
                                    <li>
                                    <div className=" flex items-center font-medium text-white  text-sm hover:cursor-pointer hover:bg-[#CC6600] p-1 pb-2 pt-0 rounded-t-md duration-700">
                                    <span>Diğer Ürünler</span>
                                    <svg xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="size-5 ml-1 pt-1     text-white  " id="down-icon"  ><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                                    </div>
                                    </li>
                                    
                                   

                                    
                                    <li>
                                    <div className=" absolute flex right-6 items-center text-white  text-sm hover:cursor-pointer hover:bg-[#CC6600] p-1.5 pl-0   pt-0 rounded-md ">
                                    <svg xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="size-5 pt-1 -rotate-90   text-white  " id="down-icon"  ><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>

                                    <span>Miyuki Takıları</span>
                                    
                                    </div>
                                    </li>
                                    

                                    {/*TIKLANDIĞINDA KAPANMA Sorununu ÇÖZ*/ }
                                
                                </ul>

                                
                            </div>)

                            }



                        </li>

                        <li>
                        <button className="font-medium font hover:text-black text-[#888] ">
                                <div>Tüm Kategoriler</div>
                            </button>
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