"use client"
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from '../app/styles/home.module.css';
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from 'next/image';
import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';

const Home = ({ newses }:any) => {
  return (
    <div className='pb-6 border-b border-gray-100' id='hero'>
      <div className='mx-6 font-roboto py-4'>
        <div className={styles.slidRow}>
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            loop={true}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            className={styles.firstSlider}
          >
            {
              newses?.slice(5, 9).map((news:any) => <SwiperSlide className='h-full' key={news._id}>
                <div className='relative w-full h-full cursor-pointer'>
                  <Image width={300} height={200} className='w-full h-full' src={news?.images?.img1} alt='' />
                  <div className='absolute w-full bottom-4 left-4 z-10'>
                    
                    <Title ellipsis className='text-white text-xl md:text-3xl cursor-pointer hover:text-primary font-semibold transition-colors duration-300'>{news?.heading}</Title>
                    <Paragraph ellipsis className='text-white mt-2 text-sm md:text-md pr-5'>{news?.description[0]}</Paragraph>
                  </div>
                  <div className={styles.overlay}></div>
                </div>
              </SwiperSlide>)
            }

          </Swiper>
          <Swiper
            direction={"vertical"}
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            loop={true}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            pagination={{
              clickable: true
            }}
            speed={1500}
            modules={[Autoplay]}
            className={styles.secondSlide}
          >
            {
              newses?.slice(1, 5).map((news:any) => <SwiperSlide key={news?._id}>
                <div className='flex justify-center gap-3 h-full cursor-pointer'>
                  <div className='w-2/5 h-full'>
                    <Image height={500} width={600} className='w-full h-full object-cover' src={news?.images?.img1} alt='' />
                  </div>
                  <div className='w-3/5 overflow-hidden py-1'>
                  <span className='text-black p-1 text-sm rounded-sm bg-gray-300'>{news?.category}</span> 
                    <Title ellipsis className='md:text-lg text-md leading-5 md:leading-4 xl:leading-6 py-2 m-0 cursor-pointer hover:text-primary font-medium transition-colors duration-300'>{news?.heading}</Title>
                    <p className='text-sm md:text-md'>{news?.description[0].slice(0, 50)}...</p>
                    
                  </div>
                </div>
              </SwiperSlide>)
            }
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;