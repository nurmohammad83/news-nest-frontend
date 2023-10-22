'use client'
import {useState} from 'react'
import { Typography } from "antd";
import Image from 'next/image';
import card from '../assets/choose.jpg'
import Marquee from 'react-fast-marquee';
const { Title, Paragraph } = Typography;

export const Home = () => {
  return (
    <div className="flex gap-4 justify-center w-full py-5 px-12">
        <div className="w-8/12">
       
      <div
        className="relative bg-cover bg-center h-full"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dyy4n4fmh/image/upload/v1697715400/img-inner_zpung2.jpg")',
        }}
      >
        <div className="h-full px-4 sm:px6 w-full absolute top-[80%] right-0 bottom-0 left-0">
         
            <Title className="text-white text-3xl font-poppins font-bold">
              Appliance Repair Services
            </Title>
            <Paragraph ellipsis className="text-lg font-roboto text-white/80">
              Fast, Reliable, and Professional Repairs Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae similique illum inventore, impedit nam laboriosam minima explicabo! Numquam maiores accusamus laudantium explicabo beatae atque. Veniam blanditiis vitae, voluptate iusto nihil nobis ex! Consequuntur praesentium possimus expedita, eum officia nihil ipsam, saepe perspiciatis voluptates modi nisi.
            </Paragraph>
         
        </div>
      </div>
        </div>
        <div className="w-4/12 flex h-full gap-4 font-roboto">
         <div className='flex flex-col gap-2'>
         <div className='flex justify-center items-center gap-3'>
          <div className='w-[150px] h-full'>
            <Image src={card} width={150} height={100} alt='img' className='w-ful h-full'/>
           </div>
           <div>
            <span className='text-sm font-roboto rounded-md p-1 bg-slate-300 text-white'>life style</span>
            <h3>
            Face mask a new fashion accessory in ‘New Normal’
            </h3>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, suscipit fugiat!</p>
           </div>
          </div>
         <div className='flex justify-center items-center gap-3'>
          <div className='w-[150px] h-full'>
            <Image src={card} width={150} height={100} alt='img' className='w-ful h-full'/>
           </div>
           <div>
            <span className='text-sm font-roboto rounded-md p-1 bg-slate-300 text-white'>life style</span>
            <h3>
            Face mask a new fashion accessory in ‘New Normal’
            </h3>
            <p className='text-ellipsis'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, suscipit fugiat!</p>
           </div>
          </div>
         <div className='flex justify-center items-center gap-3'>
          <div className='w-[150px] h-full'>
            <Image src={card} width={150} height={100} alt='img' className='w-ful h-full'/>
           </div>
           <div>
            <span className='text-sm font-roboto rounded-md p-1 bg-slate-300 text-white'>life style</span>
            <h3>
            Face mask a new fashion accessory in ‘New Normal’
            </h3>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, suscipit fugiat!</p>
           </div>
          </div>
         <div className='flex justify-center items-center gap-3'>
          <div className='w-[150px] h-full'>
            <Image src={card} width={150} height={100} alt='img' className='w-ful h-full'/>
           </div>
           <div>
            <span className='text-sm font-roboto rounded-md p-1 bg-slate-300 text-white'>life style</span>
            <h3>
            Face mask a new fashion accessory in ‘New Normal’
            </h3>
            <p className='text-ellipsis'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, suscipit fugiat!</p>
           </div>
          </div>
         </div>
        </div>
    </div>
  )
}