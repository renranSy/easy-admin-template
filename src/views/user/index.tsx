import { Button, Space, Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import React from 'react'

interface DataType {
  key: string
  name: string
  age: number
  address: string
  tags: { name: string; color: string }[]
}

const columns: ColumnsType<DataType> = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: '标签',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: { name: string; color: string }[]) => (
      <span>
        {tags.map((tag) => {
          return (
            <Tag color={tag.color} key={tag.name}>
              {tag.name}
            </Tag>
          )
        })}
      </span>
    )
  },
  {
    title: '操作',
    key: 'action',
    render: () => (
      <Space size="middle">
        <a>修改</a>
        <a>删除</a>
      </Space>
    )
  }
]

const data: DataType[] = [
  {
    key: '1',
    name: '荏苒、',
    age: 32,
    address: '湖北工业大学',
    tags: [
      { name: '帅气', color: 'success' },
      {
        name: '开发人员',
        color: 'processing'
      },
      { name: '前端', color: 'warning' }
    ]
  },
  {
    key: '2',
    name: '橙子🍊',
    age: 42,
    address: '湖北工业大学',
    tags: [
      { name: '美丽', color: 'success' },
      {
        name: '无与伦比',
        color: 'processing'
      },
      { name: '独一无二', color: 'warning' }
    ]
  },
  {
    key: '3',
    name: '路人甲',
    age: 32,
    address: '地球村12138号',
    tags: [{ name: '失败者', color: 'error' }]
  },
  {
    key: '4',
    name: '路人甲',
    age: 32,
    address: '地球村12138号',
    tags: [{ name: '失败者', color: 'error' }]
  },
  {
    key: '5',
    name: '路人甲',
    age: 32,
    address: '地球村12138号',
    tags: [{ name: '失败者', color: 'error' }]
  },
  {
    key: '6',
    name: '路人甲',
    age: 32,
    address: '地球村12138号',
    tags: [{ name: '失败者', color: 'error' }]
  },
  {
    key: '7',
    name: '路人甲',
    age: 32,
    address: '地球村12138号',
    tags: [{ name: '失败者', color: 'error' }]
  },
  {
    key: '8',
    name: '路人甲',
    age: 32,
    address: '地球村12138号',
    tags: [{ name: '失败者', color: 'error' }]
  },
  {
    key: '9',
    name: '路人甲',
    age: 32,
    address: '地球村12138号',
    tags: [{ name: '失败者', color: 'error' }]
  },
  {
    key: '10',
    name: '路人甲',
    age: 32,
    address: '地球村12138号',
    tags: [{ name: '失败者', color: 'error' }]
  }
]

const User: React.FC = () => {
  return (
    <div className="p-3 bg-white">
      <Button type="primary">添加</Button>
      <Table
        className="mt-2"
        columns={columns}
        pagination={{ position: ['bottomLeft'], pageSize: 9 }}
        dataSource={data}
      />
    </div>
  )
}

export default User
