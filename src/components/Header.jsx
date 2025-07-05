import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='flex flex-row gap-5 p-3 flex-wrap mb-5'>
        <h1 className='font-bold flex-1 text-2xl text-[#c3b077]'>ELI5</h1>
        <ul>
            <Link to = '/' className='p-3 hover:text-[#c3b077]'>Home</Link>
            <Link to = "/history" className='p-3 hover:text-[#c3b077]'>History</Link>
        </ul>
    </div>
  )
}
