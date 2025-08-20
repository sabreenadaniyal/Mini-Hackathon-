// import Link from "next/link";

// export default function Footer() {
//     return (
//         <div className="w-full bg-slate-800 py-6 text-white mt-12">
//             <div className="flex flex-col md:flex-row justify-center items-center text-center md:justify-between px-6 md:px-20">
                
//                 <p className="text-sm md:text-base flex items-center gap-1">
//                     Made by |
//                     <Link className="hover:text-red-300 font-serif font-bold" href="https://www.linkedin.com/in/sabreena-zahid-ali-1343a8198/" target="_blank">
//                         SABREENA ZAHID ALI
//                     </Link>
//                 </p>

//                 <p className="text-gray-400 text-sm mt-2 md:mt-0">
//                     © 2024 All Rights Reserved
//                 </p>

//             </div>
//         </div>
//     );
// }


// ----------------------------------------------------------  WITH RESPONSIVENESS ----------------------------------------------------------
import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full bg-slate-800 py-6 text-white mt-12 overflow-x-hidden">
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-center px-4 sm:px-6 md:px-20 gap-2">
                
                <p className="text-sm md:text-base flex flex-wrap items-center gap-1">
                    Made by |
                    <Link 
                        className="hover:text-red-300 font-serif font-bold break-words" 
                        href="https://www.linkedin.com/in/sabreena-zahid-ali-1343a8198/" 
                        target="_blank"
                    >
                        SABREENA ZAHID ALI
                    </Link>
                </p>

                <p className="text-gray-400 text-xs sm:text-sm mt-2 md:mt-0">
                    © 2024 All Rights Reserved
                </p>

            </div>
        </div>
    );
}
