// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// const FeaturedNewCar = () => {
//   return (
//     <div className="box-border bg-gray-100 w-full h-auto p-6">
      
//       {/* Title & View All */}
//       <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-12">
//         <h1 className="text-xl md:text-2xl font-bold text-gray-700 text-center md:text-left">
//           Featured New Cars
//         </h1>
//         <Link className="text-blue-500 text-sm md:text-lg mt-2 md:mt-0" href="#" target="_blank">
//           View All New Cars
//         </Link>
//       </div>

//       {/* Categories */}
//       <div className="flex justify-center md:justify-start gap-4 mt-6">
//         <Link className="px-4 py-2 text-gray-800 hover:bg-blue-800 hover:text-white rounded-md transition text-lg font-semibold" href="#" target="_blank">
//           Popular
//         </Link>
//         <Link className="px-4 py-2 text-gray-800 hover:bg-blue-800 hover:text-white rounded-md transition text-lg font-semibold" href="#" target="_blank">
//           Upcoming
//         </Link>
//         <Link className="px-4 py-2 text-gray-800 hover:bg-blue-800 hover:text-white rounded-md transition text-lg font-semibold" href="#" target="_blank">
//           Newly Launched
//         </Link>
//       </div>

//       {/* Divider */}
//       <div className="border-t-2 mx-auto w-[90%] mt-4"></div>

//       {/* Car Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 px-4 md:px-8">
        
//         {/* Car Card */}
//         {[
//           { name: "Toyota Corolla", price: "PKR 59.7 - 75.5 lacs", Image: "/corolla 1.jpg", reviews: 622, link: "toyota" },
//           { name: "Suzuki Alto", price: "PKR 23.3 - 30.5 lacs", Image: "/alto 2.png", reviews: 622, link: "alto" },
//           { name: "Honda City", price: "PKR 46.5 - 58.5 lacs", Image: "/city 3.jpg", reviews: 456, link: "city" },
//           { name: "Honda Civic", price: "PKR 86.6 - 99.0 lacs", Image: "/Civic 4.jpg", reviews: 359, link: "civic" }
//         ].map((car, index) => (
//           <div key={index} className="border-2 w-full sm:w-[300px] h-auto bg-white rounded-lg shadow-md hover:shadow-lg transition p-4">
//             <Image className="rounded-md w-full h-[150px] object-cover" src={car.Image} alt={car.name} 
//             width={150}
//             height={80}/>
//             <div className="text-center mt-3">
//               <Link className="text-blue-900 font-bold text-xl hover:text-blue-600" href={car.link}>
//                 {car.name}
//               </Link>
//               <p className="text-green-500 text-base mt-1">{car.price}</p>
//               <div className="flex justify-center items-center gap-1 mt-3">
//                 <Image src="/stars.jpg" alt="Reviews" width={70} height={15} />
//                 <p className="text-gray-500 text-sm md:text-base">{car.reviews} Reviews</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// };

// export default FeaturedNewCar;



// -----------------------------------------------------------  WITH RESPONSIVENESS -----------------------------------------------------------  

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeaturedNewCar = () => {
  return (
    <div className="box-border bg-gray-100 w-full h-auto p-4 sm:p-6 overflow-x-hidden">
      
      {/* Title & View All */}
      <div className="flex flex-col md:flex-row justify-between items-center px-2 sm:px-4 md:px-12 gap-2">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 text-center md:text-left">
          Featured New Cars
        </h1>
        <Link
          className="text-blue-500 text-xs sm:text-sm md:text-lg mt-1 md:mt-0 hover:underline"
          href="#"
          target="_blank"
        >
          View All New Cars
        </Link>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-4 mt-6">
        <Link className="px-3 sm:px-4 py-2 text-gray-800 hover:bg-blue-800 hover:text-white rounded-md transition text-sm sm:text-lg font-semibold" href="#" target="_blank">
          Popular
        </Link>
        <Link className="px-3 sm:px-4 py-2 text-gray-800 hover:bg-blue-800 hover:text-white rounded-md transition text-sm sm:text-lg font-semibold" href="#" target="_blank">
          Upcoming
        </Link>
        <Link className="px-3 sm:px-4 py-2 text-gray-800 hover:bg-blue-800 hover:text-white rounded-md transition text-sm sm:text-lg font-semibold" href="#" target="_blank">
          Newly Launched
        </Link>
      </div>

      {/* Divider */}
      <div className="border-t-2 mx-auto w-[95%] sm:w-[90%] mt-4"></div>

      {/* Car Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 px-2 sm:px-4 md:px-8">
        
        {/* Car Card */}
        {[
          { name: "Toyota Corolla", price: "PKR 59.7 - 75.5 lacs", Image: "/corolla 1.jpg", reviews: 622, link: "toyota" },
          { name: "Suzuki Alto", price: "PKR 23.3 - 30.5 lacs", Image: "/alto 2.png", reviews: 622, link: "alto" },
          { name: "Honda City", price: "PKR 46.5 - 58.5 lacs", Image: "/city 3.jpg", reviews: 456, link: "city" },
          { name: "Honda Civic", price: "PKR 86.6 - 99.0 lacs", Image: "/Civic 4.jpg", reviews: 359, link: "civic" }
        ].map((car, index) => (
          <div
            key={index}
            className="border-2 w-full max-w-[340px] h-auto bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 mx-auto"
          >
            <Image
              className="rounded-md w-full h-[150px] object-cover"
              src={car.Image}
              alt={car.name}
              width={340}
              height={150}
            />
            <div className="text-center mt-3">
              <Link
                className="text-blue-900 font-bold text-lg sm:text-xl hover:text-blue-600"
                href={car.link}
              >
                {car.name}
              </Link>
              <p className="text-green-500 text-sm sm:text-base mt-1">{car.price}</p>
              <div className="flex justify-center items-center gap-1 mt-3">
                <Image src="/stars.jpg" alt="Reviews" width={70} height={15} />
                <p className="text-gray-500 text-xs sm:text-sm md:text-base">{car.reviews} Reviews</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default FeaturedNewCar;
