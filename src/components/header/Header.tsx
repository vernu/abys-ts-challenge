import './Header.css'

interface HeaderProps {
  zoom: {
    options: number[]
    selected: number
    selectZoom: (e: any) => void
    zoomIn: () => void
    zoomOut: () => void
    resetZoom: () => void
  }
}

export default function Header({ zoom }: HeaderProps) {
  return (
    <div className='header-container'>
      <div className='title'>
        Service
        <span className='yellow-badge'>0</span>
      </div>

      <div className='header-actions'>
        <button className='purple-btn'>ListView</button>
        <button onClick={zoom.resetZoom}>Reset</button>
        <button onClick={zoom.zoomOut}>-</button>
        <select value={zoom.selected} onChange={zoom.selectZoom}>
          {zoom.options.map((option: number) => (
            <option key={option} value={option}>
              {option}%
            </option>
          ))}
        </select>
        <button onClick={zoom.zoomIn}>+</button>
      </div>
    </div>
  )
}
