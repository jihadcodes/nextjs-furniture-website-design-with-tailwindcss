import Image from 'next/image'
import React from 'react'
import logo from "../../public/image/logo (2).png"
import Link from 'next/link'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat();

const Navbar = () => {
  return (
    <>
      <nav className='pt-10.75 pb-9.5 '>
        <div className="container ">
            <div className="flex justify-between items-center ">
                <div className="logo cursor-pointer">
                    <Image placeholder='blur' src={logo} alt='logo'/>
                </div>
                <div className="menu">
                    <ul className='gap-[73.07px] flex'>
                        <li><Link href=''>Home</Link></li>
                        <li><Link href=''>Services</Link></li>
                        <li><Link href=''>Doctors</Link></li>
                        <li><Link href=''>Products</Link></li>
                        <li><Link href=''>Gallery</Link></li>
                    </ul>
                </div>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
