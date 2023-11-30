import React from 'react'
import Call from './images/Call.png'
import Email from './images/Email.png'
import instagram from './images/instagram.png'
import facebook from './images/facebook.png'
import Twitter from './images/Twitter.png'
import Linkedin from './images/Linkedin.png'
import Rectangle1 from './images/Rectangle1.png'
import Play from './images/Play.png'
import Location1 from './images/Location1.png'
import Location2 from './images/Location2.png'
import Location3 from './images/Location3.png'
import Location4 from './images/Location4.png'
import { HiChevronDown } from "react-icons/hi";

const Hero = () => {
    return (
    <div class=" container mx-auto w-screen h-[848px] px-[55px] pb-[54px] flex-col justify-start items-center gap-2.5 inline-flex">
        <header class="w-[1356px] h-[100px] relative">
            <div class=" w-[1356px] h-11 left-0 top-0 absolute">
                <div class=" w-[369px] h-5 left-[113px] top-[12.47px] absolute justify-start items-start gap-[23.47px] inline-flex">
                    <ul class="flex md:flex-row items-start gap-7 md:space-y-0 md:space-x-4">
                        <li class="flex items-center">
                            <img class="w-6 h-6 mr-4" src={Call} alt="Call" />
                            <span class="text-zinc-800 text-sm font-normal font-Poppins">+xx xxx xxx x</span>
                        </li>

                        <li class="flex items-center">
                            <img class="w-6 h-6 mr-4" src={Email} alt="Email" />
                            <span class="text-zinc-800 text-sm font-normal font-Poppins">xxxxxxxxxx@xxxxxx.com</span>
                        </li>
                    </ul>
                </div>
                <ul class=" w-[140px] md:w-[140px] h-[18px] left-[1108px] top-[13px] absolute justify-start items-start gap-[22px] md:gap-6 inline-flex">
                     <li class="flex flex-wrap gap-5 md:gap-4 justify-end">
                        <li class="w-[17.60px] h-[17.60px] relative"><img src={instagram} alt="Instagram" /></li>
                        <li class="w-[17.60px] h-[17.60px] relative"><img src={facebook} alt="Facebook" /></li>
                        <li class="w-[17.60px] h-[17.60px] relative"><img src={Twitter} alt="Twitter" /></li>
                        <li class="w-[17.60px] h-[17.60px] relative"><img src={Linkedin} alt="LinkedIn" /></li>
                    </li>
                </ul>
            </div>
            <div class=" w-[1128.59px] h-[0px] left-[114.41px] top-[44px] absolute opacity-50 border border-neutral-400"></div>
            <div class="w-[1136px] h-11 left-[110px] top-[56px] absolute">
                <div class="w-[171px] left-0 top-[2.13px] absolute text-zinc-800 text-[26.40px] font-semibold font-['Inter']">Furniture</div>
                <div class=" w-[484px] h-[22px] left-[354px] top-[12px] absolute justify-center items-center gap-[41px] inline-flex">
                    <ul className="text-stone-500 text-base font-normal font-['Inter'] flex space-x-8">
                        <li>Home</li>
                        <li>About</li>
                        <li class="flex items-center">Furniture
                            <HiChevronDown class = "ml-1" />
                        </li>
                        <li>Car Catalogue</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div class=" md:w-[184px] h-11 left-[950px] md:left-[950px] top-[-0px] absolute justify-center items-center md:gap-[24px] inline-flex">
                    <ul class="p-[5px] rounded-xl justify-center items-center gap-6 flex">
                        <li class="text-orange-500 text-[13px] font-normal font-['Nunito Sans'] underline leading-[30px] md:text-base">Sign In</li>
                        <li class="w-[110px] h-11 p-[6px] bg-orange-400 hover:bg-orange-900 rounded-3xl justify-center items-center md:gap-[6px] flex">
                            <text class="text-white text-[13px] font-normal font-['Poppins'] md:text-base">Sign Up</text>
                        </li> 
                    </ul>
                </div>
            </div>
            
        </header>
        <hero class="w-[1260px] h-[684px] relative">
            <div class="left-[23px] top-[57.27px] absolute flex-col justify-start items-start gap-4 inline-flex">
                <div class="w-[533px] text-zinc-800 text-[64px] font-bold font-['Inter'] leading-[76.80px]">Perfect Harmony: Comfort & Style</div>
                <div class="w-[508px] text-neutral-400 text-lg font-normal font-['Inter'] leading-[30.82px]">Explore furniture that harmoniously combines comfort and style to elevate your home</div>
                <div class="justify-start items-center gap-[25px] inline-flex">
                    <div class="w-[155px] px-4 py-[6.16px] rounded-3xl border border-zinc-800 justify-center items-center gap-[11px] flex">
                        <text class="text-zinc-800 text-sm font-normal font-['Poppins']">Explore Our Offers</text>
                    </div>
                    <div class="relative">
                        <div class="w-[36.98px] h-[36.98px] left-0 top-0 absolute">
                            <div class="w-[36.98px] h-[36.98px] left-0 top-0 absolute bg-white rounded-full shadow">
                                <img class="w-[18.49px] h-[18.49px] left-[9.24px] top-[9.24px] absolute" src= {Play} ></img>
                                <text class="w-[89px] h-[21px] left-[49.31px] top-[8.09px] absolute text-neutral-400 text-sm font-normal font-['Poppins']">Watch Video</text>
                            </div>
                        </div>
                    </div>
                    {/* <div class="relative">
                        <div class="w-[36.98px] h-[36.98px] left-0 top-0 absolute">
                            <div class="w-[36.98px] h-[36.98px] left-0 top-0 absolute bg-white rounded-full shadow"></div>
                            <div class="w-[18.49px] h-[18.49px] left-[9.24px] top-[9.24px] absolute"><img src= {Play} /></div>
                        </div>
                        <div class="w-[89px] h-[21px] left-[49.31px] top-[8.09px] absolute text-neutral-400 text-sm font-normal font-['Poppins']">Watch Video</div>
                    </div> */}
                </div>
            </div>
            <div class=" w-[627.89px] h-[415.25px] left-[613px] top-[69px] absolute">
                <img src = {Rectangle1} />
                {/* <div class=" w-[147.92px] h-[362.10px] left-[419.11px] top-[53.16px] absolute bg-gradient-to-b from-white to-white rounded-tl-3xl rounded-tr-3xl"></div> */}
            </div>
            <div class="w-[970.72px] p-[24.65px] left-[-1.67px] top-[442.77px] absolute bg-white rounded-[73.96px] shadow backdrop-blur-[3.08px] justify-center items-center gap-[24.65px] inline-flex">
                <div class="flex-col justify-start items-start gap-[6.16px] inline-flex">
                    <div class="text-neutral-400 text-sm font-semibold font-['Poppins']">Confort</div>
                    <div class="rounded-xl justify-center items-center gap-[18.49px] inline-flex">
                        <div class="grow shrink basis-0 self-stretch justify-between items-center flex">
                            <div class="w-[21px] h-[21px] relative">
                                <div class="w-[14.76px] h-[15.69px] left-[4.54px] top-[4.54px] absolute">
                                    <img src= {Location1} />
                                </div>
                            </div>
                            <div class="w-[123.27px] text-neutral-400 text-sm font-medium font-['Poppins']">Cozy Seating</div>
                        </div>
                    </div>
                </div>
                <div class="flex-col justify-start items-start gap-[6.16px] inline-flex">
                    <div class="text-neutral-400 text-sm font-semibold font-['Poppins']">Quality Assurance</div>
                    <div class="w-[175px] rounded-xl justify-start items-center gap-[18.49px] inline-flex">
                        <div class="grow shrink basis-0 self-stretch justify-between items-center flex">
                            <div class="w-[21px] h-[21px] relative">
                                <div class="w-[14.76px] h-[15.11px] left-[4px] top-[2.16px] absolute">
                                    <img src= {Location2} />
                                </div>
                            </div>
                            <div class="w-[123.27px] text-neutral-400 text-sm font-medium font-['Poppins']">Cozy Seating</div>
                        </div>
                    </div>
                </div>
                <div class="flex-col justify-start items-start gap-[6.16px] inline-flex">
                    <div class="text-neutral-400 text-sm font-semibold font-['Poppins']">Free Shipping</div>
                    <div class="rounded-xl justify-start items-center gap-[18.49px] inline-flex">
                        <div class="grow shrink basis-0 self-stretch relative">
                            <div class="w-[123.27px] left-[24.65px] top-0 absolute text-neutral-400 text-sm font-medium font-['Poppins']">No-Cost Delivery</div>
                            <div class="w-[18.49px] h-[18.49px] left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                                <div class="w-[14.76px] h-[15.02px] relative">
                                <img src= {Location3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" w-[46.22px] h-[0px] origin-top-left rotate-90 opacity-50 border border-neutral-400"></div>
                <div class="flex-col justify-start items-start gap-[6.16px] inline-flex">
                    <div class="text-neutral-400 text-sm font-normal font-['Poppins']">Secure Checkout</div>
                    <div class="rounded-xl justify-start items-center gap-[18.49px] inline-flex">
                        <div class="grow shrink basis-0 self-stretch relative">
                            <div class="w-[123.27px] left-[24.65px] top-0 absolute text-neutral-400 text-sm font-medium font-['Poppins']">Secure Payments</div>
                            <div class="w-[18.49px] h-[18.49px] left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                                <div class="w-[17px] h-[17px] relative">
                                    <img src= {Location4} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-[123.27px] h-[46.22px] p-[6.16px] bg-white rounded-[73.96px] border border-black justify-center items-center gap-[6.16px] flex">
                    <div class="text-black text-sm font-normal font-['Poppins']">See More</div>
                </div>
            </div>
            <div class="w-[1232.67px] left-[31px] top-[606px] absolute opacity-50 justify-center items-center gap-[61.63px] inline-flex">
                <div class="text-zinc-800 text-[27.73px] font-bold font-['Inter']">Lowe’s</div>
                <div class="text-zinc-800 text-[27.73px] font-medium font-['Poppins']">DeWalt</div>
                <div class="text-zinc-800 text-[27.73px] font-semibold font-['Montserrat']">Home Depot</div>
                <div class="text-zinc-800 text-[27.73px] font-bold font-['Montserrat']">IKEA</div>
                <div class="text-zinc-800 text-[27.73px] font-bold font-['Poppins']">Makita</div>
                <div class="text-zinc-800 text-[27.73px] font-bold font-['Inter']">3M</div>
            </div>
        </hero>
    </div>
    );
}

export default Hero;