import React from 'react'
import image1 from './images/image1.png'
import image2 from './images/image2.png'
import image3 from './images/image3.png'

const Category = () => {
    return (
<div class=" w-[1223px] h-[180px] justify-end items-start gap-6 inline-flex overflow-hidden">
    <div class=" w-[400px] h-[180px] relative bg-gray-200 bg-opacity-50 rounded-[20px] flex-col justify-start items-start inline-flex ">
        <img class="object-contain w-[211px] h-[211px] ml-[182px] absolute " src= {image1} />
        <div class="w-[154px] h-[84px] mt-[48px] ml-[36px] flex-col justify-center items-center  gap-3 inline-flex ">
            <div class="text-neutral-900 text-2xl font-medium font-['Rubik'] leading-loose ">Dining Tables</div>
            <div class="px-4 py-2 bg-white rounded-[20px] justify-start items-start gap-2 inline-flex hover:bg-gray-300">
                <div class="text-black text-sm font-semibold font-['Inter'] leading-normal tracking-tight ">See More</div>                    </div>
            </div>
        </div>
        <div class="w-[400px] h-[180px] relative bg-gray-200 bg-opacity-50 rounded-[20px] flex-col justify-start items-start flex">
            <img class="w-[211px] h-[211px] ml-[182px] absolute" src= {image2} />
            <div class="w-[99px] h-[84px] mt-[48px] ml-[36px] flex-col justify-center items-center gap-3 inline-flex ">
                <div class="text-neutral-900 text-2xl font-medium font-['Rubik'] leading-loose">Chairs</div>
                <div class="px-4 py-2 bg-white rounded-[20px] justify-start items-start gap-2 inline-flex hover:bg-gray-300">
                    <div class="text-black text-sm font-semibold font-['Inter'] leading-normal tracking-tight">See More</div>
                </div>
             </div>
         </div>
         <div class="w-[400px] h-[180px] relative bg-gray-200 bg-opacity-50 rounded-[20px] flex-col justify-start items-start flex">
             <img class="w-[211px] h-[211px] ml-[182px] overflow-visible absolute" src= {image3} />
             <div class="flex-col mt-[48px] ml-[36px] justify-center items-center gap-3 inline-flex">
                 <div class="text-neutral-900 text-2xl font-medium font-['Rubik'] leading-loose">Office Desks</div>
                 <div class="px-4 py-2 bg-white rounded-[20px] justify-start items-start gap-2 inline-flex hover:bg-gray-300">
                     <div class="text-black text-sm font-semibold font-['Inter'] leading-normal tracking-tight">See More</div>
                 </div>
             </div>
        </div>
         </div>
          );
        }        

export default Category;