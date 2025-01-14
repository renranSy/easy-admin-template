import React, { useState } from 'react'
import useAsync from '@/hooks/useAsync'
import { Button, message, Space } from 'antd'
import { DeleteFilled, PlusOutlined, ReloadOutlined } from '@ant-design/icons'
import api from '@/api'
import DataTable from '@/views/system/admin/DataTable'
import DataAdd from '@/views/system/admin/DataAdd'
import DataEdit from '@/views/system/admin/DataEdit'

const Admin = () => {
  const [adminList, setAdminList] = useState<API.User[]>([])
  const [tableLoading, setTableLoading] = useState(false)
  const [roleList, setRoleList] = useState<API.Role[]>([])

  const [openAdd, setOpenAdd] = useState(false)
  const [addLoading, setAddLoading] = useState(false)

  const [openEdit, setOpenEdit] = useState(false)
  const [editLoading, setEditLoading] = useState(false)
  const [editUser, setEditUser] = useState<API.User>()

  useAsync(async () => {
    await getData()
    await getRoleList()
  })

  const getData = async () => {
    setTableLoading(true)
    const res = await api.getUserList()
    setTableLoading(false)
    setAdminList(res.data)
  }

  const getRoleList = async () => {
    const res = await api.getRoleList()
    setRoleList(res.data)
  }

  const handleEdit = async (values: API.User) => {
    setEditUser(values)
    setOpenEdit(true)
  }

  const addUser = async (values: API.User) => {
    setAddLoading(true)
    const res = await api.addUser(values)
    setAddLoading(false)
    if (res.code === 200) {
      message.success(res.message)
      await getData()
      setOpenAdd(false)
    } else {
      message.error(res.message)
    }
  }

  const updateUser = async (id: number, user: API.EditUser) => {
    setEditLoading(true)
    const res = await api.updateUser(id, user)
    setEditLoading(false)
    if (res.code === 200) {
      message.success(res.message)
      await getData()
      setOpenEdit(false)
    } else {
      message.error(res.message)
    }
  }

  const deleteUser = async (id: number) => {
    setTableLoading(true)
    const res = await api.deleteUser(id)
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
          <div className="font-bold text-[1rem]">用户列表</div>
          <Space>
            <Button onClick={() => setOpenAdd(true)} color="primary" variant="outlined" icon={<PlusOutlined />}>
              新增
            </Button>
            <Button color="danger" variant="outlined" icon={<DeleteFilled />}>
              批量删除
            </Button>
            <Button onClick={getData} color="default" variant="outlined" icon={<ReloadOutlined />}>
              刷新
            </Button>
          </Space>
        </div>
        <div className="mt-4">
          <DataTable
            onDelete={deleteUser}
            onOpenEdit={handleEdit}
            data={adminList}
            roleList={roleList}
            loading={tableLoading}
          />
        </div>
      </div>
      <DataAdd open={openAdd} loading={addLoading} onChange={setOpenAdd} onAdd={addUser} />
      <DataEdit open={openEdit} data={editUser} loading={editLoading} onChange={setOpenEdit} onEdit={updateUser} />
    </>
  )
}

export default Admin
