import React, { forwardRef, useImperativeHandle } from 'react'
import { Button, Popconfirm, Popover, Space, Table, TableProps, Tag } from 'antd'
import { TableRowSelection } from 'antd/es/table/interface'
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import IButton from '@/components/IButton'

type DataType = API.Menu

export type TableColumn = { key: string; label: string; isShow: boolean }

type Props = {
  onDelete: (value: number) => Promise<void>
  onOpenEdit: (id: number) => void
  onOpenAdd: (value: API.Menu) => void
  data: DataType[]
  loading: boolean
  hideColumns: string[]
}

export type TableRef = {
  columns: TableColumn[]
}

const DataTable = forwardRef<TableRef, Props>(
  ({ data, loading, hideColumns, onDelete, onOpenEdit, onOpenAdd }, ref) => {
    const columns: TableProps<DataType>['columns'] = [
      {
        title: '菜单名称',
        dataIndex: 'name',
        key: 'name',
        width: 200,
        hidden: hideColumns.includes('name')
      },
      {
        title: '菜单类型',
        dataIndex: 'type',
        key: 'type',
        width: 100,
        align: 'center',
        hidden: hideColumns.includes('type')
      },
      {
        title: '代码',
        dataIndex: 'code',
        key: 'code',
        hidden: hideColumns.includes('code')
      },
      {
        title: '路径',
        dataIndex: 'path',
        key: 'path',
        hidden: hideColumns.includes('path')
      },
      {
        title: '描述',
        dataIndex: 'description',
        key: 'description',
        hidden: hideColumns.includes('description')
      },
      {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        align: 'center',
        render: (value) => <>{value ? <Tag color="success">启用</Tag> : <Tag color="warning">禁用</Tag>}</>,
        hidden: hideColumns.includes('status')
      },
      {
        title: '排序值',
        dataIndex: 'sequence',
        key: 'sequence',
        hidden: hideColumns.includes('sequence')
      },
      {
        title: '操作',
        key: 'action',
        align: 'center',
        width: 120,
        render: (user: API.User) => (
          <Space>
            <IButton
              code="MenuManage.edit"
              onClick={() => onOpenEdit(user.id || 0)}
              icon={<EditOutlined />}
              color="primary"
              variant="outlined"
              size="small"></IButton>
            <Popover content="添加子级菜单">
              <IButton
                code="MenuManage.add"
                onClick={() => onOpenAdd(user)}
                icon={<PlusOutlined />}
                color="primary"
                variant="outlined"
                size="small"></IButton>
            </Popover>
            <Popconfirm title="是否确认删除？" onConfirm={() => onDelete(user.id || 0)}>
              <IButton
                code="MenuManage.delete"
                icon={<DeleteOutlined />}
                color="danger"
                variant="outlined"
                size="small"></IButton>{' '}
            </Popconfirm>
          </Space>
        ),
        hidden: hideColumns.includes('options')
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

    useImperativeHandle(ref, () => ({
      columns: columns.map(({ key, title }) => ({
        key: key?.toString() || '',
        label: title?.toString() || '',
        isShow: true
      }))
    }))

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
)
DataTable.displayName = 'DataTable'
export default DataTable
