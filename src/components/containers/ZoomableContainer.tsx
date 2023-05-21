import { ReactNode } from 'react'

interface ZoomableContainerProps {
  children: ReactNode
  zoomValue: number
}

export default function ZoomableContainer({
  children,
  zoomValue,
}: ZoomableContainerProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: `scale(${zoomValue / 100})`,
      }}
    >
      {children}
    </div>
  )
}
