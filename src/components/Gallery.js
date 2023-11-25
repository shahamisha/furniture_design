import React from 'react'
import Frame3 from './images/Frame3.png'
import Frame4 from './images/Frame4.png'
import Frame5 from './images/Frame5.png'
import Frame6 from './images/Frame6.png'
import Frame7 from './images/Frame7.png'
import Frame8 from './images/Frame8.png'

const Gallery = () => {
    return (
        <div class=" w-[1248px] h-[905px] flex-col justify-start items-center gap-16 inline-flex">
            <div class=" flex-col justify-start items-center gap-[15px] flex">
                <div class="h-[45px] px-6 py-1 bg-neutral-100 rounded-2xl justify-center items-center gap-2.5 inline-flex">
                    <h2 class="text-center text-orange-600 text-lg font-medium font-['Rubik'] leading-relaxed">Check Our Collection</h2>
                </div>
                <h1 class="text-center text-neutral-900 text-[46px] font-medium font-['Rubik'] leading-[56px]">Our Furniture Gallery</h1>
                <h2 class="w-[451px] text-center text-neutral-600 text-lg font-normal font-['Open Sans'] leading-relaxed">Explore Our Gallery of Inspiring Designs</h2>
            </div>
            <div class="flex-col justify-start items-start gap-6 flex">
                <div class="justify-start items-start gap-6 inline-flex">
                    {/* <div class=" bg-red-500 w-[330px] h-[330px] pr-[415px] justify-start items-center flex">
                        <div class="w-6 h-[389px]"></div>
                    </div> */}
                    <img class="w-[330px] h-[330px] relative" src= {Frame3} />
                    <img class="w-[330px] h-[330px] relative" src= {Frame4} />
                    <div class="bg-zinc-100 justify-start items-center flex">
                        <img class="w-[550px] h-[330px]" src= {Frame5} />
                    </div>
                </div>
                <div class="justify-start items-start gap-6 inline-flex">
                    <div class="w-[540px] h-[330px] bg-zinc-100 justify-center items-center flex">
                        <img class="w-[558px] h-[323px]" src= {Frame6} />
                    </div>
                    <div class="bg-zinc-100 justify-start items-center flex">
                        <img class="w-[342px] h-[323px]" src= {Frame7} />
                    </div>
                    <div class="w-[330px] h-[330px] px-2 pt-1 pb-[3px] bg-zinc-100 justify-center items-center flex">
                        <img class="w-[314px] h-[323px]" src= {Frame8} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;