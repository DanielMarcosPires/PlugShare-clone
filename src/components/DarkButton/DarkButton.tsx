import "./style.css"
import { WebContext } from '../../context/webContext'
import { useContext, type ComponentProps, type CSSProperties } from "react"
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
