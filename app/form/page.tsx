
// import Link from "next/link";

// export default function Form() {
//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-100">
//             <div className="border-2 w-[50%] max-w-lg p-8 border-gray-400 bg-white shadow-lg rounded-lg">

//                 <h1 className="text-3xl font-semibold text-center uppercase mb-5 underline">Enter Your Details</h1>

//                 <form className="flex flex-col gap-5">
//                     {/* First Name */}
//                     <label className="flex flex-col">
//                         <span className="font-semibold">First Name</span>
//                         <input 
//                             type="text"
//                             name="firstName"
//                             required
//                             className="border-gray-400 w-full border rounded-lg p-2 text-center mt-1"
//                             placeholder="Enter your first name..."
//                         />
//                     </label>

//                     {/* Mobile Number */}
//                     <label className="flex flex-col">
//                         <span className="font-semibold">Mobile No</span>
//                         <input 
//                             type="tel"
//                             name="mobileNo"
//                             required
//                             pattern="[0-9]{11}"
//                             className="border-gray-400 w-full border rounded-lg p-2 text-center mt-1"
//                             placeholder="Enter your mobile number (e.g. 03001234567)"
//                         />
//                     </label>

//                     {/* Address */}
//                     <label className="flex flex-col">
//                         <span className="font-semibold">Address</span>
//                         <input 
//                             type="text"
//                             name="address"
//                             required
//                             className="border-gray-400 w-full border rounded-lg p-2 text-center mt-1"
//                             placeholder="Enter your full address..."
//                         />
//                     </label>

//                     {/* ID Card */}
//                     <label className="flex flex-col">
//                         <span className="font-semibold">ID-Card</span>
//                         <input 
//                             type="number"
//                             name="idCard"
//                             required
//                             className="border-gray-400 w-full border rounded-lg p-2 text-center mt-1"
//                             placeholder="Enter your ID Card No..."
//                         />
//                     </label>

//                     {/* Email */}
//                     <label className="flex flex-col">
//                         <span className="font-semibold">Email</span>
//                         <input 
//                             type="email"
//                             name="email"
//                             required
//                             className="border-gray-400 w-full border rounded-lg p-2 text-center mt-1"
//                             placeholder="Enter your email..."
//                         />
//                     </label>

//                     {/* Submit Button */}
//                     <Link href="./thankyou">
//                         <button className="bg-blue-800 text-white py-3 px-8 rounded-lg mt-4 hover:bg-blue-900 transition">
//                             Place your Order
//                         </button>
//                     </Link>
//                 </form>

//             </div>
//         </div>
//     );
// }


// -----------------------------------------------------------  WITH RESPONSIVENESS -----------------------------------------------------------  

import Link from "next/link";

export default function Form() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
            <div className="border-2 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] max-w-lg p-6 sm:p-8 border-gray-400 bg-white shadow-lg rounded-lg">

                <h1 className="text-2xl sm:text-3xl font-semibold text-center uppercase mb-5 underline">Enter Your Details</h1>

                <form className="flex flex-col gap-5">
                    {/* First Name */}
                    <label className="flex flex-col">
                        <span className="font-semibold">First Name</span>
                        <input
                            type="text"
                            name="firstName"
                            required
                            className="border-gray-400 w-full border rounded-lg p-2 text-center mt-1"
                            placeholder="Enter your first name..."
                        />
                    </label>

                    {/* Mobile Number */}
                    <label className="flex flex-col">
                        <span className="font-semibold">Mobile No</span>
                        <input
                            type="tel"
                            name="mobileNo"
                            required
                            pattern="[0-9]{11}"
                            className="border-gray-400 w-full border rounded-lg p-2 text-center mt-1"
                            placeholder="Enter your mobile number (e.g. 03001234567)"
                        />
                    </label>

                    {/* Address */}
                    <label className="flex flex-col">
                        <span className="font-semibold">Address</span>
                        <input
                            type="text"
                            name="address"
                            required
                            className="border-gray-400 w-full border rounded-lg p-2 text-center mt-1"
                            placeholder="Enter your full address..."
                        />
                    </label>

                    {/* ID Card */}
                    <label className="flex flex-col">
                        <span className="font-semibold">ID-Card</span>
                        <input
                            type="number"
                            name="idCard"
                            required
                            className="border-gray-400 w-full border rounded-lg p-2 text-center mt-1"
                            placeholder="Enter your ID Card No..."
                        />
                    </label>

                    {/* Email */}
                    <label className="flex flex-col">
                        <span className="font-semibold">Email</span>
                        <input
                            type="email"
                            name="email"
                            required
                            className="border-gray-400 w-full border rounded-lg p-2 text-center mt-1"
                            placeholder="Enter your email..."
                        />
                    </label>

                    {/* Submit Button */}
                    <Link href="./thankyou" className="w-full">
                        <button className="w-full bg-blue-800 text-white py-3 px-8 rounded-lg mt-4 hover:bg-blue-900 transition text-sm sm:text-base">
                            Place your Order
                        </button>
                    </Link>
                </form>

            </div>
        </div>
    );
}
