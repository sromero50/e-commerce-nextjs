import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
const Navbar = () => {
  let urls = [
    { name: "HOME", link: "/" },
    { name: "PRODUCTS", link: "/products" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT", link: "/" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav className='w-full top-0 left-0'>
      <div className='md:flex items-center justify-between bg-orange-400 py-4 px-7'>
        <Link href={"/"}>
          <div className='font-bold text-3xl cursor-pointer flex items-center font-sans text-gray-800'>
            Shopping
          </div>
        </Link>
        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden'>
          <button>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <ul className={`md:flex md:items-center md:py-1 absolute md:static md:rounded-lg md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
          {
            urls.map((link) => (
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 mx-5'>
                <Link href={link.link}>
                  <a  className='text-gray-800 md:hover:text-black md:hover:bg-orange-600 hover:rounded-md md:hover:p-0.5 duration-300'>{link.name}</a>
                </Link>
              </li>
            ))
          }
          {/* <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'>
            LOGIN
        </button> */}
        </ul> 
       
      </div>
    </nav>
  )
}

export default Navbar