// import Link from "next/link";


// export default function Thankyou() {
//     return (
//         <div className="flex items-center justify-center min-h-screen bg-cyan-50">
//             <div className="text-center">
//                 {/* Thank You Message */}
//                 <h1 className="text-blue-500 font-bold text-5xl mb-4">
//                     <i>Thank You for Shopping!</i>
//                 </h1>

//                 {/* Delivery Message */}
//                 <p className="text-gray-700 text-lg mb-6">
//                     Your order will be delivered in <b>3 business days</b>.
//                 </p>

//                 {/* Back to Home Button */}
//                 <Link href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
//                     Back to Home
//                 </Link>
//             </div>
//         </div>
//     );
// }


// -----------------------------------------------------------  WITH RESPONSIVENESS -----------------------------------------------------------  

import Link from "next/link";

export default function Thankyou() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-cyan-50 px-4">
            <div className="text-center max-w-xl">
                {/* Thank You Message */}
                <h1 className="text-blue-500 font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
                    <i>Thank You for Shopping!</i>
                </h1>

                {/* Delivery Message */}
                <p className="text-gray-700 text-base sm:text-lg mb-6">
                    Your order will be delivered in <b>3 business days</b>.
                </p>

                {/* Back to Home Button */}
                <Link 
                    href="/" 
                    className="inline-block bg-blue-600 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg hover:bg-blue-700 transition w-full sm:w-auto"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
