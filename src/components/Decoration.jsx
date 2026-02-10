
import React from 'react'
import decor1 from '../../public/image/decor1.png'
import decor2 from '../../public/image/decor2.png'
import decor3 from '../../public/image/decor3.png'
import Image from 'next/image'

const Decoration = () => {
  return (
    
    <>
        <section className=' pb-15 pt-15 border-b border-[#D7D6D6]'>
            <div className="container">
                <div className="c-hedding text-center pb-12.5 ">
                    <h3 className='font-montserrat font-bold text-[32px] text-[#333333] pb-5 '>
                        Browse The Range
                    </h3>
                    <p className='font-montserrat font-normal text-[20px] text-[#666666]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div className="c-card flex gap-5">
                                        <div className="card " >
                                            <Image src={decor1}  alt='decoration-image'/>
                                             <h3 className='pt-7.5 text-center font-montserrat font-semibold text-[24px] text-[#333333] '>Living</h3>
                                        </div>
                                        <div className="card ">
                                            <Image src={decor2} alt='decoration-image'/>
                                            <h3 className='pt-7.5 text-center font-montserrat font-semibold text-[24px] text-[#333333] '>Bedroom</h3>
                                        </div>
                                        <div className="card  ">
                                            <Image src={decor3} alt='decoration-image'/>
                                            <h3 className='pt-7.5 text-center font-montserrat font-semibold text-[24px] text-[#333333] '>Dining</h3>
                                        </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Decoration
