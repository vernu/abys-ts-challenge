import { useState } from 'react'
import { TreeProvider } from './context/TreeContext'

import './App.css'
import Header from './components/header/Header'
import DraggableContainer from './components/containers/DraggableContainer'
import TreeView from './components/tree/TreeView'

const App = () => {
  const zoomOptions = [25, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150]
  const [zoom, setZoom] = useState(100)
  const handleZoomOut = () =>
    setZoom(zoomOptions[zoomOptions.indexOf(zoom) - 1] || zoom)
  const handleZoomIn = () =>
    setZoom(zoomOptions[zoomOptions.indexOf(zoom) + 1] || zoom)
  const handleResetZoom = () => setZoom(100)
  const handleSelectZoom = (e: any) => setZoom(parseFloat(e.target.value))

  return (
    <>
      <Header
        zoom={zoom}
        zoomOptions={zoomOptions}
        onResetZoom={handleResetZoom}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onSelectZoom={handleSelectZoom}
      />
      <TreeProvider>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: `scale(${zoom / 100})`,
          }}
        >
          <DraggableContainer>
            <TreeView />
          </DraggableContainer>
        </div>
      </TreeProvider>
    </>
  )
}

export default App
