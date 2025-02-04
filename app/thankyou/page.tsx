// export default function Thankyou() {
//     return (
//         <div>
//             <div className="bg-cyan-50 w-full h-[90vh]">

import Link from "next/link";

//                 <div className="text-center text-blue-500 font-bold text-5xl pt-44">
//                     <h1><i>Thank you For Shopping!!!</i></h1>
//                 </div>

//                 <div className="text-center pt-8 ">
//                     <p>Your order will be deliverd in 3 Business days </p>
//                 </div>

//             </div>
//         </div>
//     );
// }


export default function Thankyou() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-cyan-50">
            <div className="text-center">
                {/* Thank You Message */}
                <h1 className="text-blue-500 font-bold text-5xl mb-4">
                    <i>Thank You for Shopping!</i>
                </h1>

                {/* Delivery Message */}
                <p className="text-gray-700 text-lg mb-6">
                    Your order will be delivered in <b>3 business days</b>.
                </p>

                {/* Back to Home Button */}
                <Link href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
