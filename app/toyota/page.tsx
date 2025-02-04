// import Link from "next/link";

// export default function Toyota() {
//     return (
//         <div>
//             <div className="bg-gray-200 w-ful h-[120vh]">

//                 <div className="text-center font-bold p-1 text-2xl font-sans underline">
//                     <h1 className="m-8">
//                         Toyota Corolla 2024 Price in Pakistan, Images Reviews & Specs</h1>
//                 </div>

//                 <div className="flex justify-center">
//                     <div className=" w-60 mt-1"><img src="./01.webp" alt="" height={150} width={250} />
//                     </div></div>

//                 <div className="mt-6 flex gap-5 justify-center text-center text-sm text-blue-950 ">
//                     <button className="border-2 border-blue-800 w-36 h-11 rounded-md hover:text-white hover:bg-blue-950">Book a test drive</button>
//                     <button className="border-2 border-blue-800 w-44 h-12 rounded-md hover:text-white hover:bg-blue-950">Request Bank Fianace</button>
//                     <button className="border-2 border-blue-800 w-28 h-12 rounded-md hover:text-white hover:bg-blue-950">Visit Place</button>
//                     <button className="border-2 border-blue-800 w-28 h-12 rounded-md hover:text-white hover:bg-blue-950">Car Inspection</button>
//                 </div>

//                 <h2 className="mt-7 text-center text-2xl font-medium">Vehicle Description</h2> <br />


//                 <p className="mx-40">The <b>Toyota Corolla</b> isn't here to wow or excite. Instead,
//                     it offers a safe predictable ride no matter how far the
//                     trip is. Performance isn't at the forefront of the Corolla's
//                     intentions (except for the GR Corolla, reviewed separately),
//                     and its most powerful engine packs a stable of 169—lethargic—horses.
//                     When compared to the Honda Civic or Mazda 3, the Corolla feels much
//                     like a tortoise between two hares. The Corolla is available as either
//                     a four-door sedan or five-door hatchback. The former is even available
//                     with an incredibly fuel-efficient hybrid powertrain.</p>

//                 <div className="mt-8">
//                     <ul className="grid grid-cols-5 mx-28 leading-tight">
//                         <li><b>Number of Doors</b> 4</li>
//                         <li><b>Engine</b> 1800 CC</li>
//                         <li><b>Condition</b> 8.5 / 10</li>
//                         <li><b>Driven</b> 9,500 KM</li>
//                         <li><b>Suspension Type:</b> Soft Suspension</li>
//                         <li><b>Avg</b> 12 KM per ltr</li>
//                         <li><b>Transmission</b> Automatic</li>
//                         <li><b>Fuel Type</b> High Octane</li>
//                     </ul>
//                 </div>

//                 <h2 className="text-center text-green-600 mt-9 text-2xl">PKR 50,00,000</h2>

//                 <div className="ml-[45%] mt-8">

//                     <Link href="./form">
//                         <button className="bg-blue-800 text-white w-36 h-12 rounded-md hover:text-xl">Make Payment</button></Link>
//                 </div>

//             </div>
//         </div>
//     )
// }


import Link from "next/link";

export default function Toyota() {
    return (
        <div className="bg-gray-200 w-full min-h-screen py-10">

            {/* Title */}
            <div className="text-center font-bold text-2xl font-sans underline">
                <h1 className="m-8">Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs</h1>
            </div>

            {/* Car Image */}
            <div className="flex justify-center">
                <img src="/01.webp" alt="Toyota Corolla 2024" className="w-80 h-auto rounded-lg shadow-md" />
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center text-center text-sm text-blue-950">
                {[
                    "Book a Test Drive",
                    "Request Bank Finance",
                    "Visit Place",
                    "Car Inspection"
                ].map((text, index) => (
                    <button key={index} className="border-2 border-blue-800 px-5 py-3 rounded-md hover:text-white hover:bg-blue-950 transition">
                        {text}
                    </button>
                ))}
            </div>

            {/* Vehicle Description */}
            <h2 className="mt-10 text-center text-2xl font-medium">Vehicle Description</h2>
            <p className="mx-auto max-w-3xl mt-4 text-gray-800 leading-relaxed px-6 text-lg">
                The <b>Toyota Corolla</b> isn't here to wow or excite. Instead, it offers a safe, predictable ride no matter how far the trip is. Performance isn't at the forefront of the Corolla's intentions (except for the GR Corolla, reviewed separately), and its most powerful engine packs a stable of 169—lethargic—horses. When compared to the Honda Civic or Mazda 3, the Corolla feels much like a tortoise between two hares. The Corolla is available as either a four-door sedan or five-door hatchback. The former is even available with an incredibly fuel-efficient hybrid powertrain.
            </p>

            {/* Car Features */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-900 text-lg px-10">
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
                    <div key={index} className="p-2 bg-white shadow-md rounded-md text-center">
                        <b>{key}:</b> {value}
                    </div>
                ))}
            </div>

            {/* Price */}
            <h2 className="text-center text-green-600 mt-9 text-3xl font-bold">PKR 50,00,000</h2>

            {/* Payment Button */}
            <div className="flex justify-center mt-8">
                <Link href="/form">
                    <button className="bg-blue-800 text-white px-6 py-3 rounded-md text-lg hover:text-xl transition">
                        Make Payment
                    </button>
                </Link>
            </div>

        </div>
    );
}
