import Image from 'next/image'
import React from 'react'
import purhase from '../../public/image/purchase.png'
import ships from '../../public/image/ships.png'
import Room from '../../public/image/Room.png'

const Works = () => {
  return (
   
     <>
             <section className=' pt-15'>
                 <div className="container">
                     <div className="c-hedding text-center pb-12.5 ">
                         <h3 className='font-montserrat font-bold text-[32px] text-[#333333] pb-5 '>
                             How It Works
                         </h3>
                         <p className='font-montserrat font-normal text-[20px] text-[#666666]'>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         </p>
                     </div>
                     <div className="c-card flex gap-5">
                         <div className="card " >
                                <Image src={purhase} alt='decoration-image'/>
                                <h3 className='pt-7.5 text-center font-montserrat font-semibold text-[24px] text-[#333333] '>Purchase Securely</h3>
                                 <p className='pt-2.5 w-95.25  text-center font-montserrat font-normal text-[18px] text-[#666666]'>
                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                        </div>
                        <div className="card ">
                                 <Image src={ships} alt='decoration-image'/>
                                 <h3 className='pt-7.5 text-center font-montserrat font-semibold text-[24px] text-[#333333] '>Ships From Warehouse</h3>

                                <p className=' w-95.25 pt-2.5 text-center font-montserrat font-normal text-[18px] text-[#666666]'>
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                        </div>
                         <div className="card  ">
                            <Image src={Room} alt='decoration-image'/>
                            <h3 className='pt-7.5 text-center font-montserrat font-semibold text-[24px] text-[#333333] '>Style Your Room</h3>
                            <p className='pt-2.5 w-95.25  text-center font-montserrat font-normal text-[18px] text-[#666666]'>
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                     </div>
                 </div>
             </section>
     </>
  )
}

export default Works
