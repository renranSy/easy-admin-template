import React, { useEffect, useRef, useState } from 'react'
import useAsync from '@/hooks/useAsync'
import { Button, Checkbox, Dropdown, message, Space } from 'antd'
import { DeleteFilled, PlusOutlined, ReloadOutlined, SettingOutlined } from '@ant-design/icons'
import api from '@/api'
import DataTable, { TableColumn, TableRef } from '@/views/system/menu/DataTable'
import DataAdd from '@/views/system/menu/DataAdd'
import DataEdit from '@/views/system/menu/DataEdit'
import IButton from '@/components/IButton'

const Menu = () => {
  const tableRef = useRef<TableRef>(null)
  const [tableColumn, setTableColumn] = useState<TableColumn[]>([])
  const [openSelectColumn, setOpenSelectColumn] = useState(false)

  const [menuList, setMenuList] = useState<API.Menu[]>([])
  const [tableLoading, setTableLoading] = useState(false)

  const [openAdd, setOpenAdd] = useState(false)
  const [parentMenu, setParentMenu] = useState<API.Menu | null>(null)
  const [addLoading, setAddLoading] = useState(false)

  const [openEdit, setOpenEdit] = useState(false)
  const [editLoading, setEditLoading] = useState(false)
  const [editMenuId, setEditMenuId] = useState<number>(0)

  useEffect(() => {
    const handle = () => {
      setOpenSelectColumn(false)
    }
    document.addEventListener('click', handle)
    return () => document.removeEventListener('click', handle)
  }, [])

  useEffect(() => {
    if (tableRef.current) {
      setTableColumn(tableRef.current.columns)
    }
  }, [])

  useAsync(async () => {
    await getData()
  })

  const clickShowColumn = (value: string) => {
    setTableColumn((prevState) =>
      prevState.map((item) => {
        if (item.key === value) {
          return { ...item, isShow: !item.isShow }
        }
        return item
      })
    )
  }

  const getData = async () => {
    setTableLoading(true)
    const res = await api.getMenuList()
    setTableLoading(false)
    setMenuList(res.data)
  }

  const handleEdit = (id: number) => {
    setEditMenuId(id)
    setOpenEdit(true)
  }

  const handleAddParent = () => {
    setParentMenu(null)
    setOpenAdd(true)
  }

  const handleAddChild = (values: API.Menu) => {
    setParentMenu(values)
    setOpenAdd(true)
  }

  const addMenu = async (values: API.Menu) => {
    setAddLoading(true)
    const res = await api.addMenu(values)
    setAddLoading(false)
    if (res.code === 200) {
      message.success(res.message)
      await getData()
      setOpenAdd(false)
    } else {
      message.error(res.message)
    }
  }

  const updateMenu = async (id: number, menu: API.Menu) => {
    setEditLoading(true)
    const res = await api.updateMenu(id, menu)
    setEditLoading(false)
    if (res.code === 200) {
      message.success(res.message)
      await getData()
      setOpenEdit(false)
    } else {
      message.error(res.message)
    }
  }

  const deleteMenu = async (id: number) => {
    setTableLoading(true)
    const res = await api.deleteMenu(id)
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
          <div className="font-bold text-[1rem]">菜单列表</div>
          <Space>
            <IButton
              code="MenuManage.add"
              onClick={handleAddParent}
              color="primary"
              variant="outlined"
              icon={<PlusOutlined />}>
              新增
            </IButton>
            <IButton code="MenuManage.delete" color="danger" variant="outlined" icon={<DeleteFilled />}>
              批量删除
            </IButton>
            <Button onClick={getData} color="default" variant="outlined" icon={<ReloadOutlined />}>
              刷新
            </Button>
            <Dropdown
              menu={{
                items: tableColumn.map((item) => ({
                  key: item.key,
                  label: (
                    <Checkbox onChange={() => clickShowColumn(item.key)} checked={item.isShow}>
                      {item.label}
                    </Checkbox>
                  )
                }))
              }}
              dropdownRender={(originNode) => <div onClick={(e) => e.stopPropagation()}>{originNode}</div>}
              open={openSelectColumn}
              trigger={['click']}>
              <Button
                onClick={(e) => {
                  e.stopPropagation()
                  setOpenSelectColumn(true)
                }}
                color="default"
                variant="outlined"
                icon={<SettingOutlined />}>
                列设置
              </Button>
            </Dropdown>
          </Space>
        </div>
        <div className="mt-4">
          <DataTable
            ref={tableRef}
            onDelete={deleteMenu}
            onOpenEdit={handleEdit}
            onOpenAdd={handleAddChild}
            data={menuList}
            loading={tableLoading}
            hideColumns={tableColumn.filter((item) => !item.isShow).map((item) => item.key)}
          />
        </div>
      </div>
      <DataAdd open={openAdd} loading={addLoading} onChange={setOpenAdd} onAdd={addMenu} parentMenu={parentMenu} />
      <DataEdit open={openEdit} menuId={editMenuId} loading={editLoading} onChange={setOpenEdit} onEdit={updateMenu} />
    </>
  )
}

export default Menu
