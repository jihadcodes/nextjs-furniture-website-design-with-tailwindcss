import Image from 'next/image'
import React from 'react'
import c1 from '../../public/image/Mask Group.png'
import c2 from '../../public/image/Mask Group (1).png'
import c3 from '../../public/image/Mask Group (2).png'

const Collection = () => {
  return (
    <>
    <section className='pt-15 pb-15'>
        <div className="container">
            <div className="c-hedding text-center pb-12.5 ">
                <h3 className='font-montserrat font-bold text-[32px] text-[#333333] pb-5 '>
                    Inspiration Collection
                </h3>
                <p className='font-montserrat font-normal text-[20px] text-[#666666]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <div className="c-card flex gap-10">
                                    <div className="card rounded-tl-[30px] pt-9.5">
                                        <Image src={c1} alt=''/>
                                    </div>
                                    <div className="card rounded-xs">
                                        <Image src={c2} alt='footer-card'/>
                                    </div>
                                    <div className="card rounded-br-[30px] pt-9.5">
                                        <Image src={c3} alt='footer-card'/>
                                    </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Collection
