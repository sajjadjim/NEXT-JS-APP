"use client"
import React from 'react'

export default function Button() {


  return (
    <div>
      <button onClick={()=> console.log("Button Clicked")} className='bg-green-500 py-2 px-4 mt-5 rounded-lg cursor-pointer'>On Click</button>
    </div>
  )
}
