import { useState } from 'react'
import { Node, TreeProvider } from './context/TreeContext'
import { useTree } from './hooks/useTree'
import './App.css'
import Header from './components/header/Header'

interface TreeItemProps {
  node: Node
}

const TreeItem = ({ node }: TreeItemProps) => {
  const { addNode, deleteNode, updateNode } = useTree()

  const handleAdd = () => {
    addNode(node.id, '')
  }

  const [isEditing, setIsEditing] = useState(false)
  const [formValue, setFormValue] = useState(node.label)

  const handleDelete = () => {
    deleteNode(node.id)
  }

  const handleEdit = () => {
    if (isEditing) {
      updateNode(node.id, formValue)
    }
    setIsEditing(!isEditing)
  }

  return (
    <div className='tree'>
      <div className='node-container'>
        <div className={node.isRoot ? 'root-node-content' : 'node-content'}>
          {isEditing ? (
            <div>
              <input
                value={formValue}
                onChange={(e) => setFormValue(e.target.value)}
              />
            </div>
          ) : (
            <div>{node.label}</div>
          )}
        </div>

        <div className='row node-actions-container'>
          <button onClick={handleAdd}>+</button>
          {!node.isRoot && (
            <>
              <button
                onClick={handleEdit}
                className={isEditing ? 'btn-green' : 'btn-yellow'}
              >
                {isEditing ? '✅' : '✏️'}
              </button>
              <button onClick={handleDelete} className='btn-red'>
                x
              </button>
            </>
          )}
        </div>
      </div>

      {node.children?.length > 0 && (
        <div className='node-children'>
          {node.children?.map((child) => (
            <TreeItem key={child.id} node={child} />
          ))}
        </div>
      )}
    </div>
  )
}

const TreeView = () => {
  const { treeData } = useTree()

  return (
    <div>
      {treeData.map((node: Node) => (
        <TreeItem key={node.id} node={node} />
      ))}
    </div>
  )
}

const App = () => {
  return (
    <>
      <Header />
      <TreeProvider>
        <TreeView />
      </TreeProvider>
    </>
  )
}

export default App
