import Image from "next/image";
import Link from "next/link";

export default function ProductDetails() {
  return (
    <div>
      {/* Breadcrumbs */}
      <nav className="text-sm ml-[50px] mb-4 text-gray-500">
        <Link href="/" className="hover:underline">Home</Link> &gt;{" "}
        <Link href="/shop" className="hover:underline">Shop</Link> &gt;{" "}
        <Link href="/shop/men" className="hover:underline">Men</Link> &gt;{" "}
        <span className="text-black font-semibold">Jeans</span>
      </nav>

      {/* Product Section */}
      <div className="flex flex-col ml-[50px] lg:flex-row gap-8">
        {/* Image Section */}
        <div className="flex flex-col">
          <Image
            src="/product2.png"
            alt="One Life Graphic T-Shirt"
            width={500}
            height={500}
            className="rounded-lg shadow-md"
          />
          <div className="flex gap-2 mt-4">
            <Image
              src="/product2.png"
              alt="Thumbnail 1"
              width={100}
              height={100}
              className="border rounded-lg cursor-pointer"
            />
            <Image
              src="/product2.png"
              alt="Thumbnail 2"
              width={100}
              height={100}
              className="border rounded-lg cursor-pointer"
            />
            <Image
              src="/product2.png"
              alt="Thumbnail 3"
              width={100}
              height={100}
              className="border rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Product Info Section */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">Skinny Fit Jeans</h1>
          <p className="text-yellow-500 text-lg">⭐⭐⭐⭐☆ 4.5/5</p>
          <div className="flex items-center gap-4 mt-4">
            <p className="text-2xl font-semibold">$240</p>
            <p className="text-gray-400 line-through">$300</p>
            <p className="text-red-600 font-bold">-40%</p>
          </div>
          <p className="text-gray-700 mt-4">
            This Skinny Fit Jeans is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
          </p>

          {/* Colors */}
          <div className="mt-6">
            <span className="font-semibold">Select Colors:</span>
            <div className="flex gap-2 mt-2">
              <button className="w-8 h-8 rounded-full bg-black"></button>
              <button className="w-8 h-8 rounded-full bg-gray-500"></button>
              <button className="w-8 h-8 rounded-full bg-blue-950"></button>
            </div>
          </div>

          {/* Sizes */}
          <div className="mt-6">
            <span className="font-semibold">Choose Size:</span>
            <div className="flex gap-4 mt-2">
              <button className="px-4 py-2 border bg-transparent border-black text-black hover:bg-black hover:text-white rounded-md">Small</button>
              <button className="px-4 py-2 border bg-transparent  border-black text-black hover:bg-black hover:text-white rounded-md">Medium</button>
              <button className="px-4 py-2 border bg-transparent  border-black text-black hover:bg-black hover:text-white rounded-md">Large</button>
              <button className="px-4 py-2 border bg-transparent  border-black text-black hover:bg-black hover:text-white rounded-md">X-Large</button>
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center border rounded-md">
              <button className="px-4 py-2">-</button>
              <span className="px-4 py-2 border-l border-r">1</span>
              <button className="px-4 py-2">+</button>
            </div>
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-8 border-t ml-[50px]">
        <div className="flex gap-4 mt-4">
          <button className="px-4 py-2 hover:border-b-2 hover:border-black">Product Details</button>
          <button className="px-4 py-2 hover:border-b-2 hover:border-black">Rating & Reviews</button>
          <button className="px-4 py-2 hover:border-b-2 hover:border-black">FAQs</button>
        </div>
        <div className="mt-4 mb-[50px]">
          <p>This Skinny Fit Jeans is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
        </div>
      </div>
    </div>
  );
}
