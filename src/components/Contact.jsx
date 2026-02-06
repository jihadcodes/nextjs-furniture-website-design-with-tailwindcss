import React from 'react'

const Contact = () => {
  return (
        <>
        <section className='mt-49.25 bg-[#F2F5FF] mb-4 '>
            <div className="container">
                <div className=" py-15 mx-auto w-128.5">
                    <h3 className='font-montserrat font-bold text-[32px] text-[#333333] pb-2.5 text-center'>Join Our Mailing List</h3>
                    <p className='font-montserrat font-normal text-[20px] text-[#666666] pb-7.5 text-center'>Sign up to receive inspiration, product updates, and special offers from our team.</p>

                    <div className='flex mx-auto'>
                        <input type="text" placeholder='example@gmail.com' className='border border-[#054C73] py-6.75 pr-33.25 pl-7 rounded-tl-[3px] rounded-bl-[3px] text-[#011C42] font-montserrat font-normal text-[16px] bg-[#FFFFFF]' />
                        <button className='border border-[#054C73] py-6.25 px-11.25 rounded-tr-[3px] rounded-br-[3px] text-[#FFFFFF] bg-[#054C73]'>Submit</button>
                    </div>
                </div>
            </div>
        </section>
        </>
  )
}

export default Contact
