import React, { useContext, type ComponentProps, type CSSProperties } from 'react'
import "./style.css"
import { WebContext } from '../../context/webContext'
export default function DarkButton({children,...props}:ComponentProps<'button'>) {
  const {webStructure} = useContext(WebContext)
 
  const style = {
    fundo:{
      border:`solid 1px ${webStructure.invertedBackground}`
    } as CSSProperties
  }

  return (
    <button className='btn-dark' style={style.fundo} {...props}>
        {children}
    </button>
  )
}
