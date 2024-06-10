import Link from 'next/link'
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <div>page
    <Link href="/contact/form">contact</Link>
    </div>
  )
}

export default page