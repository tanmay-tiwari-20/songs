import React, { useState } from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar'

function App() {

  const data = [
    {image: "https://images.unsplash.com/photo-1720986073399-f5c24e020ca1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D", name: "One Day", artist: "Arun", added: false},
    {image: "https://images.unsplash.com/photo-1721269139566-bd31c81b3978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D", name: "Challenger", artist: "Tanmay", added: false},
    {image: "https://images.unsplash.com/photo-1721391392874-1126e7cbdf57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D", name: "One Love", artist: "Anubhav", added: false},
    {image: "https://images.unsplash.com/photo-1721332898524-a5e3c447f746?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D", name: "Together", artist: "Ikshit", added: false},
  ]

  const [songData, setsongData] = useState(data);

  const handleClick = (index)=> {
    setsongData((prev)=>{
      return prev.map((item, itemindex)=>{
        if(itemindex === index){
          return {...item, added:!item.added}
        }
        return item;
      })
    })
  }

  return (
    <>
    <div className='w-full h-screen bg-zinc-300 '>
      <Navbar data={songData} />
      <div className='px-20 flex gap-10 mt-10 flex-wrap'>
      {songData.map((obj, index)=>(
        <Card data={obj} handleClick={handleClick} index={index} key={index} />
        ))}
      </div>
    </div>
    </>
  )
}

export default App