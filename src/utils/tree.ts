type TreeConfigOptions = {
  childProps: string
}
export const traverseTreeValues = <T, V>(tree: T[], getValue: (node: T) => V, options?: TreeConfigOptions): V[] => {
  const result: V[] = []
  const { childProps } = options || {
    childProps: 'children'
  }

  const dfs = (treeNode: T) => {
    const value = getValue(treeNode)
    result.push(value)
    const children = (treeNode as Record<string, any>)?.[childProps]
    if (!children) {
      return
    }
    if (children.length > 0) {
      for (const child of children) {
        dfs(child)
      }
    }
  }

  for (const treeNode of tree) {
    dfs(treeNode)
  }

  return result
}
