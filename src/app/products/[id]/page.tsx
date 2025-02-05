import { client } from "@/sanity/lib/client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import Link from "next/link";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = await client.fetch(`*[_type == "products" && _id == $id][0]`, {
    id,
  });

  if (!product) {
    return <p>Product not found</p>;
  }

  const discountedPrice = product.price - (product.price * product.discountPercent) / 100;

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-4 text-gray-500">
        <Link href="/" className="hover:underline">Home</Link> &gt;{" "}
        <Link href="/shop" className="hover:underline">Shop</Link> &gt;{" "}
        <Link href={`/shop/${product.category.toLowerCase()}`} className="hover:underline">
          {product.category}
        </Link>{" "}
        &gt; <span className="text-black font-semibold">{product.name}</span>
      </nav>

      {/* Product Section */}
      <Card className="shadow-lg border rounded-lg overflow-hidden lg:flex">
        {/* Image Section */}
        <div className="relative lg:w-1/2 h-100">
          <Image
            src={urlFor(product.image)} // Sanity image URL
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
              {product.colors.map((color: string, index: number) => (
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
              {product.sizes.map((size: string, index: number) => (
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
    </div>
  );
}








































// import { client } from "@/sanity/lib/client";
// import { Card, CardContent, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link"; // Import Next.js Link component
// import imageUrlBuilder from "@sanity/image-url";

// // Sanity ke liye image URL banane ka function
// const builder = imageUrlBuilder(client);

// function urlFor(source: any) {
//   return builder.image(source);
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
//     <div className="max-w-5xl mx-auto p-4">
//       {/* Breadcrumbs */}
//       <nav className="text-sm mb-4 text-gray-500">
//         <Link href="/" className="hover:underline">Home</Link> &gt;{" "}
//         <Link href="/shop" className="hover:underline">Shop</Link> &gt;{" "}
//         <Link href={`/shop/${product.category.toLowerCase()}`} className="hover:underline">
//           {product.category}
//         </Link>{" "}
//         &gt; <span className="text-black font-semibold">{product.name}</span>
//       </nav>

//       {/* Product Section */}
//       <Card className="shadow-lg border rounded-lg overflow-hidden lg:flex">
//         {/* Image Section */}
//         <div className="relative lg:w-1/2 h-100">
//           <Image
//             src={urlFor(product.image).url()} // Sanity image URL
//             alt={product.name}
//             className="object-cover w-full h-auto"
//             layout="fill"
//           />
//         </div>

//         {/* Product Info Section */}
//         <CardContent className="p-6 lg:w-1/2">
//           <CardTitle className="text-3xl font-bold text-gray-800">{product.name}</CardTitle>
//           <p className="text-yellow-500 text-lg mt-2">⭐⭐⭐⭐☆ 4.5/5</p>

//           <div className="flex items-center gap-4 mt-4">
//             <p className="text-2xl font-semibold">${discountedPrice.toFixed(2)}</p>
//             <p className="text-gray-400 line-through">${product.price.toFixed(2)}</p>
//             <p className="text-red-600 font-bold">-{product.discountPercent}%</p>
//           </div>

//           <p className="text-gray-700 mt-4">{product.description}</p>

//           {/* Colors */}
//           <div className="mt-6">
//             <span className="font-semibold">Select Colors:</span>
//             <div className="flex gap-2 mt-2">
//               {product.colors.map((color: string, index: number) => (
//                 <button
//                   key={index}
//                   className={`w-8 h-8 rounded-full`}
//                   style={{ backgroundColor: color }}
//                 ></button>
//               ))}
//             </div>
//           </div>

//           {/* Sizes */}
//           <div className="mt-6">
//             <span className="font-semibold">Choose Size:</span>
//             <div className="flex gap-4 mt-2">
//               {product.sizes.map((size: string, index: number) => (
//                 <button
//                   key={index}
//                   className="px-4 py-2 border bg-transparent border-black text-black hover:bg-black hover:text-white rounded-md"
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Quantity and Add to Cart */}
//           <div className="mt-6 flex items-center gap-4">
//             <div className="flex items-center border rounded-md">
//               <button className="px-4 py-2">-</button>
//               <span className="px-4 py-2 border-l border-r">1</span>
//               <button className="px-4 py-2">+</button>
//             </div>
//             <Button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
//               Add to Cart
//             </Button>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Tabs */}
//       <div className="mt-8 border-t">
//         <div className="flex gap-4 mt-4">
//           <button className="px-4 py-2 hover:border-b-2 hover:border-black">
//             Product Details
//           </button>
//           <button className="px-4 py-2 hover:border-b-2 hover:border-black">
//             Rating & Reviews
//           </button>
//           <button className="px-4 py-2 hover:border-b-2 hover:border-black">FAQs</button>
//         </div>
//         <div className="mt-4">
//           <p>{product.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
