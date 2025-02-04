import React, { useState } from 'react'
import useAsync from '@/hooks/useAsync'
import { Button, message, Space } from 'antd'
import { DeleteFilled, PlusOutlined, ReloadOutlined } from '@ant-design/icons'
import api from '@/api'
import DataTable from '@/views/system/role/DataTable'
import DataAdd from '@/views/system/role/DataAdd'
import DataEdit from '@/views/system/role/DataEdit'
import IButton from '@/components/IButton'

const Role = () => {
  const [roleList, setRoleList] = useState<API.Role[]>([])
  const [tableLoading, setTableLoading] = useState(false)

  const [openAdd, setOpenAdd] = useState(false)
  const [addLoading, setAddLoading] = useState(false)

  const [openEdit, setOpenEdit] = useState(false)
  const [editLoading, setEditLoading] = useState(false)
  const [editRole, setEditRole] = useState<API.Role>()

  useAsync(async () => {
    await getData()
  })

  const getData = async () => {
    setTableLoading(true)
    const res = await api.getRoleList()
    setTableLoading(false)
    setRoleList(res.data)
  }

  const handleEdit = async (values: API.Role) => {
    setEditRole(values)
    setOpenEdit(true)
  }

  const addRole = async (values: API.Role) => {
    setAddLoading(true)
    const res = await api.addRole(values)
    setAddLoading(false)
    if (res.code === 200) {
      message.success(res.message)
      await getData()
      setOpenAdd(false)
    } else {
      message.error(res.message)
    }
  }

  const updateRole = async (id: number, user: API.Role) => {
    setEditLoading(true)
    const res = await api.updateRole(id, user)
    setEditLoading(false)
    if (res.code === 200) {
      message.success(res.message)
      await getData()
      setOpenEdit(false)
    } else {
      message.error(res.message)
    }
  }

  const deleteRole = async (id: number) => {
    setTableLoading(true)
    const res = await api.deleteRole(id)
    setTableLoading(false)
    if (res.code === 200) {
      message.success(res.message)
      await getData()
    } else {
      message.error(res.message)
    }
  }

  return (
    <>
      <div className="p-3 bg-white shadow-sm rounded">
        <div className="flex justify-between">
          <div className="font-bold text-[1rem]">角色列表</div>
          <Space>
            <IButton
              code="RoleManage.add"
              onClick={() => setOpenAdd(true)}
              color="primary"
              variant="outlined"
              icon={<PlusOutlined />}>
              新增
            </IButton>
            <IButton code="RoleManage.delete" color="danger" variant="outlined" icon={<DeleteFilled />}>
              批量删除
            </IButton>
            <Button onClick={getData} color="default" variant="outlined" icon={<ReloadOutlined />}>
              刷新
            </Button>
          </Space>
        </div>
        <div className="mt-4">
          <DataTable
            onDelete={deleteRole}
            onOpenEdit={handleEdit}
            getData={getData}
            data={roleList}
            loading={tableLoading}
          />
        </div>
      </div>
      <DataAdd open={openAdd} loading={addLoading} onChange={setOpenAdd} onAdd={addRole} />
      <DataEdit open={openEdit} data={editRole} loading={editLoading} onChange={setOpenEdit} onEdit={updateRole} />
    </>
  )
}

export default Role
