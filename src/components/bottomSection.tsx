import Image from "next/image"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import Link from "next/link";

const products = [
    { image: "/product1.png", name: "T-Shirt with Tape Details", price: "$120" },
    { image: "/product2.png", name: "Skinny Fit Jeans", price: "$240" },
    { image: "/product3.png", name: "Checkered Shirt", price: "$180" },
    { image: "/product4.png", name: "Sleeve Striped T-Shirt", price: "$130" },
];

const products2 = [
    { image2: "/product5.png", name2: "T-Shirt with Tape Details", price2: "$120" },
    { image2: "/product6.png", name2: "Skinny Fit Jeans", price2: "$240" },
    { image2: "/product7.png", name2: "Checkered Shirt", price2: "$180" },
    { image2: "/product8.png", name2: "Sleeve Striped T-Shirt", price2: "$130" },
];

export default function BottomSection() {
    return (
        <>
            {/* Vector Images Section */}
            <div className="w-full h-[122px] bg-black px-[20px] sm:px-[50px] md:px-[100px] py-[44px] flex justify-between items-center gap-[20px] sm:gap-[50px] md:gap-[106px]">
                <Image src={"/logo1.png"} alt="picture 1" width={166.48} height={33.16} />
                <Image src={"/logo2.png"} alt="picture2" width={166.48} height={33.16} />
                <Image src={"/logo3.png"} alt="picture3" width={166.48} height={33.16} />
                <Image src={"/logo4.png"} alt="picture4" width={166.48} height={33.16} />
            </div>

            {/* New Arrivals Section */}
            <div className="text-center pt-[72px]">
                <h1 className="text-[32px] sm:text-[48px] font-bold text-black mb-[55px]">NEW ARRIVALS</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-[20px] sm:px-[50px] lg:px-[100px] pt-[55px]">
                    {products.map((product, index) => (
                        <Card key={index} className="w-full max-w-sm bg-white shadow-lg">
                            <CardHeader className="p-0">
                                <Image 
                                    src={product.image} 
                                    alt={product.name} 
                                    width={300} 
                                    height={200} 
                                    className="object-cover w-full h-48 rounded-t-md" 
                                />
                            </CardHeader>
                            <CardContent className="p-4">
                                <CardTitle className="text-[18px] sm:text-[20px] font-bold text-black">{product.name}</CardTitle>
                                <Image src={"/star1.png"} alt="star1" width={150} height={19} className="py-[8px]" />
                                <CardDescription className="text-[20px] sm:text-[24px] font-bold text-black">{product.price}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* View All Link */}
            <div className="flex items-center justify-center pt-[36px] pb-[128px] text-[16px] bg-transparent">
                <Link href={"#!"}>View All</Link>
            </div>

            {/* Top Selling Section */}
            <div className="text-center pt-[72px]">
                <h1 className="text-[32px] sm:text-[48px] font-bold text-black mb-[55px]">TOP SELLING</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-[20px] sm:px-[50px] lg:px-[100px] pt-[55px]">
                    {products2.map((product, index) => (
                        <Card key={index} className="w-full max-w-sm bg-white shadow-lg">
                            <CardHeader className="p-0">
                                <Image 
                                    src={product.image2} 
                                    alt={product.name2} 
                                    width={300} 
                                    height={200} 
                                    className="object-cover w-full h-48 rounded-t-md" 
                                />
                            </CardHeader>
                            <CardContent className="p-4">
                                <CardTitle className="text-[18px] sm:text-[20px] font-bold text-black">{product.name2}</CardTitle>
                                <Image src={"/star1.png"} alt="star1" width={150} height={19} className="py-[8px]" />
                                <CardDescription className="text-[20px] sm:text-[24px] font-bold text-black">{product.price2}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* View All Link for Top Selling */}
            <div className="flex items-center justify-center pt-[36px] pb-[128px] text-[16px] bg-transparent">
                <Link href={"#!"}>View All</Link>
            </div>

            {/* Browse by Dress Style Section */}
            <div className="w-full bg-gray-200 px-[20px] sm:px-[50px] md:px-[64px] pb-[80px] rounded-[40px]">
                <h1 className="text-[32px] sm:text-[48px] font-bold text-black text-center pt-[70px]">BROWSE BY DRESS STYLE</h1>
                <div className="flex flex-col sm:flex-row justify-center items-center py-[64px]">
                    <Image src={"/frame1.png"} alt="frame1" width={407} height={289} className="mb-4 sm:mb-0 sm:mr-4" />
                    <Image src={"/frame2.png"} alt="frame2" width={684} height={289} />
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center pb-[76px]">
                    <Image src={"/frame3.png"} alt="frame3" width={684} height={289} className="mb-4 sm:mb-0 sm:mr-4" />
                    <Image src={"/frame4.png"} alt="frame4" width={407} height={289} />
                </div>
            </div>

            {/* Our Happy Customer Section */}
            <div className="flex items-center justify-between">
                <h1 className="text-[32px] sm:text-[46px] font-bold pt-[80px] pl-[20px] sm:pl-[50px]">OUR HAPPY CUSTOMER</h1>
            </div>
        </>
    );
}
















































































// import Image from "next/image"
// import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
// import { Button } from "./ui/button";
// import Link from "next/link";

// const products = [
//     { image: "/product1.png", name: "T-Shirt with Tape Details", price: "$120" },
//     { image: "/product2.png", name: "Skinny Fit Jeans", price: "$240" },
//     { image: "/product3.png", name: "Checkered Shirt", price: "$180" },
//     { image: "/product4.png", name: "Sleeve Striped T-Shirt", price: "$130" },
    
//   ];

//   const products2 = [
//     { image2: "/product5.png", name2: "T-Shirt with Tape Details", price2: "$120" },
//     { image2: "/product6.png", name2: "Skinny Fit Jeans", price2: "$240" },
//     { image2: "/product7.png", name2: "Checkered Shirt", price2: "$180" },
//     { image2: "/product8.png", name2: "Sleeve Striped T-Shirt", price2: "$130" },
    
//   ];

// export default function BottomSection() {
//     return(
//         <>
//          <div className="w-full h-[122px] bg-black px-[100px] py-[44px] flex justify-between items-center gap-[106px]">
//              <Image src={"/vector.png"} alt="picture 1" width={166.48} height={33.16}></Image>
//              <Image src={"/vector1.png"} alt="picture2" width={166.48} height={33.16}></Image>
//              <Image src={"/vector2.png"} alt="picture3" width={166.48} height={33.16}></Image>
//              <Image src={"/vector3.png"} alt="picture4" width={166.48} height={33.16}></Image>
             
//          </div>

//          <div className="flex justify-center items-center">
//             <div>
//             <h1 className="text-[48px] font-bold text-black ml-[390px] pt-[72px]  mb-[55px]">NEW ARRIVALS</h1>
          
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-[55px]">
//             {products.map((product, index) => (
//           <Card key={index} className="w-full max-w-sm bg-white shadow-lg">
//             <CardHeader className="p-0">
//               <Image 
//                 src={product.image} 
//                 alt={product.name} 
//                 width={300} 
//                 height={200} 
//                 className="object-cover w-full h-48 rounded-t-md" 
//               />
//             </CardHeader>
//             <CardContent className="p-4">
//               <CardTitle className="text-[20px] font-bold text-black">{product.name}</CardTitle>
//               <Image src={"/star1.png"} alt="star1" width={150} height={19} className="py-[8px]"></Image>
//               <CardDescription className="text-[24px] font-bold text-black">{product.price}</CardDescription>
//             </CardContent>
//           </Card>
//         ))}
//         </div>
//         </div>
//          </div>

//          <div className="flex items-center justify-center pt-[36px] pb-[128px] text-[16px] bg-transparent">
//            <Link href={"#!"}>View All</Link>
//          </div>

//          <div className="flex justify-center items-center">
//             <div>
//             <h1 className="text-[48px] font-bold text-black ml-[390px] pt-[72px]  mb-[55px]">TOP SELLING</h1>
          
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-[55px]">
//             {products2.map((product, index) => (
//           <Card key={index} className="w-full max-w-sm bg-white shadow-lg">
//             <CardHeader className="p-0">
//               <Image 
//                 src={product.image2} 
//                 alt={product.name2} 
//                 width={300} 
//                 height={200} 
//                 className="object-cover w-full h-48 rounded-t-md" 
//               />
//             </CardHeader>
//             <CardContent className="p-4">
//               <CardTitle className="text-[20px] font-bold text-black">{product.name2}</CardTitle>
//               <Image src={"/star1.png"} alt="star1" width={150} height={19} className="py-[8px]"></Image>
//               <CardDescription className="text-[24px] font-bold text-black">{product.price2}</CardDescription>
//             </CardContent>
//           </Card>
//         ))}
//         </div>
//         </div>
//          </div>

//          <div className="flex items-center justify-center pt-[36px] pb-[128px] text-[16px] bg-transparent">
//            <Link href={"#!"}>View All</Link>
//          </div>

//          <div className="w-[1239px] bg-gray-200 ml-[60px] pb-[80px] rounded-[40px]">
//              <h1 className="text-[48px] font-bold text-black flex items-center justify-center pt-[70px]">
//               BROWSE BY DRESS STYLE
//              </h1>
              
//               <div className="flex items-center justify-between px-[64px] py-[64px]">
//              <Image src={"/frame1.png"} alt="frame1" width={407} height={289}></Image>
//              <Image src={"/frame2.png"} alt="frame2" width={684} height={289}></Image>
//              </div>

//              <div className="flex items-center justify-between pb-[76px] px-[64px]">
//              <Image src={"/frame3.png"} alt="frame3" width={684} height={289}></Image>
//              <Image src={"/frame4.png"} alt="frame4" width={407} height={289}></Image>
//              </div>
//          </div>

//          <div className="flex items-center justify-between">
//             <h1 className="text-[46px] font-bold pt-[80px] pl-[100px]">OUR HAPPY CUSTOMER</h1>
//          </div>
//         </>
//     )
// }

