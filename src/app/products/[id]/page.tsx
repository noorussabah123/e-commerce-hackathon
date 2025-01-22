
import { client } from "@/sanity/lib/client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

// Sanity ke liye image URL banane ka function
const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

interface ProductDetailsProps {
  product: {
    name: string;
    price: number;
    description: string;
    category: string;
    discountPercent: number;
    colors: string[];
    sizes: string[];
    image: string;
  };
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await client.fetch(`*[_type == "products" && _id == $id][0]`, {
    id: params.id,
  });

  if (!product) {
    return <p>Product not found</p>;
  }

  const discountedPrice = product.price - (product.price * product.discountPercent) / 100;

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-4 text-gray-500">
        <a href="/" className="hover:underline">Home</a> &gt;{" "}
        <a href="/shop" className="hover:underline">Shop</a> &gt;{" "}
        <a href={`/shop/${product.category.toLowerCase()}`} className="hover:underline">
          {product.category}
        </a>{" "}
        &gt; <span className="text-black font-semibold">{product.name}</span>
      </nav>

      {/* Product Section */}
      <Card className="shadow-lg border rounded-lg overflow-hidden lg:flex">
        {/* Image Section */}
        <div className="relative lg:w-1/2 h-100">
          <Image
            src={urlFor(product.image).url()} // Sanity image URL
            alt={product.name}
            className="object-cover w-full h-auto"
            layout="fill"
          />
        </div>

        {/* Product Info Section */}
        <CardContent className="p-6 lg:w-1/2">
          <CardTitle className="text-3xl font-bold text-gray-800">{product.name}</CardTitle>
          <p className="text-yellow-500 text-lg mt-2">⭐⭐⭐⭐☆ 4.5/5</p>

          <div className="flex items-center gap-4 mt-4">
            <p className="text-2xl font-semibold">${discountedPrice.toFixed(2)}</p>
            <p className="text-gray-400 line-through">${product.price.toFixed(2)}</p>
            <p className="text-red-600 font-bold">-{product.discountPercent}%</p>
          </div>

          <p className="text-gray-700 mt-4">{product.description}</p>

