import './Header.css'

export default function Header() {
  return (
    <div className='header-container'>
      <div className='title'>
        Service
        <span className='yellow-badge'>0</span>
      </div>

      <div className='header-actions'>
        <button className='purple-btn'>ListView</button>
        <button>Reset</button>
        <button>-</button>
        <button>100%</button>
        <button>+</button>
      </div>
    </div>
  )
}
