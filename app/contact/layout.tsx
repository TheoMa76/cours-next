import { Form } from '@/components/ui/form'
import React from 'react'

type Props = {
    children: React.ReactNode
}

function layout({children}: Props) {
  return (
    <div>
      <h1>Contact</h1>
      {children}
    </div>
  )
}

export default layout