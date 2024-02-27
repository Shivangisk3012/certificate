import React from 'react'

const Header = () => {
  return (
    <header className='h-[10vh] w-full border border-black flex justify-center items-center gap-3 px-5 py-5'>
      <img src="download.jpeg" alt="Logo" border="0" className='h-[100%] w-[10%] mix-blend-multiply' />

      <ul className='flex flex-1 justify-between'>
        <li><a href="#">Create Certificate</a></li>
        <li><a href="#">View Intern certificate</a></li>
        <li><a href="#">Contact us</a></li>
      </ul>
    </header>
  )
}

export default Header