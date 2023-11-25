import React from 'react'
import activity from './images/activity.png'
import hammer from './images/hammer.png'
import command from './images/command.png'
import Group3 from './images/Group3.png'

const Frame3 = () => {
    return (
        <div class="w-[1433px] h-[541px] relative">
        <div class="w-[1433px] h-[541px] left-0 top-0 absolute bg-black"></div>
            <div class="w-[506.53px] h-[411px] left-[797.11px] top-[60px] absolute">
        <div class="w-[506.53px] h-[137px] left-0 top-0 absolute">
        <div class="w-[425.92px] left-[80.61px] top-[47px] absolute text-white text-lg font-medium font-['Inter'] leading-[30px]">Our furniture is meticulously handcrafted to stand the test of time, ensuring it can be enjoyed for generations to come.</div>
        <div class="w-[59.71px] h-[60px] left-0 top-0 absolute shadow"></div>
        <div class="w-[51px] h-[30px] left-[8.39px] top-[15px] absolute">
        <div class="w-[37.35px] h-[22.40px] left-[7px] top-[4px] absolute">
            <img src= {activity} />
        </div>
        </div>
        <div class="w-[368px] left-[80.39px] top-[3px] absolute text-white text-[28px] font-bold font-['Inter']">Quality Craftsmanship</div>
        </div>
        <div class="w-[483.13px] h-[107px] left-[13.39px] top-[167px] absolute">
        <div class="w-[417.14px] left-[65.99px] top-[47px] absolute text-white text-lg font-medium font-['Inter'] leading-[30px]">Discover a wide variety of styles and options to suit your unique preferences and needs.</div>
        <div class="w-[58.48px] h-[60px] left-[0.02px] top-0 absolute shadow"></div>
        <div class="w-[35.89px] h-9 left-0 top-[7px] absolute">
            <img src= {hammer} />
        </div>
        <div class="w-[270.31px] left-[65.78px] top-[3px] absolute text-white text-[28px] font-bold font-['Inter']">Extensive Selection</div>
        </div>
        <div class="w-[506.53px] h-[107px] left-0 top-[304px] absolute">
        <div class="w-[425.92px] left-[80.61px] top-[47px] absolute text-white text-lg font-medium font-['Inter'] leading-[30px]">Quiuckly navigate you anda engage with your adience</div>
        <div class="w-[59.71px] h-[60px] left-0 top-0 absolute shadow"></div>
        <div class="w-[41px] h-[30px] left-[3.39px] top-[15px] absolute">
        <div class="w-[33.45px] h-[19px] left-[5px] top-[6px] absolute">
            <img src= {command} />
        </div>
        </div>
        <div class="w-[418px] left-[81.39px] top-[3px] absolute text-white text-[28px] font-bold font-['Inter']">Dedicated Customer Support</div>
        </div>
            </div>
            <div class="w-[641.24px] h-[421px] left-[129px] top-[60px] absolute">
            <div class="w-[640.87px] left-[0.37px] top-[152px] absolute text-white text-base font-medium font-['Inter'] leading-[30px]">, we take pride in our unwavering commitment to quality and customer satisfaction. With a track record of excellence, we provide you with the finest furniture and a service you can trust.</div>
            <div class="w-[518px] left-[0.50px] top-0 absolute text-white text-[50px] font-semibold font-['Inter']">Our Dedication to Your Satisfaction</div>
            <div class="w-[141.68px] h-[106px] left-0 top-[315px] absolute">
            <div class="w-[141.31px] h-[26px] left-[0.37px] top-0 absolute">
                <img src= {Group3} />
            </div>
            <div class="w-[237px] h-[62px] left-0 top-[44px] absolute">
            <h2 class="w-[122px] h-[22px] text-white text-lg font-bold font-['Inter']">4.9 / 5 rating</h2></div>
            <h3 className="w-[94.54px] left-[0.37px] top-[80px] absolute text-white text-lg font-bold font-['Inter']">Qualitity</h3>
            
            </div>
            <div className="w-[237.21px] h-[106px] left-[221.29px] top-[315px] absolute">
            <div className="w-[141.31px] h-[26px] left-0 top-0 absolute">
                <img src= {Group3} />
            </div>
            <div className="w-[237.21px] h-[62px] left-0 top-[44px] absolute">
            <h2 className="w-[111.46px] left-0 top-0 absolute text-white text-lg font-bold font-['Inter']">4.8 / 5 rating</h2>
            <h3 className="w-[237px] left-[0.21px] top-[40px] absolute text-white text-lg font-bold font-['Inter']">Customer Satisfaction</h3>
            </div>
            </div>
            </div> 
        </div>
    );
}

export default Frame3;