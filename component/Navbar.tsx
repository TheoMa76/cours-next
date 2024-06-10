import Link from 'next/link'
import React from 'react'

type Props = {}

function Navbar({}: Props) {
  return (
        <nav>
            <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/contact/form">Contact</Link></li>
            <li><Link href="/test/">test</Link></li>
            </ul>
        </nav>
  )
}

export default Navbar