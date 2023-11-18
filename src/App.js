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
import image1 from './images/image1.png'
import image2 from './images/image2.png'
import image3 from './images/image3.png'
import product1 from './images/product1.png'
import product2 from './images/product2.png'
import product3 from './images/product3.png'
import product4 from './images/product4.png'
import product5 from './images/product5.png'
import product6 from './images/product6.png'
import product7 from './images/product7.png'
import product8 from './images/product8.png'
import cart from './images/cart.png'

const App = () => {
return(
  <div class=" w-[1500px] h-[7748px] py-6 bg-white flex-col justify-start items-center gap-[60px] inline-flex" >
   {/* hero section */}
   <div class=" w-[1466px] h-[848px] px-[55px] pb-[54px] flex-col justify-start items-center gap-2.5 inline-flex">
    <div class="w-[1356px] h-[100px] relative">
        <div class="w-[1356px] h-11 left-0 top-0 absolute">
            <div class="w-[1356px] h-11 left-0 top-0 absolute"></div>
            <div class="w-[307.13px] h-5 left-[113px] top-[12.47px] absolute justify-start items-start gap-[23.47px] inline-flex">
                <div class="grow shrink basis-0 self-stretch relative">
                    <div class="w-[17.60px] h-[17.60px] left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                        <img src= {Call} />
                    </div>
                    <div class="left-[29.33px] top-[-0px] absolute text-zinc-800 text-[13.20px] font-normal font-['Poppins']">+xx xxx xxx x</div>
                </div>
                <div class="grow shrink basis-0 self-stretch relative">
                    <div class="w-[17.60px] h-[17.60px] left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                    <img src= {Email} />
                    </div>
                    <div class="left-[29.33px] top-[-0px] absolute text-zinc-800 text-[13.20px] font-normal font-['Poppins']">xxxxxxxxxx@xxxxxx.com</div>
                </div>
            </div>
            <div class="w-[140.80px] h-[17.60px] left-[1107.40px] top-[13.20px] absolute justify-start items-start gap-[23.47px] inline-flex">
                <div class="w-[17.60px] h-[17.60px] relative"><img src={instagram} /></div>
                <div class="w-[17.60px] h-[17.60px] relative"><img src={facebook} /></div>
                <div class="w-[17.60px] h-[17.60px] relative"><img src={Twitter} /></div>
                <div class="w-[17.60px] h-[17.60px] relative"><img src={Linkedin} /></div>
            </div>
        </div>
        <div class="w-[1136.79px] h-11 left-[109.61px] top-[56px] absolute">
            <div class="w-[483.73px] h-[22px] left-[354.54px] top-[11.73px] absolute justify-center items-center gap-[41.07px] inline-flex">
                <div class="text-stone-500 text-base font-normal font-['Inter']">Home</div>
                <div class="text-neutral-400 text-base font-normal font-['Inter']">About</div>
                <div class="justify-center items-center gap-[5.87px] flex">
                    <div class="text-neutral-400 text-base font-normal font-['Nunito Sans']">Furniture</div>
                    <div class="w-[17.60px] h-[17.60px] relative"></div>
                </div>
                <div class="text-neutral-400 text-base font-normal font-['Inter']">Car Catalogue</div>
                <div class="text-neutral-400 text-base font-normal font-['Inter']">FAQ</div>
            </div>
            <div class="w-[185.47px] h-11 left-[951.32px] top-[-0px] absolute justify-center items-center gap-[23.47px] inline-flex">
                <div class="p-[5.87px] rounded-xl justify-center items-center gap-[5.87px] flex">
                    <div class="text-orange-500 text-[13.20px] font-normal font-['Nunito Sans'] underline leading-[29.33px]">Sign In</div>
                </div>
                <div class="w-[109.27px] h-11 p-[5.87px] bg-orange-400 rounded-3xl justify-center items-center gap-[5.87px] flex">
                    <div class="text-white text-[13.20px] font-normal font-['Poppins']">Sign Up</div>
                </div>
            </div>
            <div class="w-[171px] left-0 top-[2.13px] absolute text-zinc-800 text-[26.40px] font-semibold font-['Inter']">Furniture</div>
        </div>
        <div class="w-[1128.59px] h-[0px] left-[114.41px] top-[44px] absolute opacity-50 border border-neutral-400"></div>
    </div>
    <div class="w-[1260px] h-[684px] relative">
        <div class="left-[23px] top-[57.27px] absolute flex-col justify-start items-start gap-4 inline-flex">
            <div class="w-[533px] text-zinc-800 text-[64px] font-bold font-['Inter'] leading-[76.80px]">Perfect Harmony: Comfort & Style</div>
            <div class="w-[508px] text-neutral-400 text-lg font-normal font-['Inter'] leading-[30.82px]">Explore furniture that harmoniously combines comfort and style to elevate your home</div>
            <div class="justify-start items-center gap-[25px] inline-flex">
                <div class="w-[155px] px-4 py-[6.16px] rounded-3xl border border-zinc-800 justify-center items-center gap-[11px] flex">
                    <div class="text-zinc-800 text-sm font-normal font-['Poppins']">Explore Our Offers</div>
                </div>
                <div class="relative">
                    <div class="w-[36.98px] h-[36.98px] left-0 top-0 absolute">
                        <div class="w-[36.98px] h-[36.98px] left-0 top-0 absolute bg-white rounded-full shadow"></div>
                        <div class="w-[18.49px] h-[18.49px] left-[9.24px] top-[9.24px] absolute"><img src= {Play} /></div>
                    </div>
                    <div class="w-[89px] h-[21px] left-[49.31px] top-[8.09px] absolute text-neutral-400 text-sm font-normal font-['Poppins']">Watch Video</div>
                </div>
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
    </div>
    </div>

    {/* Category Section */}
    <div class=" w-[1223px] h-[180px] justify-end items-start gap-6 inline-flex">
    <div class=" w-[400px] h-[180px] relative bg-gray-200 bg-opacity-50 rounded-[20px] flex-col justify-start items-start inline-flex">
        <img class="object-contain w-[211px] h-[211px] ml-[182px] absolute" src= {image1} />
        <div class="w-[154px] h-[84px] mt-[48px] ml-[36px] flex-col justify-center items-center  gap-3 inline-flex ">
            <div class="text-neutral-900 text-2xl font-medium font-['Rubik'] leading-loose ">Dining Tables</div>
            <div class="px-4 py-2 bg-white rounded-[20px] justify-start items-start gap-2 inline-flex">
                <div class="text-black text-sm font-semibold font-['Inter'] leading-normal tracking-tight">See More</div>
            </div>
        </div>
    </div>
    <div class="w-[400px] h-[180px] relative bg-gray-200 bg-opacity-50 rounded-[20px] flex-col justify-start items-start flex">
        <img class="w-[211px] h-[211px] ml-[182px] absolute" src= {image2} />
        <div class="w-[99px] h-[84px] mt-[48px] ml-[36px] flex-col justify-center items-center gap-3 inline-flex">
            <div class="text-neutral-900 text-2xl font-medium font-['Rubik'] leading-loose">Chairs</div>
            <div class="px-4 py-2 bg-white rounded-[20px] justify-start items-start gap-2 inline-flex">
                <div class="text-black text-sm font-semibold font-['Inter'] leading-normal tracking-tight">See More</div>
            </div>
        </div>
    </div>
    <div class="w-[400px] h-[180px] relative bg-gray-200 bg-opacity-50 rounded-[20px] flex-col justify-start items-start flex">
        <img class="w-[211px] h-[211px] ml-[182px] absolute" src= {image3} />
        <div class="flex-col mt-[48px] ml-[36px] justify-center items-center gap-3 inline-flex">
            <div class="text-neutral-900 text-2xl font-medium font-['Rubik'] leading-loose">Office Desks</div>
            <div class="px-4 py-2 bg-white rounded-[20px] justify-start items-start gap-2 inline-flex">
                <div class="text-black text-sm font-semibold font-['Inter'] leading-normal tracking-tight">See More</div>
            </div>
        </div>
    </div>
    </div>

    {/* Product section */}
    <div class="w-[1248px] h-[1024px] flex-col justify-start items-start gap-16 inline-flex">
    <div class="w-[1248px] justify-between items-center inline-flex">
        <div class="flex-col justify-center items-start gap-[15px] inline-flex">
            <div class="h-[45px] px-6 py-1 bg-neutral-100 rounded-2xl justify-center items-center gap-2.5 inline-flex">
                <div class="text-center text-orange-600 text-lg font-medium font-['Rubik'] leading-relaxed">Check Our Product</div>
            </div>
            <div class="text-center text-neutral-900 text-[28px] font-bold font-['Inter'] leading-9 tracking-tight">Crafted with excellent material</div>
        </div>
        <div class="h-[39.08px] justify-center items-center gap-8 flex">
            <div class="h-[39.08px] px-[16.56px] py-[11.04px] rounded-[27.59px] border border-black justify-center items-center flex">
                <div class="text-center text-black text-[11.04px] font-medium font-['Poppins'] leading-none">Best Seller</div>
            </div>
            <div class="text-neutral-400 text-sm font-normal font-['Inter'] leading-normal tracking-tight">Chair</div>
            <div class="text-neutral-400 text-sm font-normal font-['Inter'] leading-normal tracking-tight">Table</div>
            <div class="text-neutral-400 text-sm font-normal font-['Inter'] leading-normal tracking-tight">Bed</div>
            <div class="text-neutral-400 text-sm font-normal font-['Inter'] leading-normal tracking-tight">Closet</div>
        </div>
    </div>
    <div class="flex-col justify-start items-start gap-12 flex">
        <div class="w-[1248px] justify-start items-start gap-6 inline-flex">
            <div class="bg-white flex-col justify-start items-start inline-flex">
            <div class="w-[294px] h-[311px] pl-[11px] pr-3 pt-[11px] flex-col justify-end items-center inline-flex">
                 <div class="w-[271px] h-[300px]">
                    <img src= {product1} />
                 </div>
                </div>
                <div class="h-[97px] px-[18px] py-3 flex-col justify-start items-start gap-2 flex">
                    <div class="self-stretch text-neutral-600 text-xl font-semibold font-['Rubik'] leading-7">Fabric Chair</div>
                    <div class="self-stretch justify-between items-center inline-flex">
                    <div class="w-[258px] h-[37px] justify-between items-center inline-flex">  
                        <div class="justify-center items-center gap-3.5 flex">
                            <div class="text-neutral-400 text-base font-medium font-['Rubik'] line-through leading-normal">$105.00</div>
                            <div class="text-neutral-900 text-lg font-medium font-['Rubik'] leading-relaxed">$95.00</div>
                        </div>
                        <div class="w-[37px] h-[37px] pl-[9px] pr-[9.50px] pt-[9px] pb-[10.61px] bg-gray-200 rounded-full justify-center items-center inline-flex">
                            <div class="w-[18.50px] h-[17.39px] relative">
                            <img src= {cart} />
                            </div>
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
                    <div class="self-stretch text-neutral-600 text-xl font-semibold font-['Rubik'] leading-7">Fabric Chair</div>
                    <div class="self-stretch justify-between items-center inline-flex">
                    <div class="w-[258px] h-[37px] justify-between items-center inline-flex">
                        <div class="justify-center items-center gap-3.5 flex">
                            <div class="text-neutral-400 text-base font-medium font-['Rubik'] line-through leading-normal">$105.00</div>
                            <div class="text-neutral-900 text-lg font-medium font-['Rubik'] leading-relaxed">$95.00</div>
                        </div>
                        <div class="w-[37px] h-[37px] pl-[9px] pr-[9.50px] pt-[9px] pb-[10.61px] bg-neutral-200 rounded-full justify-center items-center flex">
                            <div class="w-[18.50px] h-[17.39px] relative">
                            <img src= {cart} />
                            </div>
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
                    <div class="self-stretch text-neutral-600 text-xl font-semibold font-['Rubik'] leading-7">Fabric Chair</div>
                    <div class="self-stretch justify-between items-center inline-flex">
                    <div class="w-[258px] h-[37px] justify-between items-center inline-flex">  
                        <div class="justify-center items-center gap-3.5 flex">
                            <div class="text-neutral-400 text-base font-medium font-['Rubik'] line-through leading-normal">$105.00</div>
                            <div class="text-neutral-900 text-lg font-medium font-['Rubik'] leading-relaxed">$95.00</div>
                        </div>
                        <div class="w-[37px] h-[37px] pl-[9px] pr-[9.50px] pt-[9px] pb-[10.61px] bg-neutral-200 rounded-full justify-center items-center flex">
                            <div class="w-[18.50px] h-[17.39px] relative">
                            <img src= {cart} />
                            </div>
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
                    <div class="self-stretch text-neutral-600 text-xl font-semibold font-['Rubik'] leading-7">Fabric Chair</div>
                    <div class="self-stretch justify-between items-center inline-flex">
                    <div class="w-[258px] h-[37px] justify-between items-center inline-flex">
                        <div class="justify-center items-center gap-3.5 flex">
                            <div class="text-neutral-400 text-base font-medium font-['Rubik'] line-through leading-normal">$105.00</div>
                            <div class="text-neutral-900 text-lg font-medium font-['Rubik'] leading-relaxed">$95.00</div>
                        </div>
                        <div class="w-[37px] h-[37px] pl-[9px] pr-[9.50px] pt-[9px] pb-[10.61px] bg-neutral-200 rounded-full justify-center items-center flex">
                            <div class="w-[18.50px] h-[17.39px] relative">
                            <img src= {cart} />
                            </div>
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
                    <div class="self-stretch text-neutral-600 text-xl font-semibold font-['Rubik'] leading-7">Fabric Chair</div>
                    <div class="self-stretch justify-between items-center inline-flex">
                    <div class="w-[258px] h-[37px] justify-between items-center inline-flex">  
                        <div class="justify-center items-center gap-3.5 flex">
                            <div class="text-neutral-400 text-base font-medium font-['Rubik'] line-through leading-normal">$105.00</div>
                            <div class="text-neutral-900 text-lg font-medium font-['Rubik'] leading-relaxed">$95.00</div>
                        </div>
                        <div class="w-[37px] h-[37px] pl-[9px] pr-[9.50px] pt-[9px] pb-[10.61px] bg-neutral-200 rounded-full justify-center items-center flex">
                            <div class="w-[18.50px] h-[17.39px] relative">
                            <img src= {cart} />
                            </div>
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
                    <div class="self-stretch text-neutral-600 text-xl font-semibold font-['Rubik'] leading-7">Fabric Chair</div>
                    <div class="self-stretch justify-between items-center inline-flex">
                    <div class="w-[258px] h-[37px] justify-between items-center inline-flex">
                        <div class="justify-center items-center gap-3.5 flex">
                            <div class="text-neutral-400 text-base font-medium font-['Rubik'] line-through leading-normal">$105.00</div>
                            <div class="text-neutral-900 text-lg font-medium font-['Rubik'] leading-relaxed">$95.00</div>
                        </div>
                        <div class="w-[37px] h-[37px] pl-[9px] pr-[9.50px] pt-[9px] pb-[10.61px] bg-neutral-200 rounded-full justify-center items-center flex">
                            <div class="w-[18.50px] h-[17.39px] relative">
                            <img src= {cart} />
                            </div>
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
                    <div class="self-stretch text-neutral-600 text-xl font-semibold font-['Rubik'] leading-7">Fabric Chair</div>
                    <div class="self-stretch justify-between items-center inline-flex">
                    <div class="w-[258px] h-[37px] justify-between items-center inline-flex">    
                        <div class="justify-center items-center gap-3.5 flex">
                            <div class="text-neutral-400 text-base font-medium font-['Rubik'] line-through leading-normal">$105.00</div>
                            <div class="text-neutral-900 text-lg font-medium font-['Rubik'] leading-relaxed">$95.00</div>
                        </div>
                        <div class="w-[37px] h-[37px] pl-[9px] pr-[9.50px] pt-[9px] pb-[10.61px] bg-neutral-200 rounded-full justify-center items-center flex">
                            <div class="w-[18.50px] h-[17.39px] relative">
                            <img src= {cart} />
                            </div>
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
                    <div class="self-stretch text-neutral-600 text-xl font-semibold font-['Rubik'] leading-7">Fabric Chair</div>
                    <div class="self-stretch justify-between items-center inline-flex">
                    <div class="w-[258px] h-[37px] justify-between items-center inline-flex">  
                        <div class="justify-center items-center gap-3.5 flex">
                            <div class="text-neutral-400 text-base font-medium font-['Rubik'] line-through leading-normal">$105.00</div>
                            <div class="text-neutral-900 text-lg font-medium font-['Rubik'] leading-relaxed">$95.00</div>
                        </div>
                        <div class="w-[37px] h-[37px] pl-[9px] pr-[9.50px] pt-[9px] pb-[10.61px] bg-neutral-200 rounded-full justify-center items-center flex">
                            <div class="w-[18.50px] h-[17.39px] relative">
                            <img src= {cart} />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</div>
  
)
};
export default App;