import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='bg-gray-900'>
        <div className='flex justify-evenly mx-auto items-center text-white'>
            <div >
                <ul className='flex items-center'>
                    <Link className='p-2' to='/'>DevConnector</Link>
                    <Link className='p-2' to='/'>Developer</Link>
                </ul>
            </div>
            <div>
            <ul className='flex mx-auto items-center '>
                    <Link className='p-2' to='/register'>SignUp</Link>
                    <Link className='p-2' to='/login'>Login</Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar