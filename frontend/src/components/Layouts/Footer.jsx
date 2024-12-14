import React from 'react'

function Footer() {
  return (
    <div className='bg-gray-900 text-white'>
        <div className='text-center p-2'>
            <h1>copy right &copy;{new Date().getFullYear()} DevConnector</h1>
        </div>
    </div>
  )
}

export default Footer