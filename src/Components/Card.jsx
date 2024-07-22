import React from 'react'

function Card({ user, handleRemove, id}) {
  return (
    <div className='w-52 h-[15rem] bg-zinc-100 rounded-lg flex flex-col items-center p-2'>
      <div className='image w-20 h-20 rounded-full bg-zinc-200 overflow-hidden'>
        <img className='w-full h-full object-cover' src={user.image} alt={user.name} />
      </div>
      <h1 className='mt-1 text-xl font-semibold text-center leading-none'>{user.name}</h1>
      <h4 className='opacity-60 text-xs font-semibold'>{user.email}</h4>
      <p className='mt-1 text-center text-xs font-semibold leading-none tracking-tight'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, consequuntur?</p>
      <button onClick={()=>handleRemove(id)} className='px-3 py-1 bg-red-600 text-xs rounded-md font-semibold text-white mt-4'>Remove It</button>
    </div>
  )
}

export default Card
