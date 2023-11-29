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
        <div class="bg-blue-500 [1500px] h-[7748px] py-6 bg-white flex-col justify-start items-center gap-[60px] inline-flex" >
            <Hero />
            <Category />
            <Product />
            <Frame />
            <Category2 />
            <Frame2 />
            <Frame3 />
            <Gallery />
            <Testimonial />
            <Footer />
        </div>
        )
}
export default App;