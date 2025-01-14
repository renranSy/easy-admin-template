import React, { useEffect } from 'react'
import { Button, Col, Form, Input, InputNumber, Modal, Radio, Row, Select, Space, Switch } from 'antd'
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import { useAutoAnimate } from '@formkit/auto-animate/react'

type Props = {
  open: boolean
  loading: boolean
  parentMenu: API.Menu | null
  onChange: (value: boolean) => void
  onAdd: (value: API.Menu) => Promise<void>
}

type FormType = API.Menu

type SubFormType = API.MenuResource[]

const DataAdd: React.FC<Props> = (props) => {
  const [form] = Form.useForm()
  const [parent] = useAutoAnimate()

  useEffect(() => {
    if (props.open) {
      form.resetFields()
    }
  }, [props.open])

  const onClose = () => {
    props.onChange(false)
  }

  const handleAdd = async () => {
    let values
    try {
      values = await form.validateFields()
    } catch (error) {
      return
    }
    await props.onAdd({ ...values, parentId: props.parentMenu?.id || 0 })
  }

  return (
    <>
      <Modal title="新增菜单" open={props.open} onOk={handleAdd} onCancel={onClose} width={800}>
        <Form form={form} onFinish={handleAdd} layout="vertical">
          <p className="font-bold mt-4 mb-2">基本信息</p>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item<FormType> label="上级菜单">
                <Input value={props.parentMenu?.name || ''} disabled />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item<FormType> label="菜单类型" name="type" initialValue="page">
                <Radio.Group
                  options={[
                    { label: '页面', value: 'page' },
                    { label: '按钮', value: 'button' }
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item<FormType> label="菜单名称" name="name" rules={[{ required: true, message: '请输入菜单名称' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item<FormType> label="菜单代码" name="code" rules={[{ required: true, message: '请输入菜单代码' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item<FormType> label="访问路径" name="path" rules={[{ required: true, message: '请输入访问路径' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item<FormType> label="描述" name="description" initialValue="">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item<FormType> label="排序值" name="sequence" initialValue={0}>
                <InputNumber className="w-full" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item<FormType>
                label="状态"
                name="status"
                initialValue={1}
                normalize={(value: boolean) => (value ? 1 : 0)}>
                <Switch defaultChecked checkedChildren="启用" unCheckedChildren="禁用" />
              </Form.Item>
            </Col>
          </Row>
          <p className="font-bold mt-4 mb-2">API资源配置</p>
          <Row gutter={16} className="mb-3">
            <Col span={4}>请求方法</Col>
            <Col span={16}>请求路径</Col>
            <Col span={4}>操作</Col>
          </Row>
          <div ref={parent}>
            <Form.List name="menuResources" initialValue={[{}]}>
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }, index, array) => (
                    <Row gutter={16} key={key}>
                      <Col span={4}>
                        <Form.Item<SubFormType> {...restField} name={[name, 'method']} initialValue="GET">
                          <Select
                            options={[
                              { value: 'GET' },
                              { value: 'POST' },
                              { value: 'PUT' },
                              { value: 'DELETE' },
                              { value: 'PATCH' },
                              { value: 'HEAD' }
                            ]}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={16}>
                        <Form.Item<SubFormType> {...restField} name={[name, 'path']}>
                          <Input allowClear />
                        </Form.Item>
                      </Col>
                      <Col span={4}>
                        <Form.Item>
                          <Space>
                            {index === array.length - 1 ? (
                              <Button
                                onClick={() => add()}
                                icon={<PlusOutlined />}
                                color="default"
                                variant="outlined"></Button>
                            ) : null}
                            {array.length !== 1 ? (
                              <Button
                                onClick={() => remove(name)}
                                icon={<DeleteOutlined />}
                                color="default"
                                variant="outlined"></Button>
                            ) : null}
                          </Space>
                        </Form.Item>
                      </Col>
                    </Row>
                  ))}
                </>
              )}
            </Form.List>
          </div>
        </Form>
      </Modal>
    </>
  )
}

export default DataAdd
