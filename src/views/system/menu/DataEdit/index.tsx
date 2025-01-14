import React, { useState } from 'react'
import { Button, Col, Form, Input, InputNumber, Modal, Radio, Row, Select, Space, Switch } from 'antd'
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import useAsync from '@/hooks/useAsync'
import api from '@/api'

type Props = {
  open: boolean
  menuId: number
  loading: boolean
  onChange: (value: boolean) => void
  onEdit: (id: number, value: API.Menu) => Promise<void>
}

type FormType = API.Menu

type SubFormType = API.MenuResource[]

const DataEdit: React.FC<Props> = (props) => {
  const [form] = Form.useForm()
  const [parent] = useAutoAnimate()

  useAsync(async () => {
    if (props.open) {
      await getMenu()
    }
  }, [props.open])

  const onClose = () => {
    props.onChange(false)
  }

  const getMenu = async () => {
    const res = await api.getMenu(props.menuId)
    form.setFieldsValue(res.data)
  }

  const handleEdit = async () => {
    let values
    try {
      values = await form.validateFields()
    } catch (error) {
      return
    }
    await props.onEdit(props.menuId, values)
  }

  return (
    <>
      <Modal title="编辑菜单" open={props.open} onOk={handleEdit} onCancel={onClose} width={800}>
        <Form form={form} onFinish={handleEdit} layout="vertical">
          <p className="font-bold mt-4 mb-2">基本信息</p>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item<FormType> label="上级菜单" name="parentName">
                <Input disabled />
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

export default DataEdit
