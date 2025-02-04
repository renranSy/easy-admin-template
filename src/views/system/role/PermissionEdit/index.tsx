import React, { useState } from 'react'
import { Modal, Tree, TreeDataNode, TreeProps } from 'antd'
import api from '@/api'
import useAsync from '@/hooks/useAsync'

type Props = {
  open: boolean
  loading: boolean
  onChange: (value: boolean) => void
  roleId: number
  onEdit: (id: number, value: number[]) => Promise<void>
}

const PermissionEdit: React.FC<Props> = (props) => {
  const [permissionList, setPermissionList] = useState<TreeDataNode[]>([])
  const [checkedIdList, setCheckedIdList] = useState<number[]>([])
  const [halfCheckedKeys, setHalfCheckedKeys] = useState<number[]>([])

  const handleEdit = async () => {
    await props.onEdit(props.roleId, getAllKeys())
  }

  const getList = async (menuList: TreeDataNode[]) => {
    setCheckedIdList([])
    const res = await api.getRolePermission(props.roleId)
    setCheckedIdList(setTreeKeys(res.data.list, menuList))
  }

  const getMenuList = async () => {
    const res = await api.getMenuList()
    const list = transformMenuItems(res.data)
    setPermissionList(list)
    return list
  }

  const transformMenuItems = (items: API.Menu[]): TreeDataNode[] => {
    return items.map((item) => ({
      key: item.id || '',
      title: <>{item.name}</>,
      children: item.children ? transformMenuItems(item.children) : undefined
    }))
  }

  const onCheck: TreeProps['onCheck'] = (checkedKeys, info) => {
    setCheckedIdList(checkedKeys as number[])
    setHalfCheckedKeys(info.halfCheckedKeys as number[])
  }

  const getAllKeys = () => {
    return [...checkedIdList, ...halfCheckedKeys]
  }

  const setTreeKeys = (selectedKeys: number[], menuList: TreeDataNode[]) => {
    const keys: number[] = []

    const postorder = (root: TreeDataNode) => {
      const stack: TreeDataNode[] = [root]
      const outStack: TreeDataNode[] = []
      while (stack.length > 0) {
        const node = stack.pop()
        if (node) {
          outStack.push(node)
        }
        if (node?.children) {
          stack.push(...node.children)
        }
      }
      while (outStack.length > 0) {
        const node = outStack.pop()
        if (node?.children) {
          if (node.children.every((item) => keys.includes(item.key as number))) {
            keys.push(node.key as number)
          }
        } else {
          if (selectedKeys.includes(node!.key as number)) {
            keys.push(node!.key as number)
          }
        }
      }
    }
    menuList.forEach((root) => {
      postorder(root)
    })

    setHalfCheckedKeys(selectedKeys.filter((item) => !keys.includes(item)))
    return keys
  }

  useAsync(async () => {
    if (props.open) {
      const menuList = await getMenuList()
      await getList(menuList)
    }
  }, [props.open])

  return (
    <Modal open={props.open} title="编辑权限" onOk={handleEdit} onCancel={() => props.onChange(false)}>
      <Tree checkable selectable={false} checkedKeys={checkedIdList} onCheck={onCheck} treeData={permissionList} />
    </Modal>
  )
}

export default PermissionEdit
