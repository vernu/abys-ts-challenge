import { useContext } from 'react'
import { TreeContext } from '../context/TreeContext'

export const useTree = () => {
  return useContext(TreeContext)
}
