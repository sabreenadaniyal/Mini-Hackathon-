// import Link from "next/link";
// import Image from "next/image";

// export default function Toyota() {
//     return (
//         <div className="bg-gray-200 w-full min-h-screen py-10">

//             {/* Title */}
//             <div className="text-center font-bold text-2xl font-sans underline">
//                 <h1 className="m-8">Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs</h1>
//             </div>

//             {/* Car Image */}
//             <div className="flex justify-center">
//                 <Image src="/01.webp" alt="Toyota Corolla 2024" 
//                 height={150} 
//                 width={250}
//                 className="w-80 h-auto rounded-lg shadow-md" />
//             </div>

//             {/* Action Buttons */}
//             <div className="mt-6 flex flex-wrap gap-4 justify-center text-center text-sm text-blue-950">
//                 {[
//                     "Book a Test Drive",
//                     "Request Bank Finance",
//                     "Visit Place",
//                     "Car Inspection"
//                 ].map((text, index) => (
//                     <button key={index} className="border-2 border-blue-800 px-5 py-3 rounded-md hover:text-white hover:bg-blue-950 transition">
//                         {text}
//                     </button>
//                 ))}
//             </div>

//             {/* Vehicle Description */}
//             <h2 className="mt-10 text-center text-2xl font-medium">Vehicle Description</h2>
//             <p className="mx-auto max-w-3xl mt-4 text-gray-800 leading-relaxed px-6 text-lg">
//                 The <b>Toyota Corolla</b> is not here to wow or excite. Instead, it offers a safe, predictable ride no matter how far the trip is. 
//                 Performance is not at the forefront of the Corollas intentions (except for the GR Corolla, reviewed separately), and its most
//                 powerful engine packs a stable of 169—lethargic—horses. When compared to the Honda Civic or Mazda 3, the Corolla feels much like a 
//                 tortoise between two hares. The Corolla is available as either a four-door sedan or five-door hatchback. The former is even available
//                 with an incredibly fuel-efficient hybrid powertrain.
//             </p>

//             {/* Car Features */}
//             <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-900 text-lg px-10">
//                 {[
//                     ["Number of Doors", "4"],
//                     ["Engine", "1800 CC"],
//                     ["Condition", "8.5 / 10"],
//                     ["Driven", "9,500 KM"],
//                     ["Suspension Type", "Soft Suspension"],
//                     ["Avg", "12 KM per liter"],
//                     ["Transmission", "Automatic"],
//                     ["Fuel Type", "High Octane"]
//                 ].map(([key, value], index) => (
//                     <div key={index} className="p-2 bg-white shadow-md rounded-md text-center">
//                         <b>{key}:</b> {value}
//                     </div>
//                 ))}
//             </div>

//             {/* Price */}
//             <h2 className="text-center text-green-600 mt-9 text-3xl font-bold">PKR 50,00,000</h2>

//             {/* Payment Button */}
//             <div className="flex justify-center mt-8">
//                 <Link href="/form">
//                     <button className="bg-blue-800 text-white px-6 py-3 rounded-md text-lg hover:text-xl transition">
//                         Make Payment
//                     </button>
//                 </Link>
//             </div>

//         </div>
//     );
// }


// -----------------------------------------------------------  WITH RESPONSIVENESS -----------------------------------------------------------  


import Link from "next/link";
import Image from "next/image";

export default function Toyota() {
    return (
        <div className="bg-gray-200 w-full min-h-screen py-10">

            {/* Title */}
            <div className="text-center font-bold text-xl sm:text-2xl md:text-3xl font-sans underline px-4">
                <h1 className="m-6 sm:m-8">
                    Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs
                </h1>
            </div>

            {/* Car Image */}
            <div className="flex justify-center">
                <Image
                    src="/01.webp"
                    alt="Toyota Corolla 2024"
                    height={150}
                    width={250}
                    className="w-64 sm:w-80 md:w-[400px] lg:w-[500px] h-auto rounded-lg shadow-md"
                />
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap gap-3 sm:gap-4 justify-center text-center text-sm sm:text-base text-blue-950 px-4">
                {[
                    "Book a Test Drive",
                    "Request Bank Finance",
                    "Visit Place",
                    "Car Inspection"
                ].map((text, index) => (
                    <button
                        key={index}
                        className="border-2 border-blue-800 px-4 sm:px-5 py-2 sm:py-3 rounded-md hover:text-white hover:bg-blue-950 transition w-full sm:w-auto"
                    >
                        {text}
                    </button>
                ))}
            </div>

            {/* Vehicle Description */}
            <h2 className="mt-10 text-center text-xl sm:text-2xl font-medium">
                Vehicle Description
            </h2>
            <p className="mx-auto max-w-3xl mt-4 text-gray-800 leading-relaxed px-4 sm:px-6 text-base sm:text-lg">
                The <b>Toyota Corolla</b> is not here to wow or excite. Instead, it offers a safe, predictable ride no matter how far the trip is. 
                Performance is not at the forefront of the Corollas intentions (except for the GR Corolla, reviewed separately), and its most
                powerful engine packs a stable of 169—lethargic—horses. When compared to the Honda Civic or Mazda 3, the Corolla feels much like a 
                tortoise between two hares. The Corolla is available as either a four-door sedan or five-door hatchback. The former is even available
                with an incredibly fuel-efficient hybrid powertrain.
            </p>

            {/* Car Features */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-gray-900 text-base sm:text-lg px-4 sm:px-10">
                {[
                    ["Number of Doors", "4"],
                    ["Engine", "1800 CC"],
                    ["Condition", "8.5 / 10"],
                    ["Driven", "9,500 KM"],
                    ["Suspension Type", "Soft Suspension"],
                    ["Avg", "12 KM per liter"],
                    ["Transmission", "Automatic"],
                    ["Fuel Type", "High Octane"]
                ].map(([key, value], index) => (
                    <div
                        key={index}
                        className="p-3 bg-white shadow-md rounded-md text-center"
                    >
                        <b>{key}:</b> {value}
                    </div>
                ))}
            </div>

            {/* Price */}
            <h2 className="text-center text-green-600 mt-9 text-2xl sm:text-3xl font-bold">
                PKR 50,00,000
            </h2>

            {/* Payment Button */}
            <div className="flex justify-center mt-8 px-4">
                <Link href="/form">
                    <button className="bg-blue-800 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-md text-base sm:text-lg hover:scale-105 transition">
                        Make Payment
                    </button>
                </Link>
            </div>
        </div>
    );
}
