



export default function NavbarDownBar() {




    return(

        <nav className="nav  bg-[#f5f5f5ed] ">
            <div className="box-border flex items-center h-8">
                <div  className=" flex ml-56  ">
                    <ul className="flex space-x-5 ">
                        <li>
                            <div className="font-medium font hover:text-black hover:cursor-pointer text-[#888] ">Kitap</div>
                        </li>
                        <li>
                            <div className="font-medium font hover:text-black hover:cursor-pointer text-[#888] ">Dergiler</div>
                        </li>
                        <li>
                            <div className="font-medium font hover:text-black hover:cursor-pointer text-[#888] ">Kitap</div>
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