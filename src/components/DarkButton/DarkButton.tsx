import React, { type ComponentProps } from 'react'
import "./style.css"
export default function DarkButton({children,...props}:ComponentProps<'button'>) {
  return (
    <button className='btn-dark' {...props}>
        {children}
    </button>
  )
}
