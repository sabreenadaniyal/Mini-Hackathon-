// import Image from "next/image";

// export default function Home() {
//     return (
//       <div className="px-4 py-10">
//         <div className="flex justify-center">
//           <fieldset className="text-center border-2 border-gray-300 p-6 w-full md:w-[70%]">
//             <legend>
//               <h2 className="text-gray-800 text-lg md:text-2xl font-semibold">
//                 Sell Your Car on PakWheels and Get the Best Price
//               </h2>
//             </legend>

//             {/* Main Content */}
//             <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-40 mt-6 text-sm">

//               {/* Left Section */}
//               <div className="text-start">
//                 <h1 className="font-bold text-blue-900 text-lg md:text-xl leading-10">
//                   Post your Ad on PakWheels
//                 </h1>

//                 <ul className="space-y-2">
//                   <li className="flex gap-2">
//                     <Image src="/tick.png" alt="" width={22} height={5} />
//                     <p className="text-xl">Post your Ad for Free in 3 Easy Steps</p>
//                   </li>
//                   <li className="flex gap-2">
//                     <Image src="/tick.png" alt="" width={22} height={5} />
//                     <p className="text-xl">Get Genuine offers from Verified Buyers</p>
//                   </li>
//                   <li className="flex gap-2">
//                     <Image src="/tick.png" alt="" width={22} height={5} />
//                     <p className="text-xl">Sell your car Fast at the Best Price</p>
//                   </li>
//                 </ul>

//                 <button className="bg-red-700 text-white px-6 md:px-11 py-2 rounded-md mt-4 w-full md:w-auto text-2xl hover:bg-red-500">
//                   Post Your Ad
//                 </button>
//               </div>

//               {/* Divider (for larger screens) */}
//               <div className="hidden md:flex flex-col items-center">
//                 <div className="text-gray-600 text-lg md:text-2xl font-semibold">OR</div>
//                 <div className="bg-slate-200 w-1 h-16"></div>
//               </div>

//               {/* Mobile Divider (only visible on small screens) */}
//               <div className="flex md:hidden items-center justify-center py-4">
//                 <div className="w-full border-t border-gray-300"></div>
//                 <span className="px-2 text-gray-600 font-semibold">OR</span>
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>

//               {/* Right Section */}
//               <div className="text-start">
//                 <h1 className="font-bold text-blue-900 text-lg md:text-xl leading-10">
//                   Try PakWheels Sell It For Me
//                 </h1>

//                 <ul className="space-y-2">
//                   <li className="flex gap-2">
//                     <Image src="/tick.png" alt="" width={22} height={5} />
//                     <p className="text-xl">Dedicated Sales Expert to Sell your Car</p>
//                   </li>
//                   <li className="flex gap-2">
//                     <Image src="/tick.png" alt="" width={22} height={5} />
//                     <p className="text-xl">We Bargain for you and share the Best Offer</p>
//                   </li>
//                   <li className="flex gap-2">
//                     <Image src="/tick.png" alt="" width={22} height={5} />
//                     <p className="text-xl">We ensure Safe & Secure Transaction</p>
//                   </li>
//                 </ul>

//                 <button className="bg-blue-600 text-white px-6 md:px-11 py-2 rounded-md mt-4 w-full md:w-auto text-2xl hover:bg-blue-500">
//                   Register Your Car
//                 </button>
//               </div>
//             </div>
//           </fieldset>
//         </div>
//       </div>
//     );
//   }



// -----------------------------------------------------------  WITH RESPONSIVENESS -----------------------------------------------------------  

import Image from "next/image";

export default function Home() {
  return (
    <div className="px-4 py-10 w-full overflow-x-hidden">
      <div className="flex justify-center">
        <fieldset className="text-center border-2 border-gray-300 p-4 sm:p-6 w-full md:w-[80%] lg:w-[70%]">
          <legend>
            <h2 className="text-gray-800 text-base sm:text-lg md:text-2xl font-semibold leading-snug">
              Sell Your Car on PakWheels and Get the Best Price
            </h2>
          </legend>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-16 lg:gap-40 mt-6 text-sm">

            {/* Left Section */}
            <div className="text-start w-full md:w-1/2">
              <h1 className="font-bold text-blue-900 text-lg sm:text-xl leading-8 sm:leading-10">
                Post your Ad on PakWheels
              </h1>

              <ul className="space-y-2 mt-2">
                <li className="flex gap-2 items-start">
                  <Image src="/tick.png" alt="" width={20} height={20} />
                  <p className="text-sm sm:text-base md:text-lg">
                    Post your Ad for Free in 3 Easy Steps
                  </p>
                </li>
                <li className="flex gap-2 items-start">
                  <Image src="/tick.png" alt="" width={20} height={20} />
                  <p className="text-sm sm:text-base md:text-lg">
                    Get Genuine offers from Verified Buyers
                  </p>
                </li>
                <li className="flex gap-2 items-start">
                  <Image src="/tick.png" alt="" width={20} height={20} />
                  <p className="text-sm sm:text-base md:text-lg">
                    Sell your car Fast at the Best Price
                  </p>
                </li>
              </ul>

              <button className="bg-red-700 text-white px-4 sm:px-6 md:px-11 py-2 rounded-md mt-4 w-full md:w-auto text-base sm:text-lg md:text-2xl hover:bg-red-500">
                Post Your Ad
              </button>
            </div>

            {/* Divider (for larger screens) */}
            <div className="hidden md:flex flex-col items-center">
              <div className="text-gray-600 text-lg md:text-xl font-semibold">OR</div>
              <div className="bg-slate-200 w-1 h-16"></div>
            </div>

            {/* Mobile Divider */}
            <div className="flex md:hidden items-center justify-center py-4 w-full">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-2 text-gray-600 font-semibold">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Right Section */}
            <div className="text-start w-full md:w-1/2">
              <h1 className="font-bold text-blue-900 text-lg sm:text-xl leading-8 sm:leading-10">
                Try PakWheels Sell It For Me
              </h1>

              <ul className="space-y-2 mt-2">
                <li className="flex gap-2 items-start">
                  <Image src="/tick.png" alt="" width={20} height={20} />
                  <p className="text-sm sm:text-base md:text-lg">
                    Dedicated Sales Expert to Sell your Car
                  </p>
                </li>
                <li className="flex gap-2 items-start">
                  <Image src="/tick.png" alt="" width={20} height={20} />
                  <p className="text-sm sm:text-base md:text-lg">
                    We Bargain for you and share the Best Offer
                  </p>
                </li>
                <li className="flex gap-2 items-start">
                  <Image src="/tick.png" alt="" width={20} height={20} />
                  <p className="text-sm sm:text-base md:text-lg">
                    We ensure Safe & Secure Transaction
                  </p>
                </li>
              </ul>

              <button className="bg-blue-600 text-white px-4 sm:px-6 md:px-11 py-2 rounded-md mt-4 w-full md:w-auto text-base sm:text-lg md:text-2xl hover:bg-blue-500">
                Register Your Car
              </button>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
}
