// import Link from "next/link";

// export default function Form() {
//     return (
//         <div>
//             <div className="border-2 w-[60%] h-[90%] mx-64 py-5 border-gray-400 bg-slate-100 mt-5">

//                 <h1 className="text-3xl font-semibold text-center uppercase mt-5 underline">enter your details</h1> <br />

//                 <div>
//                     <form className="flex gap-5 justify-center flex-col items-center mt-6">

//                         <label className="fname space-x-2"><b>First Name</b>
//                             <input className="border-red-800 w-80 border rounded-xl p-2 text-center"
//                                 placeholder="Enter your Name.." /> </label>

//                         <label className="moboleNo space-x-2"><b>Mobile No</b>
//                             <input className="border-red-800 w-80 border rounded-xl p-2 text-center"
//                                 placeholder="Enter Your Mobile No.." />  </label>

//                         <label className="address space-x-3"><b>Address</b>
//                             <input type="address" className="border-red-800 w-80 border rounded-xl p-2 text-center"
//                                 placeholder="Enter your full Address.." /> </label>

//                         <label className="ID-Card space-x-5"><b>ID-Card</b>
//                             <input type="type" className="border-red-800 w-80 border rounded-xl p-2 text-center"
//                                 placeholder="Enter your CardNo.." /> </label>

//                         <label className="email space-x-5"><b>Email</b>
//                             <input type="email" className="border-red-800 w-80 border rounded-xl p-2 text-center"
//                                 placeholder="Enter your Email.." /> </label>

//                         <Link href="./thankyou">
//                             <button className="bg-blue-800 text-white py-3 px-8 rounded-lg mt-4">Place your Order</button></Link>
//                         <br />
//                     </form>
//                 </div>
//             </div> <br /> <br />
//         </div>

//     );
// }

import Link from "next/link";

export default function Form() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="border-2 w-[50%] max-w-lg p-8 border-gray-400 bg-white shadow-lg rounded-lg">

                <h1 className="text-3xl font-semibold text-center uppercase mb-5 underline">Enter Your Details</h1>

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
                    <Link href="./thankyou">
                        <button className="bg-blue-800 text-white py-3 px-8 rounded-lg mt-4 hover:bg-blue-900 transition">
                            Place your Order
                        </button>
                    </Link>
                </form>

            </div>
        </div>
    );
}
