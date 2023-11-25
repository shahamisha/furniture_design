import React from 'react'
import Group2 from './images/Group2.png'
import Frame2 from './images/Frame2.png'
import Ellipse2 from './images/Ellipse2.png'
import message from './images/message.png'
import circle from './images/circle.png'
import Subtract from './images/Subtract.png'
const frame2 = () => {
    return (
        <div class="w-[1320px] h-[740px] relative">
        <div class="w-[695.12px] h-[561.69px] left-[23px] top-[64px] absolute">
            <div class="origin-top-left rotate-[-15deg] w-[40.64px] h-[40.64px] left-[55.88px] top-[299.92px] absolute">
                <div class="w-[40.64px] h-[40.64px] left-0 top-0 absolute origin-top-left rotate-[-15deg] bg-orange-500 rounded-[10.16px]">
                    <img src = {Group2} />
                </div>
                <div class="origin-top-left rotate-[-19.51deg] w-6 h-[19.20px] left-[10.12px] top-[9.77px] absolute">
                </div>
            </div>
            <img class="w-[477.21px] h-[557.47px] p-2.5 left-[115.99px] top-0 absolute" src= {Frame2} />
            <div class="w-[308.87px] h-[83.31px] left-0 top-[46.58px] absolute">
                <div class="w-[308.87px] h-[83.31px] left-0 top-0 absolute bg-white rounded-[10.16px] shadow"></div>
                <div class="w-[268.23px] h-[58.93px] left-[20.32px] top-[12.19px] absolute">
                    <img class="w-[58.93px] h-[58.93px] left-0 top-0 absolute rounded-full" src= {Ellipse2} />
                    <div class="w-[146.49px] h-[52.14px] left-[75.19px] top-[6.10px] absolute">
                        <div class="left-0 top-0 absolute text-stone-900 text-base font-medium font-['Inter']">Victor Adams</div>
                        <div class="w-[146px] left-[0.49px] top-[22.14px] absolute text-neutral-400 text-xs font-medium font-['Inter']">Interior Design and Styling</div>
                    </div>
                    <div class="w-[40.64px] h-[40.64px] left-[227.59px] top-[9.14px] absolute">
                        <div class="w-[40.64px] h-[40.64px] left-0 top-0 absolute bg-orange-500 rounded-full"></div>
                        <div class="w-[20.32px] h-[20.32px] left-[10.16px] top-[10.16px] absolute bg-orange-500">
                        <img src = {message} />
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-[306.84px] h-[69.09px] left-[388.29px] top-[492.61px] absolute">
                <div class="w-[306.84px] h-[69.09px] left-0 top-0 absolute bg-white rounded-[10.16px] shadow"></div>
                <div class="w-[263.62px] h-[24.38px] left-[25.40px] top-[22.35px] absolute">
                    <div class="left-[39.62px] top-[1.02px] absolute text-stone-900 text-lg font-normal font-['Inter']">We guarantee your comfort</div>
                    <div class="w-[24.38px] h-[24.38px] relative flex-col justify-start items-start inline-flex">
                        <img class="w-[22.01px] h-[22.01px]" src= {circle} />
                    </div>
                </div>
            </div>
        </div>
     <div class="left-[783.46px] top-[92px] absolute flex-col justify-start items-start gap-6 inline-flex">
         <div class="self-stretch text-stone-900 text-[44px] font-semibold font-['Inter'] leading-[56px] tracking-tight">Elevate Your Mood with Comfortable Furniture</div>
         <div class="self-stretch h-[120px] flex-col justify-center items-start gap-6 flex">
             <div class="self-stretch text-neutral-600 text-sm font-normal font-['Inter'] leading-normal tracking-tight">Your surroundings have a profound impact on your mood. Discover how our high-quality furniture can transform your space into a haven of comfort and happiness. Create an environment that nurtures your well-being and elevates your spirits with the perfect blend of style and coziness.</div>
         </div>
         <div class="flex-col justify-start items-start gap-2 flex">
             <div class="w-[478.54px] h-[32.51px] relative">
                 <img class="w-[32.51px] h-[32.51px] left-0 top-0 absolute" src= {Subtract} />
                 <div class="w-[425.71px] left-[52.83px] top-[1.02px] absolute text-stone-900 text-base font-medium font-['Inter'] leading-[30.48px]">Unmatched Comfort</div>
             </div>
             <div class="w-[199.14px] h-[32.51px] relative">
                 <img class="w-[32.51px] h-[32.51px] left-0 top-0 absolute" src= {Subtract} />
                 <div class="w-[146.31px] left-[52.83px] top-[1.02px] absolute text-stone-900 text-base font-medium font-['Inter'] leading-[30.48px]">Crafted for Quality</div>
             </div>
             <div class="w-[361.70px] h-[32.51px] relative">
                 <img class="w-[32.51px] h-[32.51px] left-0 top-0 absolute" src= {Subtract} />
                 <div class="w-[308.87px] left-[52.83px] top-[1.02px] absolute text-stone-900 text-base font-medium font-['Inter'] leading-[30.48px]">Stylish Elegance</div>
             </div>
         </div>
         <div class="w-[152px] h-[50.02px] relative">
             <div class="w-[152px] h-[50.02px] left-0 top-0 absolute bg-black rounded-[30px]"></div>
             <div class="w-[119.18px] h-[23.15px] left-[16.41px] top-[13.44px] absolute text-center text-white text-base font-semibold font-['Inter'] leading-normal">Shop Now</div>
         </div>
     </div>
 </div>
    );
}

export default frame2;