// export default function Home() {
//   return (
//     <div> <br />  <br />

//       <div className="flex justify-center">
//         <fieldset className="text-center border-2 border-gray-300 h-80 w-[70%]  ">
//           <legend>
//             <h2 className="text-center text-gray-800 text-2xl font-semibold">
//               Sell Your Car on PakWheels and Get the Best Price</h2>
//           </legend>

//           <div className="flex justify-center gap-40 mt-10 leading-8 text-sm">

//             <div className="text-start">
//               <h1 className="font-bold text-blue-900 text-xl leading-10">Post your Ad on PakWheels</h1>

//               <li className="flex gap-2">
//                 <img src="/tick.png" alt="" width={22} height={5} />
//                 <p>Post your Ad for Free in 3 Easy Steps</p> </li>

//               <li className="flex gap-2">
//                 <img src="/tick.png" alt="" width={22} height={5} />
//                 <p>Get Genuine offers from Verified Buyers</p> </li>

//               <li className="flex gap-2">
//                 <img src="/tick.png" alt="" width={22} height={5} />
//                 <p>Sell your car Fast at the Best Price</p> </li>

//               <button className="bg-red-700 text-white px-11 py-2 rounded-md mt-5">Post Your Ad</button>
//             </div>


//             <div className="divide-x bg-slate-200 w-1 h-20">
//               <div className="text-gray-600 text-2xl mt-20 font-sans">OR</div>
//               <div className="divide-x bg-slate-200 w-1 h-24"></div>
//             </div>


//             <div className="text-left">
//               <h1 className="font-bold text-blue-900 text-xl leading-10">Try PakWheels Sell It For Me</h1>

//               <li className="flex gap-2">
//                 <img src="/tick.png" alt="" width={22} height={5} />
//                 <p>Dedicated Sales Expert to Sell your Car</p> </li>

//               <li className="flex gap-2">
//                 <img src="/tick.png" alt="" width={22} height={5} />
//                 <p>We Bargain for you and share the Best Offer</p> </li>

//               <li className="flex gap-2">
//                 <img src="/tick.png" alt="" width={22} height={5} />
//                 <p>We ensure Safe & Secure Transaction</p> </li>

//               <button className="bg-blue-600 text-white px-11 py-2 rounded-md mt-5">Register Your Car</button>
//             </div>

//           </div>
//         </fieldset>
//       </div>


     

//     </div>

//   );
// }

import Image from "next/image";

export default function Home() {
    return (
      <div className="px-4 py-10">
        <div className="flex justify-center">
          <fieldset className="text-center border-2 border-gray-300 p-6 w-full md:w-[70%]">
            <legend>
              <h2 className="text-gray-800 text-lg md:text-2xl font-semibold">
                Sell Your Car on PakWheels and Get the Best Price
              </h2>
            </legend>
  
            {/* Main Content */}
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-40 mt-6 text-sm">
              
              {/* Left Section */}
              <div className="text-start">
                <h1 className="font-bold text-blue-900 text-lg md:text-xl leading-10">
                  Post your Ad on PakWheels
                </h1>
  
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <Image src="/tick.png" alt="" width={22} height={5} />
                    <p className="text-xl">Post your Ad for Free in 3 Easy Steps</p>
                  </li>
                  <li className="flex gap-2">
                    <Image src="/tick.png" alt="" width={22} height={5} />
                    <p className="text-xl">Get Genuine offers from Verified Buyers</p>
                  </li>
                  <li className="flex gap-2">
                    <Image src="/tick.png" alt="" width={22} height={5} />
                    <p className="text-xl">Sell your car Fast at the Best Price</p>
                  </li>
                </ul>
  
                <button className="bg-red-700 text-white px-6 md:px-11 py-2 rounded-md mt-4 w-full md:w-auto text-2xl hover:bg-red-500">
                  Post Your Ad
                </button>
              </div>
  
              {/* Divider (for larger screens) */}
              <div className="hidden md:flex flex-col items-center">
                <div className="text-gray-600 text-lg md:text-2xl font-semibold">OR</div>
                <div className="bg-slate-200 w-1 h-16"></div>
              </div>
  
              {/* Mobile Divider (only visible on small screens) */}
              <div className="flex md:hidden items-center justify-center py-4">
                <div className="w-full border-t border-gray-300"></div>
                <span className="px-2 text-gray-600 font-semibold">OR</span>
                <div className="w-full border-t border-gray-300"></div>
              </div>
  
              {/* Right Section */}
              <div className="text-start">
                <h1 className="font-bold text-blue-900 text-lg md:text-xl leading-10">
                  Try PakWheels Sell It For Me
                </h1>
  
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <Image src="/tick.png" alt="" width={22} height={5} />
                    <p className="text-xl">Dedicated Sales Expert to Sell your Car</p>
                  </li>
                  <li className="flex gap-2">
                    <Image src="/tick.png" alt="" width={22} height={5} />
                    <p className="text-xl">We Bargain for you and share the Best Offer</p>
                  </li>
                  <li className="flex gap-2">
                    <Image src="/tick.png" alt="" width={22} height={5} />
                    <p className="text-xl">We ensure Safe & Secure Transaction</p>
                  </li>
                </ul>
  
                <button className="bg-blue-600 text-white px-6 md:px-11 py-2 rounded-md mt-4 w-full md:w-auto text-2xl hover:bg-blue-500">
                  Register Your Car
                </button>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    );
  }
  
