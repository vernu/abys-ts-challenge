import { createContext, useState } from 'react'
import { generateRandomString } from '../utils/index'

export interface Node {
  id: string
  label: string
  children: Node[]
  isRoot: boolean
}

export const TreeContext = createContext<any>({})

const initialTreeState: Node[] = [
  { id: generateRandomString(), label: 'Category', children: [], isRoot: true },
]

interface TreeProviderProps {
  children: React.ReactNode
}

export const TreeProvider = ({ children }: TreeProviderProps) => {
  const [treeData, setTreeData] = useState<Node[]>(initialTreeState)

  const addNode = (parentId: string, label = '') => {
    const parent = findNodeById(treeData, parentId)
    if (parent) {
      const newNode = {
        id: generateRandomString(),
        label,
        children: [],
        isRoot: false,
      }
      parent.children.push(newNode)
      setTreeData([...treeData])
    }
  }

  const deleteNode = (nodeId: string) => {
    const filteredTree = filterNodeById(treeData, nodeId)
    setTreeData(filteredTree)
  }

  const updateNode = (nodeId: string, newLabel: string) => {
    const node = findNodeById(treeData, nodeId)
    if (node) {
      node.label = newLabel
      setTreeData([...treeData])
    }
  }

  const findNodeById = (tree: Node[], id: string): Node | null => {
    for (const node of tree) {
      if (node.id === id) {
        return node
      }
      if (node.children?.length > 0) {
        const result = findNodeById(node.children, id)
        if (result) {
          return result
        }
      }
    }
    return null
  }

  const filterNodeById = (tree: Node[], id: string): Node[] => {
    return tree.filter((node) => {
      if (node.children?.length > 0) {
        node.children = filterNodeById(node.children, id)
      }
      return node.id !== id
    })
  }

  return (
    <TreeContext.Provider value={{ treeData, addNode, deleteNode, updateNode }}>
      {children}
    </TreeContext.Provider>
  )
}
