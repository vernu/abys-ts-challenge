import { TreeProvider } from './context/TreeContext'
import './App.css'
import Header from './components/header/Header'
import DraggableContainer from './components/containers/DraggableContainer'
import TreeView from './components/tree/TreeView'
import { useZoom } from './hooks/useZoom'
import ZoomableContainer from './components/containers/ZoomableContainer'

const App = () => {
  const zoom = useZoom()

  return (
    <>
      <Header zoom={zoom} />
      <TreeProvider>
        <ZoomableContainer zoomValue={zoom.selected}>
          <DraggableContainer>
            <TreeView />
          </DraggableContainer>
        </ZoomableContainer>
      </TreeProvider>
    </>
  )
}

export default App
