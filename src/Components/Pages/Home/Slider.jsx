import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';
import { Pagination, Navigation,Autoplay } from 'swiper/modules';

const Slider = () => {
    return (
        <div>
            <Swiper
            
        slidesPerView={1}
        spaceBetween={30}
        loop={true} autoplay={{
          delay: 4500,
          disableOnInteraction: true,
        }}
        
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        
        <SwiperSlide>Slide 7 
          <img src="./../../../../public/OOOpssss.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Slider;