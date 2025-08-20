// import Link from "next/link";
// import Image from "next/image";

// export default function Alto() {
//     return (
//         <div className="bg-gray-200 w-full min-h-screen py-10">

//             {/* Title */}
//             <div className="text-center font-bold text-2xl font-sans underline">
//                 <h1 className="m-8">Suzuki Alto 2024 Price in Pakistan, Images, Reviews & Specs</h1>
//             </div>

//             {/* Car Image */}
//             <div className="flex justify-center">
//                 <Image src="/02.jpg" alt="Suzuki Alto 2024" 
//                  height={150} 
//                  width={250}
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
//                 <b>Suzuki Alto VXR</b> features a completely new look that fits the modern world, making it a perfect city car. 
//                 It is one of the most fuel-efficient cars available, compact and stylish on the outside yet surprisingly spacious
//                 on the inside. The Alto VXR is the most well-equipped and affordable hatchback in the 660CC category in Pakistan.
//             </p>

//             {/* Car Features */}
//             <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-900 text-lg px-10">
//                 {[
//                     ["Number of Doors", "4"],
//                     ["Engine", "660 CC"],
//                     ["Condition", "8.5 / 10"],
//                     ["Driven", "9,500 KM"],
//                     ["Suspension Type", "Soft Suspension"],
//                     ["Mileage", "18-22 KM per liter"],
//                     ["Transmission", "Automatic"],
//                     ["Fuel Type", "Petrol"]
//                 ].map(([key, value], index) => (
//                     <div key={index} className="p-2 bg-white shadow-md rounded-md text-center">
//                         <b>{key}:</b> {value}
//                     </div>
//                 ))}
//             </div>

//             {/* Price */}
//             <h2 className="text-center text-green-600 mt-9 text-3xl font-bold">PKR 3,250,000</h2>

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

export default function Alto() {
    return (
        <div className="bg-gray-200 w-full min-h-screen py-10">

            {/* Title */}
            <div className="text-center font-bold text-xl sm:text-2xl font-sans underline px-4">
                <h1 className="m-6 sm:m-8">
                    Suzuki Alto 2024 Price in Pakistan, Images, Reviews & Specs
                </h1>
            </div>

            {/* Car Image */}
            <div className="flex justify-center px-4">
                <Image 
                    src="/02.jpg" 
                    alt="Suzuki Alto 2024" 
                    height={150} 
                    width={250}
                    className="w-64 sm:w-80 md:w-[350px] h-auto rounded-lg shadow-md" 
                />
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap gap-3 sm:gap-4 justify-center text-center text-xs sm:text-sm md:text-base text-blue-950 px-4">
                {[
                    "Book a Test Drive",
                    "Request Bank Finance",
                    "Visit Place",
                    "Car Inspection"
                ].map((text, index) => (
                    <button 
                        key={index} 
                        className="border-2 border-blue-800 px-3 sm:px-5 py-2 sm:py-3 rounded-md hover:text-white hover:bg-blue-950 transition w-full sm:w-auto"
                    >
                        {text}
                    </button>
                ))}
            </div>

            {/* Vehicle Description */}
            <h2 className="mt-10 text-center text-lg sm:text-2xl font-medium">Vehicle Description</h2>
            <p className="mx-auto max-w-3xl mt-4 text-gray-800 leading-relaxed px-4 sm:px-6 text-sm sm:text-lg">
                <b>Suzuki Alto VXR</b> features a completely new look that fits the modern world, making it a perfect city car. 
                It is one of the most fuel-efficient cars available, compact and stylish on the outside yet surprisingly spacious
                on the inside. The Alto VXR is the most well-equipped and affordable hatchback in the 660CC category in Pakistan.
            </p>

            {/* Car Features */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-gray-900 text-sm sm:text-lg px-4 sm:px-10">
                {[
                    ["Number of Doors", "4"],
                    ["Engine", "660 CC"],
                    ["Condition", "8.5 / 10"],
                    ["Driven", "9,500 KM"],
                    ["Suspension Type", "Soft Suspension"],
                    ["Mileage", "18-22 KM per liter"],
                    ["Transmission", "Automatic"],
                    ["Fuel Type", "Petrol"]
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
                PKR 3,250,000
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
