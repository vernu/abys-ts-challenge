import './Header.css'

interface HeaderProps {
  zoomOptions: number[]
  zoom: number
  onSelectZoom: (e: any) => void
  onZoomIn: () => void
  onZoomOut: () => void
  onResetZoom: () => void
}

export default function Header({
  zoomOptions,
  zoom,
  onSelectZoom,
  onZoomIn,
  onZoomOut,
  onResetZoom,
}: HeaderProps) {
  return (
    <div className='header-container'>
      <div className='title'>
        Service
        <span className='yellow-badge'>0</span>
      </div>

      <div className='header-actions'>
        <button className='purple-btn'>ListView</button>
        <button onClick={onResetZoom}>Reset</button>
        <button onClick={onZoomOut}>-</button>
        <select value={zoom} onChange={onSelectZoom}>
          {zoomOptions.map((option: number) => (
            <option key={option} value={option}>
              {option}%
            </option>
          ))}
        </select>
        <button onClick={onZoomIn}>+</button>
      </div>
    </div>
  )
}
