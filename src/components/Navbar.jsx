import React from 'react'
import Logo from '../assets/logo.jpg'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <section className='shadow-md fixed w-full top-0 left-0 z-50 bg-white'>
      <div className='max-w-[1250px] mx-auto'>
        <div className='flex justify-between items-center gap-2 max-sm:mx-10'>
          <img onClick={() => navigate('/')} src={Logo} alt="" className='w-[100px] cursor-pointer' />
          <Link to={'https://begov.uz'} className='text-blue-600 font-medium text-xl'>Website</Link>
        </div>
      </div>
    </section>
  )
}

export default Navbar