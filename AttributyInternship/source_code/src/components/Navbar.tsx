import React from 'react'

const Navbar: React.FC = () => {
  const logo = require('../assets/images/spacex-logo-black-and-white.png')

  return (
    <div className='w-full h-20 bg-slate-800 flex flex-wrap justify-center'>
        <img src={logo} alt='SpaceX' className='max-w-full h-20 shadow-lg transition-shadow pb-5'/>
    </div>
  )
}

export default Navbar