import { http, request } from '@/utils/request/axios'

/** 登录 */
export const login = (data: API.LoginParam) => {
  return request<API.LoginResponse>('/admin/login', {
    method: 'post',
    data
  })
}

/** 获取管理员信息 */
export const getUserInfo = () => {
  return request<API.UserInfo>('/admin/get', {
    method: 'get'
  })
}

/** 获取管理员列表 */
export const getUserList = () => {
  return request<API.User[]>('/admin', {
    method: 'get'
  })
}

/** 新增管理员 */
export const addUser = (data: API.User) => {
  return http.post('/admin', data)
}

/** 更新管理员 */
export const updateUser = (id: number, data: API.EditUser) => {
  return http.put('/admin', id, data)
}

/** 删除管理员 */
export const deleteUser = (id: number) => {
  return http.delete('/admin', id)
}

/** 获取菜单详情 */
export const getMenu = (id: number) => {
  return http.get<API.Menu>(`/menu/${id}`)
}

/** 获取菜单列表 */
export const getMenuList = () => {
  return http.get<API.Menu[]>('/menu')
}

/** 新增菜单 */
export const addMenu = (data: API.Menu) => {
  return http.post('/menu', data)
}

/** 更新菜单 */
export const updateMenu = (id: number, data: API.Menu) => {
  return http.put('/menu', id, data)
}

/** 更新菜单 */
export const deleteMenu = (id: number) => {
  return http.delete('/menu', id)
}

/** 获取角色列表 */
export const getRoleList = () => {
  return http.get<API.Menu[]>('/role')
}

/** 新增角色 */
export const addRole = (data: API.Role) => {
  return http.post('/role', data)
}

/** 更新角色 */
export const updateRole = (id: number, data: API.Role) => {
  return http.put('/role', id, data)
}

/** 更新角色 */
export const deleteRole = (id: number) => {
  return http.delete('/role', id)
}

/** 获取角色权限 */
export const getRolePermission = (id: number) => {
  return http.get<API.RoleMenuRes>(`/role/menu/${id}`)
}

/** 更新角色权限 */
export const updateRolePermission = (id: number, data: { idList: string }) => {
  return http.put('/role/menu', id, data)
}

/** 获取工作台数据 */
export const getWorkbench = () => {
  return request<API.WorkBenchData>('/getWorkbench', {
    method: 'get'
  })
}

/** 获取资源推荐数据 */
export const getResource = () => {
  return request<API.Resource>('/getResource', {
    method: 'get'
  })
}
