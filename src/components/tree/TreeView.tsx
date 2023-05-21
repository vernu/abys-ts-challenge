import { Node } from '../../context/TreeContext'
import { useTree } from '../../hooks/useTree'
import TreeItem from './TreeItem'

export default function TreeView() {
  const { treeData } = useTree()

  return (
    <div>
      {treeData.map((node: Node) => (
        <TreeItem key={node.id} node={node} />
      ))}
    </div>
  )
}
