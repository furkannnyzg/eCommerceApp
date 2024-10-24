import LoginScreen from "../img/login screen/login_img.jpg"

export default function loginPage(){

    return(

        <div className="relative " id="login-screen">
            <div className="flex inline-block justify-center">
                <img src={LoginScreen} alt="" className=""  />
            </div>
            
            <div className="absolute top-[60px] left-[360px]">

            <div className="bg-gray-500 w-60 h-28">

            </div>


             
            </div>

            
        </div>

    )
}