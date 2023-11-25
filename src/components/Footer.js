import React from "react";
import Frame9 from './images/Frame9.png'
import LOGO from './images/LOGO.png'

const Footer = () => {
    return (
    <div class="w-[1440px] h-[1204px] flex-col justify-start items-start inline-flex">
        <div class="self-stretch grow shrink basis-0 relative">
            <div class="w-[1440px] h-[492px] left-0 top-0 absolute bg-black bg-opacity-80 flex-col justify-start items-start inline-flex">
                <img class="w-[1440px] h-[492px] relative" src= {Frame9} />
                <div class="w-[311px] h-[112px] left-[948px] top-[186px] text-white text-[46px] font-medium font-['Rubik'] leading-[56px] absolute">Our Furniture Review</div>
                <div class="w-[347px] h-[52px] left-[948px] top-[314px] text-neutral-100 text-lg font-normal font-['Open Sans'] leading-relaxed absolute">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>
            <div class="w-[1440px] h-[273px] pl-[154px] pr-[153px] pt-[129px] pb-[60px] left-0 top-[492px] absolute bg-neutral-700 justify-center items-start gap-10 inline-flex">
                <div class="w-[426px] text-white text-[34px] font-normal font-['Rubik'] leading-[42px]">Subscribe to get attractive offers on our products</div>
                <div class="grow shrink basis-0 self-stretch pl-6 pr-3.5 py-3.5 bg-neutral-100 justify-end items-center gap-60 inline-flex">
                    <div class="self-stretch justify-start items-center gap-3.5 inline-flex">
                        <div class="text-center text-neutral-400 text-xl font-normal font-['Open Sans'] leading-[30px]">E.g. youremail@mail.com</div>
                    </div>
                    <div class="px-7 py-3 bg-orange-500 justify-center items-center inline-flex">
                        <div class="text-center text-white text-[22px] font-medium font-['Rubik'] leading-[30px]">Subscribe</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="w-[1440px] h-[439px] relative bg-white">
           
         <img class="left-[96px] top-[80px] w-[153px] h-[48px] " src= {LOGO} /> 
            <div class="left-[472px] top-[80px] absolute flex-col justify-start items-start gap-4 inline-flex">
                <div class="text-black text-lg font-semibold font-['Rubik'] leading-relaxed">Category</div>
                <div class="flex-col justify-center items-start gap-2.5 flex">
                    <div class="text-stone-700 text-base font-normal font-['Open Sans'] leading-normal">Living Room</div>
                    <div class="text-stone-700 text-base font-normal font-['Open Sans'] leading-normal">Bed Room</div>
                    <div class="text-stone-700 text-base font-normal font-['Open Sans'] leading-normal">Kitchen</div>
                    <div class="text-stone-700 text-base font-normal font-['Open Sans'] leading-normal">Bath Room</div>
                </div>
            </div>
            <div class="left-[680px] top-[80px] absolute flex-col justify-start items-start gap-4 inline-flex">
                <div class="text-black text-lg font-semibold font-['Rubik'] leading-relaxed">Popular Product</div>
                <div class="flex-col justify-center items-start gap-2.5 flex">
                    <div class="text-stone-700 text-base font-normal font-['Open Sans'] leading-normal">Single Sofa Black</div>
                    <div class="text-stone-700 text-base font-normal font-['Open Sans'] leading-normal">Wooden Bookcase</div>
                    <div class="text-stone-700 text-base font-normal font-['Open Sans'] leading-normal">Wooden Chair</div>
                    <div class="text-stone-700 text-base font-normal font-['Open Sans'] leading-normal">Luxury White Bed</div>
                </div>
            </div>
            <div class="left-[944px] top-[80px] absolute flex-col justify-start items-start gap-4 inline-flex">
                <div class="text-black text-lg font-semibold font-['Rubik'] leading-relaxed">Sitemap</div>
                <div class="flex-col justify-center items-start gap-2.5 flex">
                    <div class="text-stone-700 text-base font-normal font-['Open Sans'] leading-normal">Product</div>
                    <div class="text-stone-700 text-base font-normal font-['Open Sans'] leading-normal">Services</div>
                    <div class="text-stone-700 text-base font-normal font-['Open Sans'] leading-normal">Article</div>
                    <div class="text-stone-700 text-base font-normal font-['Open Sans'] leading-normal">About Us</div>
                </div>
            </div>
            <div class="left-[1152px] top-[80px] absolute flex-col justify-start items-start gap-4 inline-flex">
                <div class="text-black text-lg font-semibold font-['Rubik'] leading-relaxed">Follow Us</div>
                <div class="flex-col justify-center items-start gap-2.5 flex">
                    <div class="text-stone-700 text-base font-normal font-['Open Sans'] leading-normal">Facebook</div>
                    <div class="text-stone-700 text-base font-normal font-['Open Sans'] leading-normal">Instagram</div>
                    <div class="text-stone-700 text-base font-normal font-['Open Sans'] leading-normal">TikTok</div>
                    <div class="text-stone-700 text-base font-normal font-['Open Sans'] leading-normal">Youtube</div>
                </div>
            </div>
            <div class="w-[219px] left-[96px] top-[156px] absolute text-stone-700 text-lg font-normal font-['Open Sans'] leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            <div class="left-[96px] top-[337px] absolute text-stone-700 text-sm font-normal font-['Open Sans'] leading-snug">© 2023 by Logo Furniture. All rights reserved.</div>
            <div class="w-[1248px] h-[0px] left-[96px] top-[313px] absolute border border-black">
            </div>
        </div>
    </div>
    );
}

export default Footer;