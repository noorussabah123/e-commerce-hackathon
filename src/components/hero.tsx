import React from "react"
import { interFont } from "./font"
import { Button } from "./ui/button"
import Image from "next/image"

export default function Hero() {
    return (
        <>
            <div className='w-full flex flex-col md:flex-row items-center justify-between pl-[20px] md:pl-[100px] pt-[50px] md:pt-[103px] bg-gray-100'>
                <div className="w-full md:w-[596px] pb-[30px] md:pb-[116px] text-center md:text-left">
                    <h1 className={`text-[30px] md:text-[40px] font-bold ${interFont.className}`}>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>

                    <h2 className='text-[12px] md:text-[13px] pt-4 pb-4'>
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </h2>
                    <div>
                        <Button className="px-[40px] md:px-[67px] py-[12px] md:py-[15px] rounded-[62px] text-4 text-white">Shop Now</Button>
                    </div>
                </div>

                <div className="w-full md:w-auto mb-[30px] md:mb-[50px] flex justify-center md:justify-start">
                    <Image src={"/banner.png"} alt="banner" width={1440} height={663} />
                </div>
            </div>
        </>
    )
}





















































// import React from "react"
// import { interFont } from "./font"
// import { Button } from "./ui/button"
// import Image from "next/image"

// export default function Hero() {
//     return(
//         <>
//          <div className='w-full flex items-center justify-between pl-[100px] pt-[103px] bg-gray-100'>
//            <div className="w-[596px] pb-[116px]">
//             <h1 className={`text-[40px] font-bold ${interFont.className}`}>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>

//             <h2 className='text-[13px] pt-8 pb-8'>
//               Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style
//               </h2>
//              <div>
//             <Button className=" px-[67px] py-[15px] rounded-[62px] text-4 text-white">Shop Now</Button>
//             </div>
            
//            </div>
           
//            <div className="mb-[50px]">
//             <Image src={"/banner.png"} alt="banner" width={1440} height={663} />
//             </div>
//          </div>
//         </>
//     )
// }