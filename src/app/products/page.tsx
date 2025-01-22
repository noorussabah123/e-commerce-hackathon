import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { client } from "@/sanity/lib/client";
import Link from "next/link"; 
import Image from "next/image";

// Interface for the product data
interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  discountPercent: number;
  colors: string[]; // Assuming colors is an array of strings
  sizes: string[];  // Assuming sizes is an array of strings
  image: string;    // URL string for the image
}

export default async function ProductDetails() {
  const res: Product[] = await client.fetch(`*[_type == "products"]{
    _id,
    name,
    price,
    description,
    category,
    discountPercent,
    colors,
    sizes,
    "image": image.asset->url,
  }`);

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {res.map((card: Product, index: number) => {
        const discountedPrice = card.price - (card.price * card.discountPercent) / 100;

        return (
          <Card className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 shadow-md border rounded-lg" key={index}>
            <CardHeader className="relative">
              <Image
                src={card.image}
                alt={card.name}
                width={300}
                height={200}
                className="object-cover rounded-t-lg"
              />
            </CardHeader>

            <CardContent className="p-4">
              <CardTitle className="text-lg font-semibold">{card.name}</CardTitle>
              <CardDescription className="text-sm text-gray-600 mt-2">
                {card.description}
              </CardDescription>

              <div className="mt-4">
                <p className="text-sm font-medium">
                  <span className="font-semibold">Category:</span> {card.category}
                </p>
                <p className="text-sm font-medium mt-2">
                  <span className="font-semibold">Colors:</span> {card.colors}
                </p>
                <p className="text-sm font-medium mt-2">
                  <span className="font-semibold">Sizes:</span> {card.sizes}
                </p>
              </div>

              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-500 line-through">
                  ${card.price}
                </p>
                <p className="text-lg font-bold text-green-600">
                  ${discountedPrice.toFixed(2)}
                </p>
              </div>
            </CardContent>

            <CardFooter className="flex justify-between items-center px-4 py-2">
              <Button variant="outline">Add to Cart</Button>
              <Button className="bg-black text-white hover:bg-transparent hover:text-black">
                Buy Now
              </Button>
              <Link href={`/products/${card._id}`}>
                <Button className="bg-blue-500 text-white">View Details</Button>
              </Link>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}










































// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { client } from "@/sanity/lib/client";
// import Link from "next/link"; 
// import Image from "next/image";

// export default async function ProductDetails() {
//   const res = await client.fetch(`*[_type == "products"]{
//     _id,
//     name,
//     price,
//     description,
//     category,
//     discountPercent,
//     colors,
//     sizes,
//     "image": image.asset->url,
//   }`);

//   return (
//     <div className="flex flex-wrap justify-center gap-6 p-4">
//       {res.map((card: any, index: number) => {
//         const discountedPrice = card.price - (card.price * card.discountPercent) / 100;

//         return (
//           <Card className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 shadow-md border rounded-lg" key={index}>
//             <CardHeader className="relative">
//               <Image
//                 src={card.image}
//                 alt={card.name}
//                 width={300}  // Image width set to 300px
//                 height={200} // Image height set to 200px
//                 className="object-cover rounded-t-lg"
//               />
//             </CardHeader>

//             <CardContent className="p-4">
//               <CardTitle className="text-lg font-semibold">{card.name}</CardTitle>
//               <CardDescription className="text-sm text-gray-600 mt-2">
//                 {card.description}
//               </CardDescription>

//               <div className="mt-4">
//                 <p className="text-sm font-medium">
//                   <span className="font-semibold">Category:</span> {card.category}
//                 </p>
//                 <p className="text-sm font-medium mt-2">
//                   <span className="font-semibold">Colors:</span> {card.colors}
//                 </p>
//                 <p className="text-sm font-medium mt-2">
//                   <span className="font-semibold">Sizes:</span> {card.sizes}
//                 </p>
//               </div>

//               <div className="mt-4">
//                 <p className="text-sm font-semibold text-gray-500 line-through">
//                   ${card.price}
//                 </p>
//                 <p className="text-lg font-bold text-green-600">
//                   ${discountedPrice.toFixed(2)}
//                 </p>
//               </div>
//             </CardContent>

//             <CardFooter className="flex justify-between items-center px-4 py-2">
//               <Button variant="outline">Add to Cart</Button>
//               <Button className="bg-black text-white hover:bg-transparent hover:text-black">
//                 Buy Now
//               </Button>
//               {/* Link to Product Detail Page */}
//               <Link href={`/products/${card._id}`}>
//                 <Button className="bg-blue-500 text-white">View Details</Button>
//               </Link>
//             </CardFooter>
//           </Card>
//         );
//       })}
//     </div>
//   );
// }







































// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { client } from "@/sanity/lib/client";
// import Link from "next/link"; 
// import Image from "next/image";

// export default async function ProductDetails() {
//   const res = await client.fetch(`*[_type == "products"]{
//     _id,
//     name,
//     price,
//     description,
//     category,
//     discountPercent,
//     colors,
//     sizes,
//     "image": image.asset->url,
//   }`);

//   return (
//     <div className="flex flex-wrap justify-center gap-6 p-4">
//       {res.map((card: any, index: number) => {
//         const discountedPrice = card.price - (card.price * card.discountPercent) / 100;

//         return (
//           <Card className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 shadow-md border rounded-lg" key={index}>
//             <CardHeader className="relative">
//               <Image
//                 src={card.image}
//                 alt={card.name}
//                 className="w-full h-64 object-cover rounded-t-lg"
                
//               />
//             </CardHeader>

//             <CardContent className="p-4">
//               <CardTitle className="text-lg font-semibold">{card.name}</CardTitle>
//               <CardDescription className="text-sm text-gray-600 mt-2">
//                 {card.description}
//               </CardDescription>

//               <div className="mt-4">
//                 <p className="text-sm font-medium">
//                   <span className="font-semibold">Category:</span> {card.category}
//                 </p>
//                 <p className="text-sm font-medium mt-2">
//                   <span className="font-semibold">Colors:</span> {card.colors}
//                 </p>
//                 <p className="text-sm font-medium mt-2">
//                   <span className="font-semibold">Sizes:</span> {card.sizes}
//                 </p>
//               </div>

//               <div className="mt-4">
//                 <p className="text-sm font-semibold text-gray-500 line-through">
//                   ${card.price}
//                 </p>
//                 <p className="text-lg font-bold text-green-600">
//                   ${discountedPrice.toFixed(2)}
//                 </p>
//               </div>
//             </CardContent>

//             <CardFooter className="flex justify-between items-center px-4 py-2">
//               <Button variant="outline">Add to Cart</Button>
//               <Button className="bg-black text-white hover:bg-transparent hover:text-black">
//                 Buy Now
//               </Button>
//               {/* Link to Product Detail Page */}
//               <Link href={`/products/${card._id}`}>
//                 <Button className="bg-blue-500 text-white">View Details</Button>
//               </Link>
//             </CardFooter>
//           </Card>
//         );
//       })}
//     </div>
//   );
// }






































