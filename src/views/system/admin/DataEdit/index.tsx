import React, { useEffect, useState } from 'react'
import { Button, Drawer, Form, FormProps, Input, Select, Switch } from 'antd'
import useAsync from '@/hooks/useAsync'
import api from '@/api'

type Props = {
  data?: API.User
  open: boolean
  loading: boolean
  onChange: (value: boolean) => void
  onEdit: (id: number, value: API.EditUser) => Promise<void>
}

type FormType = {
  username: string
  email: string
  roleIdList: string
  status: number
}

const DataEdit: React.FC<Props> = (props) => {
  const [form] = Form.useForm()
  const [roleList, setRoleList] = useState<API.Role[]>([])

  useEffect(() => {
    if (props.open && props.data) {
      form.setFieldsValue(props.data)
      console.log(props.data)
    }
  }, [props.open])

  useAsync(async () => {
    await getRoleList()
  })

  const getRoleList = async () => {
    const res = await api.getRoleList()
    if (res.code === 200) {
      setRoleList(res.data)
    }
  }

  const onClose = () => {
    props.onChange(false)
  }

  const handleEdit: FormProps<FormType>['onFinish'] = async (values) => {
    await props.onEdit(props.data?.id || 0, values)
  }

  return (
    <>
      <Drawer title="编辑管理员" open={props.open} onClose={onClose}>
        <Form form={form} onFinish={handleEdit} layout="vertical">
          <Form.Item<FormType> label="用户名" name="username" rules={[{ required: true, message: '请输入用户名' }]}>
            <Input />
          </Form.Item>
          <Form.Item<FormType>
            label="邮箱"
            name="email"
            rules={[
              {
                pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                message: '邮箱格式错误'
              }
            ]}>
            <Input />
          </Form.Item>
          <Form.Item<FormType> label="角色" name="roleIdList">
            <Select mode="multiple" options={roleList.map((item) => ({ label: item.name, value: item.id }))} />
          </Form.Item>
          <Form.Item<FormType>
            label="状态"
            name="status"
            normalize={(value: boolean) => (value ? 1 : 0)}
            initialValue={1}>
            <Switch />
          </Form.Item>
          <Form.Item>
            <Button loading={props.loading} type="primary" block htmlType="submit">
              保存
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  )
}

export default DataEdit
