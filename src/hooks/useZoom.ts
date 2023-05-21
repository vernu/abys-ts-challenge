import { useState } from 'react'

export const useZoom = () => {
  const options = [25, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150]

  const [selected, setSelected] = useState(100)

  const zoomOut = () =>
    setSelected(options[options.indexOf(selected) - 1] || selected)

  const zoomIn = () =>
    setSelected(options[options.indexOf(selected) + 1] || selected)

  const resetZoom = () => setSelected(100)

  const selectZoom = (e: any) => setSelected(parseFloat(e.target.value))

  return {
    options,
    selected,
    zoomOut,
    zoomIn,
    resetZoom,
    selectZoom,
  }
}
