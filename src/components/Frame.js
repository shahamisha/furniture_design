import React from 'react'
import Group from './images/Group.png'
import Subtract from './images/Subtract.png'
import Ellipse from './images/Ellipse.png'
import message from './images/message.png'
import circle from './images/circle.png'
import fframe from './images/fframe.png'

const Frame = () => {
    return (
    <div class=" w-[1320px] h-[740px] pl-[51px] pr-[5.16px] pt-[80.31px] pb-[100.91px] justify-end items-center inline-flex">
        <div class="w-[1263.84px] h-[558.78px] relative">
            <div class="origin-top-left rotate-[-15deg] w-[40.64px] h-[40.64px] left-[671.58px] top-[299.92px] absolute">
                <div class="w-[40.64px] h-[40.64px] left-0 top-0 absolute origin-top-left rotate-[-15deg] bg-orange-500 rounded-[10.16px]">
                    <img src= {Group} />
                </div>
                <div class="origin-top-left rotate-[-13.49deg] w-6 h-[21.63px] left-[12.04px] top-[5.25px] absolute">
                </div>
            </div>
            <img class="w-[477.21px] h-[557.47px] p-2.5 left-[731.69px] top-0 absolute" src= {fframe} />
            <div class="w-[479px] h-[523.56px] left-0 top-[9.69px] absolute flex-col justify-start items-start gap-6 inline-flex">
                <div class="self-stretch text-stone-900 text-[44px] font-semibold font-['Inter'] leading-[56px] tracking-tight">Elevate Your Space with Uncompromising Quality</div>
                <div class="self-stretch h-[120px] flex-col justify-center items-start gap-6 flex">
                    <div class="w-[479px] text-neutral-600 text-sm font-normal font-['Inter'] leading-normal tracking-tight">Experience the epitome of furniture quality. Our products are meticulously crafted with an unwavering commitment to excellence. From the finest materials to expert craftsmanship, each piece embodies durability, comfort, and timeless style. Elevate your space with the assurance of exceptional quality and lasting beauty</div>
                </div>
                <div class="flex-col justify-start items-start gap-2 flex">
                    <div class="w-[478.54px] h-[32.51px] relative">
                        <img class="w-[32.51px] h-[32.51px] left-0 top-0 absolute" src= {Subtract} />
                        <div class="w-[425.71px] left-[52.83px] top-[1.02px] absolute text-stone-900 text-base font-medium font-['Inter'] leading-[30.48px]">Experience Unparalleled Quality</div>
                    </div>
                    <div class="w-[296px] h-[32.51px] relative">
                        <img class="w-[32.51px] h-[32.51px] left-0 top-0 absolute" src= {Subtract} />
                        <div class="w-[243px] left-[53px] top-[1.18px] absolute text-stone-900 text-base font-medium font-['Inter'] leading-[30.48px]">Built to Last for Generations</div>
                    </div>
                    <div class="w-[361.70px] h-[32.51px] relative">
                        <img class="w-[32.51px] h-[32.51px] left-0 top-0 absolute" src= {Subtract} />
                        <div class="w-[308.87px] left-[52.83px] top-[1.02px] absolute text-stone-900 text-base font-medium font-['Inter'] leading-[30.48px]">Loved by Customers Worldwide</div>
                    </div>
                </div>
                <div class="w-[152px] h-[50.02px] relative">
                    <div class="w-[152px] h-[50.02px] left-0 top-0 absolute bg-black rounded-[30px]"></div>
                    <div class="w-[119.18px] h-[23.15px] left-[16.41px] top-[13.44px] absolute text-center text-white text-base font-semibold font-['Inter'] leading-normal">Shop Now</div>
                </div>
            </div>
            <div class="w-[308.87px] h-[83.31px] left-[615.70px] top-[46.58px] absolute">
                <div class="w-[308.87px] h-[83.31px] left-0 top-0 absolute bg-white rounded-[10.16px] shadow"></div>
                <div class="w-[268.23px] h-[58.93px] left-[20.32px] top-[12.19px] absolute">
                    <img class="w-[58.93px] h-[58.93px] left-0 top-0 absolute rounded-full" src= {Ellipse} />
                    <div class="w-[142px] h-[46.50px] left-[75.19px] top-[6.10px] absolute">
                        <div class="left-0 top-0 absolute text-stone-900 text-base font-medium font-['Inter']">Mark Anderson</div>
                        <div class="left-0 top-[31.50px] absolute text-neutral-400 text-xs font-medium font-['Inter']">Furniture Craftsmanship</div>
                    </div>
                    <div class="w-[40.64px] h-[40.64px] left-[227.59px] top-[9.14px] absolute">
                        <div class="w-[40.64px] h-[40.64px] left-0 top-0 absolute bg-orange-500 rounded-full"></div>
                        <div class="w-[20.32px] h-[20.32px] left-[10.16px] top-[10.16px] absolute bg-orange-500">
                            <img src= {message} />
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-[306.84px] h-[69.09px] left-[957px] top-[489.69px] absolute">
                <div class="w-[306.84px] h-[69.09px] left-0 top-0 absolute bg-white rounded-[10.16px] shadow"></div>
                <div class="w-[261.62px] h-[24.38px] left-[25.40px] top-[22.35px] absolute">
                    <div class="left-[39.62px] top-[1.02px] absolute text-stone-900 text-lg font-normal font-['Inter']">We think about every detail</div>
                    <div class="w-[24.38px] h-[24.38px] left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                        <img class="w-[22.01px] h-[22.01px]" src= {circle} />
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default Frame;