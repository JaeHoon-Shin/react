// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; // Navigation module
import 'swiper/css/pagination'; // Pagination module

import { motion } from "framer-motion"

const ani = {
    init: { opacity: 0, x: 300 },
    play: { opacity: 1, x: 0 }
}

export default function Slide(){
    const swiper = useSwiper();
  return (
    <motion.div 
    initial='init'
    animate='play'
    variants={ani}
    transition={{duration:1}}
    >
    <Swiper
    modules = {[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={3}
      pagination = {{clickable : true}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      style ={{height:600, border:"1px solid black", textAlign:"center"}}
    >
      <SwiperSlide  style ={{border:"1px solid black"}}>Slide 1</SwiperSlide>
      <SwiperSlide style ={{border:"1px solid black"}}>Slide 2</SwiperSlide>
      <SwiperSlide style ={{border:"1px solid black"}}>Slide 3</SwiperSlide>
      <SwiperSlide style ={{border:"1px solid black"}}>Slide 4</SwiperSlide>
      <SwiperSlide style ={{border:"1px solid black"}}>Slide 5</SwiperSlide>
      <SwiperSlide style ={{border:"1px solid black"}}>Slide 6</SwiperSlide>
      <SwiperSlide style ={{border:"1px solid black"}}>Slide 7</SwiperSlide>
      <SwiperSlide style ={{border:"1px solid black"}}>Slide 8</SwiperSlide>
      <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
    </Swiper>
    
    </motion.div>
  );
};