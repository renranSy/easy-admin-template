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
  const handleEdit = async () => {
    await props.onEdit(props.roleId, checkedIdList)
  }

  const getList = async () => {
    setCheckedIdList([])
    const res = await api.getRolePermission(props.roleId)
    setCheckedIdList(res.data.list)
  }

  const getMenuList = async () => {
    const res = await api.getMenuList()
    setPermissionList(transformMenuItems(res.data))
  }

  const transformMenuItems = (items: API.Menu[]): TreeDataNode[] => {
    return items.map((item) => ({
      key: item.id || '',
      title: <>{item.name}</>,
      children: item.children ? transformMenuItems(item.children) : undefined
    }))
  }

  const onCheck: TreeProps['onCheck'] = (checkedKeys) => {
    setCheckedIdList(checkedKeys as number[])
  }

  useAsync(async () => {
    if (props.open) {
      await getList()
      await getMenuList()
    }
  }, [props.open])

  return (
    <Modal open={props.open} title="编辑权限" onOk={handleEdit} onCancel={() => props.onChange(false)}>
      <Tree checkable selectable={false} checkedKeys={checkedIdList} onCheck={onCheck} treeData={permissionList} />
    </Modal>
  )
}

export default PermissionEdit
