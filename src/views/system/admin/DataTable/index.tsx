import React from 'react'
import { Button, Popconfirm, Space, Table, TableProps, Tag } from 'antd'
import { TableRowSelection } from 'antd/es/table/interface'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import IButton from '@/components/IButton'

type DataType = API.User

type Props = {
  onDelete: (value: number) => Promise<void>
  onOpenEdit: (value: API.User) => Promise<void>
  data: DataType[]
  roleList: API.Role[]
  loading: boolean
}
const DataTable: React.FC<Props> = ({ data, roleList, loading, onDelete, onOpenEdit }) => {
  const columns: TableProps<DataType>['columns'] = [
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username'
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: '角色',
      dataIndex: 'roleIdList',
      key: 'roleIdList',
      render: (value: number[]) => (
        <>
          {roleList
            .filter((item) => value.includes(item.id || 0))
            .map((item) => (
              <Tag key={item.id}>{item.name}</Tag>
            ))}
        </>
      )
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      render: (value: boolean) => <>{value ? <Tag color="success">启用</Tag> : <Tag color="warning">禁用</Tag>}</>
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
      render: (user: API.User) => (
        <Space>
          <IButton
            code="AdminManage.edit"
            onClick={() => onOpenEdit(user)}
            icon={<EditOutlined />}
            color="primary"
            variant="outlined"
            size="small"></IButton>
          <Popconfirm title="是否确认删除？" onConfirm={() => onDelete(user.id || 0)}>
            <IButton
              code="AdminManage.delete"
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
    <Table<API.User>
      columns={columns}
      dataSource={data}
      loading={loading}
      rowKey="id"
      size="small"
      bordered
      rowSelection={rowSelection}
    />
  )
}

export default DataTable
