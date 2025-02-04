import React, { useEffect, useState } from 'react'
import { Button, message, Popconfirm, Space, Table, TableProps, Tag } from 'antd'
import { TableRowSelection } from 'antd/es/table/interface'
import { DeleteOutlined, EditOutlined, UserOutlined } from '@ant-design/icons'
import PermissionEdit from '@/views/system/role/PermissionEdit'
import api from '@/api'
import IButton from '@/components/IButton'

type DataType = API.Role

type Props = {
  onDelete: (value: number) => Promise<void>
  onOpenEdit: (value: API.Role) => Promise<void>
  data: DataType[]
  getData: () => Promise<void>
  loading: boolean
}
const DataTable: React.FC<Props> = ({ data, loading, onDelete, onOpenEdit, getData }) => {
  const [openPermissionEdit, setOpenPermissionEdit] = useState(false)
  const [permissionEditLoading, setPermissionEditLoading] = useState(false)
  const [roleId, setRoleId] = useState(0)
  const handleOpenPermissionEdit = (id: number) => {
    setOpenPermissionEdit(true)
    setRoleId(id)
  }
  const handleEditPermission = async (id: number, menuIdList: number[]) => {
    setPermissionEditLoading(true)
    const res = await api.updateRolePermission(id, { idList: menuIdList.toString() })
    setPermissionEditLoading(false)
    if (res.code === 200) {
      message.success(res.message)
      await getData()
      setOpenPermissionEdit(false)
    } else {
      message.error(res.message)
    }
  }
  const columns: TableProps<DataType>['columns'] = [
    {
      title: '角色名',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '角色描述',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: '排序值',
      dataIndex: 'sequence',
      key: 'sequence'
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      render: (value) => <>{value ? <Tag color="success">启用</Tag> : <Tag color="warning">禁用</Tag>}</>
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      key: 'createdAt'
    },
    {
      title: '操作',
      key: 'action',
      align: 'center',
      width: 100,
      render: (role: API.Role) => (
        <Space>
          <IButton
            code="RoleManage.edit"
            onClick={() => onOpenEdit(role)}
            icon={<EditOutlined />}
            color="primary"
            variant="outlined"
            size="small"></IButton>
          <IButton
            code="RoleManage.edit"
            onClick={() => handleOpenPermissionEdit(role.id || 0)}
            icon={<UserOutlined />}
            color="primary"
            variant="outlined"
            size="small"></IButton>
          <Popconfirm title="是否确认删除？" onConfirm={() => onDelete(role.id || 0)}>
            <IButton
              code="RoleManage.delete"
              icon={<DeleteOutlined />}
              color="danger"
              variant="outlined"
              size="small"></IButton>{' '}
          </Popconfirm>
        </Space>
      )
    }
  ]
  const rowSelection: TableRowSelection<DataType> = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows)
    }
  }
  return (
    <>
      <Table<API.Role>
        columns={columns}
        dataSource={data}
        loading={loading}
        rowKey="id"
        size="small"
        bordered
        rowSelection={rowSelection}
      />
      <PermissionEdit
        open={openPermissionEdit}
        loading={permissionEditLoading}
        onChange={setOpenPermissionEdit}
        roleId={roleId}
        onEdit={handleEditPermission}
      />
    </>
  )
}

export default DataTable
