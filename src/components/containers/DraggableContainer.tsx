import { ReactNode, useRef } from 'react'
interface DraggableContainerProps {
  children: ReactNode
}

export default function DraggableContainer({
  children,
}: DraggableContainerProps) {
  const ref = useRef<any>(null)

  const onMouseDown = (e: any) => {
    if (!ref.current) return
    let x1 = 0
    let y1 = 0
    let x2 = e.clientX
    let y2 = e.clientY
    document.onmouseup = () => {
      document.onmouseup = (e) => {
        e.preventDefault()
      }
      document.onmousemove = (e) => {
        e.preventDefault()
      }
    }
    document.onmousemove = (e) => {
      e.preventDefault()
      x1 = x2 - e.clientX
      y1 = y2 - e.clientY
      x2 = e.clientX
      y2 = e.clientY

      ref.current.style.top = ref.current.offsetTop - y1 + 'px'
      ref.current.style.left = ref.current.offsetLeft - x1 + 'px'
    }
  }

  return (
    <div
      ref={ref}
      style={{
        cursor: 'pointer',
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, 0%)',
      }}
      onMouseDown={onMouseDown}
    >
      {children}
    </div>
  )
}
