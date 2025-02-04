import React, { useEffect, useState } from 'react'
import { Button, Drawer, Form, FormProps, Input, Select, Switch } from 'antd'
import api from '@/api'
import useAsync from '@/hooks/useAsync'

type Props = {
  open: boolean
  loading: boolean
  onChange: (value: boolean) => void
  onAdd: (value: API.User) => Promise<void>
}

type FormType = API.AddUser

const DataAdd: React.FC<Props> = (props) => {
  const [form] = Form.useForm()
  const [roleList, setRoleList] = useState<API.Role[]>([])

  useEffect(() => {
    if (props.open) {
      form.resetFields()
    }
  }, [props.open])

  useAsync(async () => {
    await getRoleList()
  })

  const onClose = () => {
    props.onChange(false)
  }

  const getRoleList = async () => {
    const res = await api.getRoleList()
    if (res.code === 200) {
      setRoleList(res.data)
    }
  }

  const handleAdd: FormProps<FormType>['onFinish'] = async (values) => {
    await props.onAdd(values)
  }

  return (
    <>
      <Drawer title="新增管理员" open={props.open} onClose={onClose}>
        <Form form={form} onFinish={handleAdd} layout="vertical">
          <Form.Item<FormType> label="用户名" name="username" rules={[{ required: true, message: '请输入用户名' }]}>
            <Input />
          </Form.Item>
          <Form.Item<FormType> label="密码" name="password" rules={[{ required: true, message: '请输入密码' }]}>
            <Input.Password />
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

export default DataAdd
