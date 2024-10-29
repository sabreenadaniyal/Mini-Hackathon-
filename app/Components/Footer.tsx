import Link from "next/link";

export default function Footer() {
    return (
        <div>
            <div className="flex w-full bg-slate-800 h-24 items-center text-white justify-center">

               <p>Made by | </p>  
                <Link className="hover:text-red-300 font-serif font-bold text-center" href="https://www.linkedin.com/in/sabreena-zahid-ali-1343a8198/" target="_blank">
                    SABREENA ZAHID ALI </Link>  

                    <div className="text-gray-500 mt-14 -ml-44">
                    <p>Copy right|@Alright reserved-2024</p> </div>
                  
            </div>
        </div> 
    );
}
