import React, { useEffect } from 'react'
import { Button, Drawer, Form, FormProps, Input, InputNumber, Switch } from 'antd'

type Props = {
  open: boolean
  loading: boolean
  onChange: (value: boolean) => void
  onAdd: (value: API.Role) => Promise<void>
}

type FormType = API.Role

const DataAdd: React.FC<Props> = (props) => {
  const [form] = Form.useForm()

  useEffect(() => {
    if (props.open) {
      form.resetFields()
    }
  }, [props.open])

  const onClose = () => {
    props.onChange(false)
  }

  const handleAdd: FormProps<FormType>['onFinish'] = async (values) => {
    await props.onAdd(values)
  }

  return (
    <>
      <Drawer title="新增角色" open={props.open} onClose={onClose}>
        <Form form={form} onFinish={handleAdd} layout="vertical">
          <Form.Item<FormType> label="角色名" name="name" rules={[{ required: true, message: '请输入用户名' }]}>
            <Input />
          </Form.Item>
          <Form.Item<FormType> label="角色描述" name="description" initialValue={''}>
            <Input />
          </Form.Item>
          <Form.Item<FormType> label="排序值" name="sequence" initialValue={0}>
            <InputNumber />
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
