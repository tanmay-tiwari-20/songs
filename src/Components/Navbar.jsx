import React from 'react'
import styles from './style.module.css'

function Navbar({data}) {
  return (
    <div className='w-full px-20 py-3 flex items-center justify-between'>
        <h3>Orange</h3>
        <div className='flex p-2 px-4 rounded-md text-sm gap-3 bg-orange-600 text-white'>
            <h3>Favourites</h3>
            <h4>{data.filter(item => item.added).length}</h4>
        </div>
    </div>
  )
}

export default Navbar