          {/* Colors */}
          <div className="mt-6">
            <span className="font-semibold">Select Colors:</span>
            <div className="flex gap-2 mt-2">
              {product.colors.map((color:string, index:number) => (
                <button
                  key={index}
                  className={`w-8 h-8 rounded-full`}
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mt-6">
            <span className="font-semibold">Choose Size:</span>
            <div className="flex gap-4 mt-2">
              {product.sizes.map((size:string, index:string) => (
                <button
                  key={index}
                  className="px-4 py-2 border bg-transparent border-black text-black hover:bg-black hover:text-white rounded-md"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center border rounded-md">
              <button className="px-4 py-2">-</button>
              <span className="px-4 py-2 border-l border-r">1</span>
              <button className="px-4 py-2">+</button>
            </div>
            <Button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <div className="mt-8 border-t">
        <div className="flex gap-4 mt-4">
          <button className="px-4 py-2 hover:border-b-2 hover:border-black">
            Product Details
          </button>
          <button className="px-4 py-2 hover:border-b-2 hover:border-black">
            Rating & Reviews
          </button>
          <button className="px-4 py-2 hover:border-b-2 hover:border-black">FAQs</button>
        </div>
        <div className="mt-4">
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}










































// import { client } from "@/sanity/lib/client";
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import imageUrlBuilder from "@sanity/image-url";

// // Sanity ke liye image URL banane ka function
// const builder = imageUrlBuilder(client);

// function urlFor(source: any) {
//   return builder.image(source);
// }

// interface ProductDetailsProps {
//   product: {
//     name: string;
//     price: number;
//     description: string;
//     category: string;
//     discountPercent: number;
//     colors: string;
//     sizes: string;
//     image: string;
//   };
// }

// export default async function ProductPage({ params }: { params: { id: string } }) {
//   const product = await client.fetch(`*[_type == "products" && _id == $id][0]`, {
//     id: params.id,
//   });

//   if (!product) {
//     return <p>Product not found</p>;
//   }

//   const discountedPrice = product.price - (product.price * product.discountPercent) / 100;

//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       <Card className="shadow-lg border rounded-lg overflow-hidden">
//         <CardHeader className="relative h-72">
//           <Image
//             src={urlFor(product.image).url()} // Sanity image URL
//             alt={product.name}
//             className="object-cover"
//             layout="fill"
//           />
//         </CardHeader>

//         <CardContent className="p-6">
//           <CardTitle className="text-xl font-semibold text-gray-800">{product.name}</CardTitle>
//           <CardDescription className="text-sm text-gray-600 mt-2">
//             {product.description}
//           </CardDescription>

//           <div className="mt-4">
//             <p className="text-sm font-medium">
//               <span className="font-semibold">Category:</span> {product.category}
//             </p>
//             <p className="text-sm font-medium mt-2">
//               <span className="font-semibold">Colors:</span> {product.colors}
//             </p>
//             <p className="text-sm font-medium mt-2">
//               <span className="font-semibold">Sizes:</span> {product.sizes}
//             </p>
//           </div>

//           <div className="mt-4">
//             <p className="text-sm font-semibold text-gray-500 line-through">
//               ${product.price}
//             </p>
//             <p className="text-lg font-bold text-green-600">
//               ${discountedPrice.toFixed(2)}
//             </p>
//           </div>
//         </CardContent>

//         <CardFooter className="flex justify-between items-center p-4">
//           <Button variant="outline">Add to Cart</Button>
//           <Button className="bg-black text-white hover:bg-gray-800">
//             Buy Now
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }





















































// import { client } from "@/sanity/lib/client";
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import imageUrlBuilder from "@sanity/image-url"; // Ye correct import hai

// // Sanity ke liye image URL banane ka function
// const builder = imageUrlBuilder(client);

// function urlFor(source: any) {
//   return builder.image(source);
// }

// interface ProductDetailsProps {
//   product: {
//     name: string;
//     price: number;
//     description: string;
//     category: string;
//     discountPercent: number;
//     colors: string;
//     sizes: string;
//     image: string;
//   };
// }

// export default async function ProductPage({ params }: { params: { id: string } }) {
//   const product = await client.fetch(`*[_type == "products" && _id == $id][0]`, {
//     id: params.id,
//   });

//   if (!product) {
//     return <p>Product not found</p>;
//   }

//   const discountedPrice = product.price - (product.price * product.discountPercent) / 100;

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <Card className="shadow-md border rounded-lg">
//         <CardHeader className="relative">
//           <Image
//             src={urlFor(product.image).url()} // Sanity image URL
//             alt={product.name}
//             className="w-full h-64 object-cover rounded-t-lg"
//             width={500}
//             height={300}
//           />
//         </CardHeader>

//         <CardContent className="p-4">
//           <CardTitle className="text-2xl font-semibold">{product.name}</CardTitle>
//           <CardDescription className="text-sm text-gray-600 mt-2">
//             {product.description}
//           </CardDescription>

//           <div className="mt-4">
//             <p className="text-sm font-medium">
//               <span className="font-semibold">Category:</span> {product.category}
//             </p>
//             <p className="text-sm font-medium mt-2">
//               <span className="font-semibold">Colors:</span> {product.colors}
//             </p>
//             <p className="text-sm font-medium mt-2">
//               <span className="font-semibold">Sizes:</span> {product.sizes}
//             </p>
//           </div>

//           <div className="mt-4">
//             <p className="text-sm font-semibold text-gray-500 line-through">
//               ${product.price}
//             </p>
//             <p className="text-lg font-bold text-green-600">
//               ${discountedPrice.toFixed(2)}
//             </p>
//           </div>
//         </CardContent>

//         <CardFooter className="flex justify-between items-center px-4 py-2">
//           <Button variant="outline">Add to Cart</Button>
//           <Button className="bg-black text-white hover:bg-transparent hover:text-black">
//             Buy Now
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }














































// import { client } from "@/sanity/lib/client";
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";



// const builder = imageUrlBuilder(client);

// function urlFor(source: any) {
//   return builder.image(source);
// }

// interface ProductDetailsProps {
//   product: {
//     name: string;
//     price: number;
//     description: string;
//     category: string;
//     discountPercent: number;
//     colors: string;
//     sizes: string;
//     image: string;
//   };
// }

// export default async function ProductPage({ params }: { params: { id: string } }) {
//   const product = await client.fetch(`*[_type == "products" && _id == $id][0]`, {
//     id: params.id,
//   });

//   if (!product) {
//     return <p>Product not found</p>;
//   }

//   const discountedPrice = product.price - (product.price * product.discountPercent) / 100;

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <Card className="shadow-md border rounded-lg">
//         <CardHeader className="relative">
//           <Image
//             src={product.image}
//             alt={product.name}
//             className="w-full h-64 object-cover rounded-t-lg"
//           />
//         </CardHeader>

//         <CardContent className="p-4">
//           <CardTitle className="text-2xl font-semibold">{product.name}</CardTitle>
//           <CardDescription className="text-sm text-gray-600 mt-2">
//             {product.description}
//           </CardDescription>

//           <div className="mt-4">
//             <p className="text-sm font-medium">
//               <span className="font-semibold">Category:</span> {product.category}
//             </p>
//             <p className="text-sm font-medium mt-2">
//               <span className="font-semibold">Colors:</span> {product.colors}
//             </p>
//             <p className="text-sm font-medium mt-2">
//               <span className="font-semibold">Sizes:</span> {product.sizes}
//             </p>
//           </div>

//           <div className="mt-4">
//             <p className="text-sm font-semibold text-gray-500 line-through">
//               ${product.price}
//             </p>
//             <p className="text-lg font-bold text-green-600">
//               ${discountedPrice.toFixed(2)}
//             </p>
//           </div>
//         </CardContent>

//         <CardFooter className="flex justify-between items-center px-4 py-2">
//           <Button variant="outline">Add to Cart</Button>
//           <Button className="bg-black text-white hover:bg-transparent hover:text-black">
//             Buy Now
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }
// function imageUrlBuilder(client: SanityClient) {
//   throw new Error("Function not implemented.");
// }

