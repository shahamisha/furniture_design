import React from 'react'
import Star4 from'./images/Star4.png'
import Star5 from'./images/Star5.png'
import icon from './images/icon.png'
import image7 from './images/image7.png'
import image8 from './images/image8.png'

const Testimonial = () => {
    return (
        <div class="w-screen h-[798px] py-[66px] bg-black bg-opacity-5 flex-col justify-start items-center gap-16 inline-flex overflow-hidden">
            <div class="flex-col justify-start items-center gap-[15px] flex">
                <div class="h-[45px] px-6 py-1 bg-gray-200 rounded-2xl justify-center items-center gap-2.5 inline-flex">
                    <div class="text-center text-orange-600 text-lg font-medium font-['Rubik'] leading-relaxed">Testimonial Section</div>
                </div>
                <div class="text-center text-neutral-900 text-[46px] font-medium font-['Rubik'] leading-[56px]">What Our Customer Say</div>
                <div class="w-[451px] text-center text-neutral-600 text-lg font-normal font-['Open Sans'] leading-relaxed">Discover the Stories and Experiences of Our Delighted Customers</div>
            </div>
            <div class=" justify-center items-center gap-6 inline-flex">
                <div class=" w-[623px] h-[419px] p-[42px] bg-white flex-col justify-start items-start gap-7 inline-flex">
                    <h2 class="w-[539px] h-[196px] text-neutral-600 text-lg font-normal font-['Open Sans'] leading-7">I am genuinely impressed with the quality of the recliner chair I bought. The comfort it provides is beyond compare, and the design perfectly complements our living room. What sets apart is not just their exceptional products but also their commitment to customer satisfaction. They went the extra mile to ensure I was completely satisfied with my purchase, which is a rarity in today's market.</h2>
                    <div class="relative">
                        <div class="w-[166px] h-11 left-0 top-0 absolute justify-center items-center gap-3.5 inline-flex">
                            <div class="w-11 h-11 relative">
                                <div class="w-11 h-11 left-0 top-0 absolute bg-zinc-300 rounded-full"></div>
                                <img class="w-[49px] h-[51px] left-[-1px] top-[-1px] absolute" src="https:via.placeholder.com/49x51" />
                            </div>
                            <div class="flex-col justify-start items-start gap-3.5 inline-flex">
                                <div class="text-center text-neutral-900 text-lg font-normal font-['Rubik'] leading-normal">Johny Assloy</div>
                            </div>
                        </div>
                        <div class="w-[131px] h-[23px] left-[408px] top-[11px] absolute justify-start items-start gap-1 inline-flex">
                        <img class =" w-[23px] h-[23px]" src={Star4} />
                        <img class =" w-[23px] h-[23px]" src={Star4} />
                        <img class =" w-[23px] h-[23px]" src={Star4} />
                        <img class =" w-[23px] h-[23px]" src={Star4} />
                        <img class =" w-[23px] h-[23px]" src={Star5} />
                        </div>
                    </div>
                </div>
                <div class="w-[623px] h-[391px] p-[42px] bg-white flex-col justify-start items-start gap-7 inline-flex">
                <img class= "w-[55px] h-[39px] " src= {icon}/>
                    <div class="w-[539px] h-[168px] pb-98px text-neutral-600 text-lg font-normal font-['Open Sans'] leading-7">I recently purchased a beautiful dining table and it has completely transformed our dining area. The craftsmanship and attention to detail are truly remarkable. The table is not only a functional piece of furniture but also a work of art that our family and guests admire. The process from selection to delivery was smooth, and the customer support team was incredibly helpful throughout.</div>
                    <div class="relative">
                        <div class="w-[188px] h-11 left-0 top-0 absolute justify-center items-center gap-3.5 inline-flex">
                            <div class="w-11 h-11 relative">
                                <img class="w-[49px] h-[51px] left-[-1px] top-[-1px] absolute rounded-full" src= {image7} />
                            </div>
                            
                            <div class="flex-col justify-start items-start gap-3.5 inline-flex">
                                <div class="text-center text-neutral-900 text-lg font-normal font-['Rubik'] leading-normal">Michael Roberts</div>
                            </div>
                        </div>
                        <div class="w-[131px] h-[23px] left-[408px] top-[11px] absolute justify-start items-start gap-1 inline-flex">
                        <img class =" w-[23px] h-[23px]" src={Star4} />
                        <img class =" w-[23px] h-[23px]" src={Star4} />
                        <img class =" w-[23px] h-[23px]" src={Star4} />
                        <img class =" w-[23px] h-[23px]" src={Star4} />
                        <img class =" w-[23px] h-[23px]" src={Star5} />
                        
                        </div>
                    </div>
                </div>
                <div class=" w-[623px] h-[363px] text-clip overflow-hidden p-[42px] bg-white flex-col justify-start items-start gap-7 inline-flex">
                <img class= "w-[55px] h-[39px] " src= {icon}/>
                    <p class="w-[539px] text-neutral-600 text-lg font-normal font-['Open Sans'] leading-7">My experience has been consistently outstanding. I've furnished my entire home with their products, and every piece has exceeded my expectations. From the bedroom to the home office,  offers a wide range of stylish and well-crafted furniture. What truly sets them apart is their dedicated customer support.</p>
                    <div class="relative">
                        <div class="w-[161px] h-11 left-0 top-0 absolute justify-center items-center gap-3.5 inline-flex">
                            <div class="w-11 h-11 relative">
                                <div class="w-11 h-11 left-0 top-0 absolute bg-zinc-300 rounded-full">
                                <img class="w-[49px] h-[51px] left-[-1px] top-[-1px] absolute rounded-full" src= {image8} />
                                </div>
                                
                            </div>
                            <div class="flex-col justify-start items-start gap-3.5 inline-flex">
                                <div class="text-center text-neutral-900 text-lg font-normal font-['Rubik'] leading-normal">Marta Brown</div>
                            </div>
                        </div>
                        <div class="w-[131px] h-[23px] left-[408px] top-[11px] absolute justify-start items-start gap-1 inline-flex"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;