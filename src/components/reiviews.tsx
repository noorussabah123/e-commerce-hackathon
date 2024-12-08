import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

// Sample data for customer reviews
const reviews = [
  {
    image: "/review1.png"
  },
  {
    image: "/review2.png"
  },
  {
    image: "/review3.png"
  },
];

const ReviewList = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-[100px] pb-[40px] sm:pb-[60px] lg:pb-[90px]">
        {reviews.map((review, index) => (
          <Card key={index} className="w-full max-w-sm bg-white shadow-lg rounded-lg">
            {/* Card with Image */}
            <div className="p-4">
              <Image
                src={review.image}
                alt={`Reviewer ${index + 1}`}
                width={200}
                height={200}
                className="object-cover w-full h-48 rounded-lg"
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;



























































// import React from "react";
// import { Card } from "@/components/ui/card";
// import Image from "next/image";

// // Sample data for customer reviews
// const reviews = [
//   {
//     image: "/review1.png" 
//   },
//   {
//     image: "/review2.png" 
//   },
//   {
//    image: "/review3.png"
//   },
// ];

// const ReviewList = () => {
//   return (
//     <div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pl-[100px] pb-[90px]">
//         {reviews.map((review, index) => (
//           <Card key={index} className="w-full max-w-sm bg-white shadow-lg rounded-lg">
//             {/* Card with Image */}
//             <div className="p-4">
//               <Image
//                 src={review.image}
//                 alt={`Reviewer ${index + 1}`}
//                 width={200}
//                 height={200}
//                 className="object-cover w-full h-48 rounded-lg"
//               />
//             </div>
           
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ReviewList;
