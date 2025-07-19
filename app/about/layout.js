import Link from 'next/link'
import React from 'react'

export default function AboutLayout({children}) {
    
  return (
    <div>
    <nav>
          <ul className="flex gap-5 text-2xl my-5">
            <li className=""><Link href="/about">About |</Link></li>
            <li className=""><Link href="/about/mission">Mission |</Link></li>
          </ul>
        </nav>
    <hr></hr>
    {children}
    </div>
  )
}
