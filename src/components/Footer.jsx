import Image from 'next/image'
import React from 'react'
import image from '../../public/image/IG-1.jpg'
import image2 from '../../public/image/IG-2.jpg'
import image3 from '../../public/image/IG-3.jpg'
import image4 from '../../public/image/IG-4.jpg'

const Footer = () => {
  return (
    <>
    <footer className='bg-[#03344F] pt-12.2 pb-22.2'>
        <div className="container">
            <div className="flex">
              <div className="f-left w-[35%] mr-5.75">
                <h3 className='font-montserrat font-bold text-[24px] pb-9 text-[#FFFFFF]'>
                    Beauty Care
                </h3>
                <p  className='font-montserrat font-normal text-[16px] pb-5.25 text-[#FFFFFF] leading-8.75 pr-2'>
                    Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <h4 className='font-montserrat font-bold text-[24px]  text-[#FFFFFF]'>
                    Follow Us
                </h4>
            </div>
            <div className="f-right w-[65%]">
                <h3  className=' pt-2.75 font-montserrat font-bold text-[24px] pb-5.75 text-[#FFFFFF]'>
                    Instagram Shop
                </h3>
                <div className="image-card flex gap-5.25">
                    <div className="card rounded-xs">
                        <Image src={image} alt='footer-card'/>
                    </div>
                    <div className="card rounded-xs">
                        <Image src={image2} alt='footer-card'/>
                    </div>
                    <div className="card rounded-xs">
                        <Image src={image3} alt='footer-card'/>
                    </div>
                    <div className="card rounded-xs">
                        <Image src={image4} alt='footer-card'/>
                    </div>
                </div>
            </div>
         </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
