import { Link } from "react-router-dom"

export default function NotFoundPage(){

return(
<div className="h-screen bg-[#CC6600]">
    <div className="flex flex-col gap-2 text-3xl font-medium
    p-16
     ">
        404 Not Found Page! <br />
        If u want back to home page please click the home button
        

    </div>
    <button className="flex bg-slate-800 ml-32 text-3xl p-1.5 rounded-lg items-center text-orange-500 hover:bg-slate-700  ">
        <Link to="/">Home</Link>

    </button>
</div>
    



    

    

)
}