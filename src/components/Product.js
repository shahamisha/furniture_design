import React from 'react'
import product1 from './images/product1.png'
import product2 from './images/product2.png'
import product3 from './images/product3.png'
import product4 from './images/product4.png'
import product5 from './images/product5.png'
import product6 from './images/product6.png'
import product7 from './images/product7.png'
import product8 from './images/product8.png'
import cart from './images/cart.png'

const Product = () => {
    return (
     <div class=" w-[1248px] h-[1024px]  flex-col justify-start items-start gap-16 inline-flex">
     <div class=" w-[1248px] justify-between items-center inline-flex">
         <div class=" flex-col justify-center items-start gap-[15px] inline-flex">
             <div class="h-[45px] px-6 py-1 bg-neutral-100 rounded-2xl justify-center items-center gap-2.5 hover:bg-gray-400 inline-flex">
                 <button class="text-center text-orange-600 text-lg font-medium font-['Rubik'] leading-relaxed hover:bg-gray-300">Check Our Product</button>
             </div>
             <h3 class="text-center text-neutral-900 text-[28px] font-bold font-['Inter'] leading-9 tracking-tight">Crafted with excellent material</h3>
         </div>
         
         <div class="h-[39.08px] justify-center items-center gap-8 flex">
             <div class="h-[39.08px] px-[16.56px] py-[11.04px] rounded-[27.59px] border border-black justify-center items-center flex hover:bg-red-400">
                 <button class="text-center text-black text-[11.04px] font-medium font-['Poppins'] leading-none">Best Seller</button>
             </div>
             <ul class="text-neutral-400 flex space-x-4 text-sm font-normal font-['Inter'] leading-normal tracking-tight ">
                <li class="hover:bg-neutral-200">Chair</li>
                <li class="hover:bg-neutral-200">Table</li>
                <li class="hover:bg-neutral-200">Bed</li>
                <li class="hover:bg-neutral-200">Closet</li>
            </ul>
         </div>
     </div>

     <div class="flex-col justify-start items-start gap-12 flex">
         <div class="w-[1248px] justify-start items-start gap-6 inline-flex">
             <div class="bg-white flex-col justify-start items-start inline-flex">
             <div class="w-[294px] h-[311px] pl-[11px] pr-3 pt-[11px] flex-col justify-end items-center inline-flex"> 
                     <img class="w-[271px] h-[300px]" src= {product1} />
            </div>
                 <div class="h-[97px] px-[18px] py-3 flex-col justify-start items-start gap-2 flex">
                     <h2 class="self-stretch text-neutral-600 text-xl font-semibold font-['Rubik'] leading-7">Fabric Chair</h2>
                     <div class="self-stretch justify-between items-center inline-flex">
                     <div class="w-[258px] h-[37px] justify-between items-center inline-flex">  
                         <div class="justify-center items-center gap-3.5 flex">
                             <text class="text-neutral-400 text-base font-medium font-['Rubik'] line-through leading-normal">$105.00</text>
                             <text class="text-neutral-900 text-lg font-medium font-['Rubik'] leading-relaxed">$95.00</text>
                         </div>
                         <div class="w-[37px] h-[37px] pl-[9px] pr-[9.50px] pt-[9px] pb-[10.61px] bg-gray-200 rounded-full justify-center items-center inline-flex hover:bg-gray-500">
                             <img class="w-[18.50px] h-[17.39px] relative " src= {cart} />
                         </div>
                     </div>
                     </div>
                 </div>
             </div>
             <div class="bg-white flex-col justify-start items-start inline-flex">
                 <div class="h-[311px] pl-[11px] pr-3 pt-[11px] bg-neutral-100 flex-col justify-end items-center flex">
                     <img class="w-[271px] h-[300px]" src= {product2}  />
                 </div>
                 <div class="h-[97px] px-[18px] py-3 flex-col justify-start items-start gap-2 flex">
                     <h2 class="self-stretch text-neutral-600 text-xl font-semibold font-['Rubik'] leading-7">Fabric Chair</h2>
                     <div class="self-stretch justify-between items-center inline-flex">
                     <div class="w-[258px] h-[37px] justify-between items-center inline-flex">
                         <div class="justify-center items-center gap-3.5 flex">
                             <text class="text-neutral-400 text-base font-medium font-['Rubik'] line-through leading-normal">$105.00</text>
                             <text class="text-neutral-900 text-lg font-medium font-['Rubik'] leading-relaxed">$95.00</text>
                         </div>
                         <div class="w-[37px] h-[37px] pl-[9px] pr-[9.50px] pt-[9px] pb-[10.61px] bg-neutral-200 rounded-full justify-center items-center flex hover:bg-gray-500">
                             <img class="w-[18.50px] h-[17.39px] relative" src= {cart} />
                         </div>
                     </div>
                     </div>
                 </div>
             </div>
             <div class="bg-white flex-col justify-start items-start inline-flex">
                 <div class="h-[311px] pl-[11px] pr-3 pt-[11px] bg-neutral-100 flex-col justify-end items-center flex">
                     <img class="w-[271px] h-[300px]" src= {product3} />
                 </div>
                 <div class="h-[97px] px-[18px] py-3 flex-col justify-start items-start gap-2 flex">
                     <h2 class="self-stretch text-neutral-600 text-xl font-semibold font-['Rubik'] leading-7">Fabric Chair</h2>
                     <div class="self-stretch justify-between items-center inline-flex">
                     <div class="w-[258px] h-[37px] justify-between items-center inline-flex">  
                         <div class="justify-center items-center gap-3.5 flex">
                             <text class="text-neutral-400 text-base font-medium font-['Rubik'] line-through leading-normal">$105.00</text>
                             <text class="text-neutral-900 text-lg font-medium font-['Rubik'] leading-relaxed">$95.00</text>
                         </div>
                         <div class="w-[37px] h-[37px] pl-[9px] pr-[9.50px] pt-[9px] pb-[10.61px] bg-neutral-200 rounded-full justify-center items-center flex hover:bg-gray-500">
                            <img class="w-[18.50px] h-[17.39px] relative" src= {cart} />
                         </div>
                     </div>
                     </div>
                 </div>
             </div>
             <div class="bg-white flex-col justify-start items-start inline-flex">
                 <div class="h-[311px] pl-[11px] pr-3 pt-[11px] bg-neutral-100 flex-col justify-end items-center flex">
                     <img class="w-[271px] h-[300px]" src= {product4} />
                 </div>
                 <div class="h-[97px] px-[18px] py-3 flex-col justify-start items-start gap-2 flex">
                     <h2 class="self-stretch text-neutral-600 text-xl font-semibold font-['Rubik'] leading-7">Fabric Chair</h2>
                     <div class="self-stretch justify-between items-center inline-flex">
                     <div class="w-[258px] h-[37px] justify-between items-center inline-flex">
                         <div class="justify-center items-center gap-3.5 flex">
                             <text class="text-neutral-400 text-base font-medium font-['Rubik'] line-through leading-normal">$105.00</text>
                             <text class="text-neutral-900 text-lg font-medium font-['Rubik'] leading-relaxed">$95.00</text>
                         </div>
                         <div class="w-[37px] h-[37px] pl-[9px] pr-[9.50px] pt-[9px] pb-[10.61px] bg-neutral-200 rounded-full justify-center items-center flex hover:bg-gray-500">
                            <img class="w-[18.50px] h-[17.39px] relative" src= {cart} />
                         </div>
                     </div>
                     </div>
                 </div>
             </div>
         </div>
         <div class="w-[1248px] justify-start items-start gap-6 inline-flex">
             <div class="bg-white flex-col justify-start items-start inline-flex">
                 <div class="h-[311px] pl-[11px] pr-3 pt-[11px] bg-neutral-100 flex-col justify-end items-center flex">
                     <img class="w-[271px] h-[300px]" src= {product5} />
                 </div>
                 <div class="h-[97px] px-[18px] py-3 flex-col justify-start items-start gap-2 flex">
                     <h2 class="self-stretch text-neutral-600 text-xl font-semibold font-['Rubik'] leading-7">Fabric Chair</h2>
                     <div class="self-stretch justify-between items-center inline-flex">
                     <div class="w-[258px] h-[37px] justify-between items-center inline-flex">  
                         <div class="justify-center items-center gap-3.5 flex">
                             <text class="text-neutral-400 text-base font-medium font-['Rubik'] line-through leading-normal">$105.00</text>
                             <text class="text-neutral-900 text-lg font-medium font-['Rubik'] leading-relaxed">$95.00</text>
                         </div>
                         <div class="w-[37px] h-[37px] pl-[9px] pr-[9.50px] pt-[9px] pb-[10.61px] bg-neutral-200 rounded-full justify-center items-center flex hover:bg-gray-500">
                            <img class="w-[18.50px] h-[17.39px] relative" src= {cart} />
                         </div>
                     </div>
                     </div>
                 </div>
             </div>
             <div class="bg-white flex-col justify-start items-start inline-flex">
                 <div class="h-[311px] pl-[11px] pr-3 pt-[11px] bg-neutral-100 flex-col justify-end items-center flex">
                     <img class="w-[271px] h-[300px]" src= {product6} />
                 </div>
                 <div class="h-[97px] px-[18px] py-3 flex-col justify-start items-start gap-2 flex">
                     <h2 class="self-stretch text-neutral-600 text-xl font-semibold font-['Rubik'] leading-7">Fabric Chair</h2>
                     <div class="self-stretch justify-between items-center inline-flex">
                     <div class="w-[258px] h-[37px] justify-between items-center inline-flex">
                         <div class="justify-center items-center gap-3.5 flex">
                             <text class="text-neutral-400 text-base font-medium font-['Rubik'] line-through leading-normal">$105.00</text>
                             <text class="text-neutral-900 text-lg font-medium font-['Rubik'] leading-relaxed">$95.00</text>
                         </div>
                         <div class="w-[37px] h-[37px] pl-[9px] pr-[9.50px] pt-[9px] pb-[10.61px] bg-neutral-200 rounded-full justify-center items-center flex hover:bg-gray-500">
                            <img class="w-[18.50px] h-[17.39px] relative" src= {cart} />
                         </div>
                     </div>
                     </div>
                 </div>
             </div>
             <div class="bg-white flex-col justify-start items-start inline-flex">
                 <div class="h-[311px] pl-[11px] pr-3 pt-[11px] bg-neutral-100 flex-col justify-end items-center flex">
                     <img class="w-[271px] h-[300px]" src= {product7} />
                 </div>
                 <div class="h-[97px] px-[18px] py-3 flex-col justify-start items-start gap-2 flex">
                     <h2 class="self-stretch text-neutral-600 text-xl font-semibold font-['Rubik'] leading-7">Fabric Chair</h2>
                     <div class="self-stretch justify-between items-center inline-flex">
                     <div class="w-[258px] h-[37px] justify-between items-center inline-flex">    
                         <div class="justify-center items-center gap-3.5 flex">
                             <text class="text-neutral-400 text-base font-medium font-['Rubik'] line-through leading-normal">$105.00</text>
                             <text class="text-neutral-900 text-lg font-medium font-['Rubik'] leading-relaxed">$95.00</text>
                         </div>
                         <div class="w-[37px] h-[37px] pl-[9px] pr-[9.50px] pt-[9px] pb-[10.61px] bg-neutral-200 rounded-full justify-center items-center flex hover:bg-gray-500">
                            <img class="w-[18.50px] h-[17.39px] relative" src= {cart} />
                         </div>
                     </div>
                     </div>
                 </div>
             </div>
             <div class="bg-white flex-col justify-start items-start inline-flex">
                 <div class="h-[311px] pl-[11px] pr-3 pt-[11px] bg-neutral-100 flex-col justify-end items-center flex">
                     <img class="w-[271px] h-[300px]" src= {product8} />
                 </div>
                 <div class="h-[97px] px-[18px] py-3 flex-col justify-start items-start gap-2 flex">
                     <h2 class="self-stretch text-neutral-600 text-xl font-semibold font-['Rubik'] leading-7">Fabric Chair</h2>
                     <div class="self-stretch justify-between items-center inline-flex">
                     <div class="w-[258px] h-[37px] justify-between items-center inline-flex">  
                         <div class="justify-center items-center gap-3.5 flex">
                             <text class="text-neutral-400 text-base font-medium font-['Rubik'] line-through leading-normal">$105.00</text>
                             <text class="text-neutral-900 text-lg font-medium font-['Rubik'] leading-relaxed">$95.00</text>
                         </div>
                         <div class="w-[37px] h-[37px] pl-[9px] pr-[9.50px] pt-[9px] pb-[10.61px] bg-neutral-200 rounded-full justify-center items-center flex hover:bg-gray-500">
                            <img class="w-[18.50px] h-[17.39px] relative" src= {cart} />
                         </div>
                     </div>
                     </div>
                 </div>
             </div>
         </div>
         </div>
     </div>
);
}

export default Product;