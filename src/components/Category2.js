import React from 'react'
import image4 from './images/image4.png'
import image5 from './images/image5.png'
import image6 from './images/image6.png'

const Category2 = () => {
    return (
    <div class="w-[1223px] h-[180px] justify-start items-start gap-6 inline-flex">
    <div class="w-[400px] h-[180px] relative bg-gray-200 bg-opacity-50 rounded-[20px]">
        <img class="w-[211px] h-[211px] left-[182px] top-[2px] absolute" src= {image4} />
        <div class="left-[36px] top-[48px] absolute flex-col justify-center items-center gap-3 inline-flex">
             <div class="text-neutral-900 text-2xl font-medium font-['Rubik'] leading-loose">Sofa</div>
             <div class="px-4 py-2 bg-white rounded-[20px] justify-start items-start gap-2 inline-flex">
                 <div class="text-black text-sm font-semibold font-['Inter'] leading-normal tracking-tight">See More</div>
             </div>
         </div>
     </div>
     <div class="w-[400px] h-[180px] relative bg-gray-200 bg-opacity-50 rounded-[20px]">
         <img class="w-[211px] h-[211px] left-[182px] top-[2px] absolute" src= {image5} />
         <div class="left-[36px] top-[48px] absolute flex-col justify-center items-center gap-3 inline-flex">
             <div class="text-neutral-900 text-2xl font-medium font-['Rubik'] leading-loose">nightstand</div>
             <div class="px-4 py-2 bg-white rounded-[20px] justify-start items-start gap-2 inline-flex">
                 <div class="text-black text-sm font-semibold font-['Inter'] leading-normal tracking-tight">See More</div>
             </div>
         </div>
     </div>
     <div class="w-[400px] h-[180px] relative bg-gray-200 bg-opacity-50 rounded-[20px]">
         <img class="w-[211px] h-[211px] left-[182px] top-[2px] absolute" src= {image6} />
         <div class="left-[36px] top-[48px] absolute flex-col justify-center items-center gap-3 inline-flex">
             <div class="text-neutral-900 text-2xl font-medium font-['Rubik'] leading-loose">Bedroom</div>
             <div class="px-4 py-2 bg-white rounded-[20px] justify-start items-start gap-2 inline-flex">
                 <div class="text-black text-sm font-semibold font-['Inter'] leading-normal tracking-tight">See More</div>
             </div>
         </div>
     </div>
 </div>
 );
}

export default Category2;