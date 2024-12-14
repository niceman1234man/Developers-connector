import React from 'react'

function Navbar() {
  return (
    <div className='bg-gray-900'>
        <div className='flex justify-evenly mx-auto items-center text-white'>
            <div >
                <ul className='flex items-center'>
                    <li className='p-2'>DevConnector</li>
                    <li className='p-2'>Developer</li>
                </ul>
            </div>
            <div>
            <ul className='flex mx-auto items-center '>
                    <li className='p-2'>SignUp</li>
                    <li className='p-2'>Login</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar