import React, { useEffect, useState } from 'react'
import BanImg from '../../assets/images/checkout/checkout.png'
const Banner2 = () => {
  const[page, setPage]=useState('home')
  useEffect(()=>{
    setPage(document.title)
  },[page])

  return (
    <div className='relative'>
        <img src={BanImg} className='w-full'></img>
        <div className='w-[100%] h-[100%] absolute bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
            <h2 className='text-xl md:text-5xl font-bold text-white p-5 md:p-8 lg:p-24'>
            {document.title}</h2>
        </div>
    </div>
  )
}

export default Banner2