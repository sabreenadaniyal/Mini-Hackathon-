// import Link from "next/link"

// export default function Navbar() {
//     return (
//         <div>
//             <header>
//                 <div className= "bg-[#03040B] flex w-full h-10">
                    
//                 <div className="flex ml-20 items-center">  
//                 <img src="/Smartphone.png" alt="mobile" 
//                  width={20}
//                  height={1}/>
               

//              <div className="text-xs text-white">
//                 <Link href="#" target="_blank">DownloadAppviaSMS</Link></div>
//                  </div>

//                     <div className="text-md flex w-full justify-end mr-24 text-white gap-3 items-center">
//                     <Link className="text-red-800" href="#" target="_blank">Urdu</Link>
//                     <div className="text-gray-500">|</div> 
//                         <Link href="#" target="_blank">Sign Up</Link> 
//                         <div className="text-gray-500">|</div> 
//                         <Link href="#" target="_blank">Sign In</Link>
//                     </div>
//                 </div>

//                 <div className="border-b-2 bg-[#C4C5C3] w-15 h-1 mx-44"></div>

//                 <nav className="flex w-full bg-[#03040B] h-16 items-center ">
 
//                         <div className="mr-20">
//                             <img className="ml-20" src="/pw-logo.png" alt="Logo"
//                                 width={147}
//                                 height={70} /></div>

//                         <div className="flex w-full justify-evenly mr-10 items-center">
//                             <div className="text-white ">UsedCars</div>
//                             <div className="text-white">NewCars</div>
//                             <div className="text-white ">Bikes</div>
//                             <div className="text-white">AutoStore</div>
//                             <div className="text-white">Videos</div>
//                             <div className="text-white">Forum</div>
//                             <div className="text-white">Blog</div>
//                             <div className="text-white">More</div>

//                             <button className="bg-[#AE2828] text-white w-36 h-10 rounded-md font-bold">Post an Ad</button>
//                         </div>
                   
//                 </nav>
//             </header>
//         </div>
//     )
// }

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <header className="bg-[#03040B] text-white">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-2 md:px-20">
                <div className="flex items-center gap-2">
                    <Image src="/Smartphone.png" alt="mobile" width={20} height={20} />
                    <Link href="#" target="_blank" className="text-xs">
                        Download App via SMS
                    </Link>
                </div>

                <div className="hidden md:flex gap-3 items-center">
                    <Link className="text-red-800" href="#" target="_blank">Urdu</Link>
                    <span className="text-gray-500">|</span>
                    <Link href="#" target="_blank">Sign Up</Link>
                    <span className="text-gray-500">|</span>
                    <Link href="#" target="_blank">Sign In</Link>
                </div>

                {/* Mobile Menu Button (Checkbox Hack) */}
                <input type="checkbox" id="menu-toggle" className="peer hidden" />
                <label htmlFor="menu-toggle" className="md:hidden cursor-pointer">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </label>
            </div>

            {/* Border */}
            <div className="border-b-2 bg-[#C4C5C3] mx-10 md:mx-44"></div>

            {/* Navbar */}
            <nav className="flex items-center justify-between px-6 md:px-20 py-4">
                <Image src="/pw-logo.png" alt="Logo" width={147} height={70} />

                {/* Desktop Nav Links */}
                <div className="hidden md:flex gap-6">
                    <Link href="#" className="hover:text-gray-400">Used Cars</Link>
                    <Link href="#" className="hover:text-gray-400">New Cars</Link>
                    <Link href="#" className="hover:text-gray-400">Bikes</Link>
                    <Link href="#" className="hover:text-gray-400">AutoStore</Link>
                    <Link href="#" className="hover:text-gray-400">Videos</Link>
                    <Link href="#" className="hover:text-gray-400">Forum</Link>
                    <Link href="#" className="hover:text-gray-400">Blog</Link>
                    <Link href="#" className="hover:text-gray-400">More</Link>
                </div>

                {/* Post Ad Button */}
                <button className="bg-[#AE2828] text-white px-4 py-2 rounded-md font-bold">
                    Post an Ad
                </button>
            </nav>

            {/* Mobile Menu (Checkbox Hack) */}
            <div className="peer-checked:block hidden md:hidden bg-[#03040B] text-white py-4 text-center">
                <Link href="#" className="block py-2">Used Cars</Link>
                <Link href="#" className="block py-2">New Cars</Link>
                <Link href="#" className="block py-2">Bikes</Link>
                <Link href="#" className="block py-2">AutoStore</Link>
                <Link href="#" className="block py-2">Videos</Link>
                <Link href="#" className="block py-2">Forum</Link>
                <Link href="#" className="block py-2">Blog</Link>
                <Link href="#" className="block py-2">More</Link>
            </div>
        </header>
    );
}
