import React from 'react';
import img from './img10.png'

const Banner = () => {
    return (

        <div className='grid gap-6 grid-cols-1 lg:grid-cols-2 p-10'>
            <p>
            <h2 className='text-3xl font-bold text-orange-600'>This website created with food service here any item food available .Do you any interested .you can buy.</h2>
            </p>
            <img className='w-full ' src={img} alt="" />
        </div>
//         <div className="carousel w-full py-10 ">
//   <div id="slide1" className="carousel-item relative w-full">
//     <img src={img} className="w-full" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide4" className="btn btn-circle">❮</a> 
//       <a href="#slide2" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   <div id="slide2" className="carousel-item relative w-full">
//     <img src="https://placeimg.com/800/200/arch" className="w-full" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide1" className="btn btn-circle">❮</a> 
//       <a href="#slide3" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   <div id="slide3" className="carousel-item relative w-full">
//     <img src="https://placeimg.com/800/200/arch" className="w-full" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide2" className="btn btn-circle">❮</a> 
//       <a href="#slide4" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   <div id="slide4" className="carousel-item relative w-full">
//     <img src="https://placeimg.com/800/200/arch" className="w-full" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide3" className="btn btn-circle">❮</a> 
//       <a href="#slide1" className="btn btn-circle">❯</a>
//     </div>
//   </div>
// </div>
    );
};

export default Banner;