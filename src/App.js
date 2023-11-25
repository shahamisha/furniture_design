import React from 'react';
import Hero from './components/Hero';
import Category from './components/Category';
import Product from './components/Product';
import Frame from './components/Frame';
import Category2 from './components/Category2'
import Frame2 from './components/Frame2'
import Frame3 from './components/Frame3'
import Gallery from './components/Gallery'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

function App() {
        return (
        <div class="[1500px] h-[7748px] py-6 bg-white flex-col justify-start items-center gap-[60px] inline-flex" >
           {/* hero section */}
            <div>
                <Hero />
            </div>

            {/* Category Section */}
            <div>
                <Category />
            </div>

             {/* Product Section */}
             <div>
                <Product />
            </div>
            
            {/* Frame section */}
            <div>
                <Frame />
            </div>

            {/* Category2 section */}
            <div>
                <Category2 />
            </div>

            {/* Frame2 section */}
            <div>
                <Frame2 />
            </div>

            {/* Frame3 section */}
            <div>
                <Frame3 />
            </div>

            {/* Gallery section */}
            <div>
                <Gallery />
            </div>

            {/* Testimonial */}
            <div>
                <Testimonial />
            </div>

            {/* footer secti0n */}
            <div>
                <Footer />
            </div>
        </div>
        )
}
export default App;