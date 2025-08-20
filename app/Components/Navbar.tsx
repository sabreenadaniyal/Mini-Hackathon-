// import Link from "next/link";
// import Image from "next/image";

// export default function Navbar() {
//     return (
//         <header className="bg-[#03040B] text-white">
//             {/* Top Bar */}
//             <div className="flex items-center justify-between px-6 py-2 md:px-20">
//                 <div className="flex items-center gap-2">
//                     <Image src="/Smartphone.png" alt="mobile" width={20} height={20} />
//                     <Link href="#" target="_blank" className="text-xs">
//                         Download App via SMS
//                     </Link>
//                 </div>

//                 <div className="hidden md:flex gap-3 items-center">
//                     <Link className="text-red-800" href="#" target="_blank">Urdu</Link>
//                     <span className="text-gray-500">|</span>
//                     <Link href="#" target="_blank">Sign Up</Link>
//                     <span className="text-gray-500">|</span>
//                     <Link href="#" target="_blank">Sign In</Link>
//                 </div>

//                 {/* Mobile Menu Button (Checkbox Hack) */}
//                 <input type="checkbox" id="menu-toggle" className="peer hidden" />
//                 <label htmlFor="menu-toggle" className="md:hidden cursor-pointer">
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//                     </svg>
//                 </label>
//             </div>

//             {/* Border */}
//             <div className="border-b-2 bg-[#C4C5C3] mx-10 md:mx-44"></div>

//             {/* Navbar */}
//             <nav className="flex items-center justify-between px-6 md:px-20 py-4">
//                 <Image src="/pw-logo.png" alt="Logo" width={147} height={70} />

//                 {/* Desktop Nav Links */}
//                 <div className="hidden md:flex gap-6">
//                     <Link href="#" className="hover:text-gray-400">Used Cars</Link>
//                     <Link href="#" className="hover:text-gray-400">New Cars</Link>
//                     <Link href="#" className="hover:text-gray-400">Bikes</Link>
//                     <Link href="#" className="hover:text-gray-400">AutoStore</Link>
//                     <Link href="#" className="hover:text-gray-400">Videos</Link>
//                     <Link href="#" className="hover:text-gray-400">Forum</Link>
//                     <Link href="#" className="hover:text-gray-400">Blog</Link>
//                     <Link href="#" className="hover:text-gray-400">More</Link>
//                 </div>

//                 {/* Post Ad Button */}
//                 <button className="bg-[#AE2828] text-white px-4 py-2 rounded-md font-bold">
//                     Post an Ad
//                 </button>
//             </nav>

//             {/* Mobile Menu (Checkbox Hack) */}
//             <div className="peer-checked:block hidden md:hidden bg-[#03040B] text-white py-4 text-center">
//                 <Link href="#" className="block py-2">Used Cars</Link>
//                 <Link href="#" className="block py-2">New Cars</Link>
//                 <Link href="#" className="block py-2">Bikes</Link>
//                 <Link href="#" className="block py-2">AutoStore</Link>
//                 <Link href="#" className="block py-2">Videos</Link>
//                 <Link href="#" className="block py-2">Forum</Link>
//                 <Link href="#" className="block py-2">Blog</Link>
//                 <Link href="#" className="block py-2">More</Link>
//             </div>
//         </header>
//     );
// }



// -----------------------------------------------------------  WITH RESPONSIVENESS -----------------------------------------------------------  

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <header className="bg-[#03040B] text-white w-full overflow-x-hidden">
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 py-2 md:px-20 gap-2 md:gap-0">
                <div className="flex items-center gap-2">
                    <Image src="/Smartphone.png" alt="mobile" width={20} height={20} />
                    <Link href="#" target="_blank" className="text-xs sm:text-sm">
                        Download App via SMS
                    </Link>
                </div>

                <div className="hidden md:flex gap-3 items-center text-sm">
                    <Link className="text-red-800" href="#" target="_blank">Urdu</Link>
                    <span className="text-gray-500">|</span>
                    <Link href="#" target="_blank">Sign Up</Link>
                    <span className="text-gray-500">|</span>
                    <Link href="#" target="_blank">Sign In</Link>
                </div>

                {/* Mobile Menu Button */}
                <input type="checkbox" id="menu-toggle" className="peer hidden" />
                <label htmlFor="menu-toggle" className="md:hidden cursor-pointer">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </label>
            </div>

            {/* Border */}
            <div className="border-b-2 bg-[#C4C5C3] mx-4 sm:mx-10 md:mx-20"></div>

            {/* Navbar */}
            <nav className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-20 py-4 gap-4 md:gap-0">
                <Image 
                    src="/pw-logo.png" 
                    alt="Logo" 
                    width={147} 
                    height={70} 
                    className="w-32 sm:w-36 md:w-[147px] h-auto max-w-full" 
                />

                {/* Desktop Nav Links */}
                <div className="hidden md:flex flex-wrap gap-4 lg:gap-6 text-sm lg:text-base">
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
                <button className="bg-[#AE2828] text-white px-3 sm:px-4 py-2 rounded-md font-bold text-sm sm:text-base w-full sm:w-auto">
                    Post an Ad
                </button>
            </nav>

            {/* Mobile Menu */}
            <div className="peer-checked:block hidden md:hidden bg-[#03040B] text-white py-4 text-center space-y-2 text-sm">
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
