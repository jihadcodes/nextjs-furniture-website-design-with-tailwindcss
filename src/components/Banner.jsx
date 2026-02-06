import Image from 'next/image'
import React from 'react' 
import banner from '../../public/image/banner.jpg'

import authentic from '../../public/image/authentic.png'
import delivery from '../../public/image/delivery.png'
import support from '../../public/image/support.png'


const Banner = () => {
  return (
    <>
    <section>
        <div className="relative">
            <Image src={banner} className='w-full' alt='banner-image'/>
            <div className=' absolute max-w-160.75 bg-[#DFE9F4] rounded-[10px] px-9.75 py-10.75 top-1/2 -translate-1/2 right-0'>
               <h4 className='font-montserrat font-semibold text-[16px] pb-5 text-[#333333]'>New Arrival</h4>
               <h1 className='font-montserrat font-bold text-[52px] pb-5 text-[#054C73] leading-16.25 pr-20' >
                Discover Our New Collection
              </h1>
              <p className='font-montserrat font-medium text-[18px] pb-7.5 text-[#333333] leading-9.75'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
              </p>
              <button className='bg-[#054C73] px-18 py-6.25 rounded-[50px] font-montserrat font-bold text-[16px] text-[#FFFFFF] cursor-pointer '>
                BUY Now
              </button>
            </div>
        </div>
    </section>

    <section className="service pt-11.5 pb-12.25 bg-[#F2F5FF]">
        <div className="container">
            <div className="flex items-center gap-31.25">
                <div className="s-card  flex gap-[27.08px] items-center ">
                    <div>
                        <Image src={delivery} className='w-full' alt='delivery'/>
                    </div>
                    <div className='w-73.5'>
                        <h4 className='font-montserrat font-semibold text-[24px] pb-1.5 text-[#333333] '>Free Delivery</h4>
                        <p className='font-montserrat font-normal text-[16px]  text-[#333333] '>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="s-card  flex gap-[27.08px] items-center ">
                    <div>
                        <Image src={support} alt='support'/>
                    </div>
                    <div className='w-73.5'>
                        <h4 className='font-montserrat font-semibold text-[24px] pb-1.5 text-[#333333] '>Free Delivery</h4>
                        <p className='font-montserrat font-normal text-[16px]  text-[#333333] '>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="s-card   flex gap-[27.08px] items-center ">
                    <div>
                        <Image src={authentic} alt='authentic'/>
                    </div>
                    <div className='w-73.5'>
                        <h4 className='font-montserrat font-semibold text-[24px] pb-1.5 text-[#333333] '>Free Delivery</h4>
                        <p className='font-montserrat font-normal text-[16px]  text-[#333333] tracking-0 '>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Banner
