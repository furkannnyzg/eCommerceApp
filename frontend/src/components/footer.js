import Appstore from "../img/footer_img/Appstore.JPG";
import PlayStore from "../img/footer_img/googleplay.JPG";
import AppGallery from "../img/footer_img/appgallery.JPG";
import Facebook from "../img/footer_img/social_media/fb.JPG"
import Instagram from "../img/footer_img/social_media/insta.JPG"
import Twitter from "../img/footer_img/social_media/x.JPG"


export default function Footer_1() {

    return(

       <div  id="footer-1">
        <div className="flex items-center bg-[#F5F5F5] h-16">
        <div className="absolute left-[220px] w-[1100px]">
            <ul className="flex space-x-3 items-center ">
                <li>
                    <div className="text-gray-400 font-medium">
                        <span>Mobil Uygulamalar:</span>
                    </div>
                </li>
                <li>
                    <div className="">
                    <a href="/" >
                    <img src={Appstore} alt="Logo" className="rounded-md h-9 w-32 transition-transform transform hover:-translate-y-1 "  />
                    </a>
                    </div>
                </li>
                <li>
                <div className="">
                    <a href="/" >
                    <img src={PlayStore} alt="Logo" className="rounded-md transition-transform transform hover:-translate-y-1 "  />
                    </a>
                    </div>
                </li>
                <li>
                <div className="">
                    <a href="/" >
                    <img src={AppGallery} alt="Logo" className="rounded-md transition-transform transform hover:-translate-y-1 "  />
                    </a>
                    </div>
                </li>

                <li>
                <div className=" absolute flex right-60 bottom-2.5 font-medium text-gray-400 text-black   ">
                    <span>Sosyal Medya:</span>
                </div>
                </li>
                <li>
                    <div className=" absolute flex right-48 bottom-0.5 font-medium text-gray-400 text-black  text-sm hover:cursor-pointer">
                    <a href="/" >
                    <img src={Facebook} alt="Logo" className="rounded-full size-8  transition-transform transform hover:-translate-y-1 "  />
                    </a>
                    </div>
                </li>

                <li>
                    <div className=" absolute flex right-36 bottom-0.5 font-medium text-gray-400 text-black  text-sm hover:cursor-pointer">
                    <a href="/" >
                    <img src={Twitter} alt="Logo" className="rounded-full size-8  transition-transform transform hover:-translate-y-1 "  />
                    </a>
                    </div>
                </li>
                <li>
                    <div className=" absolute flex right-24 bottom-0.5 font-medium text-gray-400 text-black  text-sm hover:cursor-pointer">
                    <a href="/" >
                    <img src={Instagram} alt="Logo" className="rounded-full size-8  transition-transform transform hover:-translate-y-1 "  />
                    </a>
                    </div>
                </li>
                
            </ul>
        </div>
       </div>
        {/*Footer altı Sekme butonları*/ }
       <div className="bg-black h-[175px]"></div>
       </div>
       
    )
}