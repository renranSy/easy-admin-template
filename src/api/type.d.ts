declare namespace API {
  type Response<T> = {
    code: number
    data: T
    message: string
  }

  type LoginParam = {
    username: string
    password: string
  }

  type LoginResponse = {
    token: string
    userInfo: UserInfo
  }

  type User = {
    id?: number
    username?: string
    password?: string
    email?: string
    status?: number
    createdAt?: string
  }

  type UserInfo = {
    username: string
    buttons: string[]
    menus: string[]
  }

  type AddUser = {
    username: string
    password: string
    email: string
    roleIdList: number[]
    status: number
  }

  type EditUser = {
    username: string
    email: string
    roleIdList: string
    status: number
  }

  type Menu = {
    id?: number
    name?: string
    code?: string
    description?: string
    sequence?: number
    type?: number
    path?: string
    status?: number
    parentName?: string
    parentId?: number
    children?: Menu[]
    menuResource?: MenuResource[]
    createdAt?: string
  }

  type MenuResource = {
    id?: number
    menuId?: number
    method?: string
    path?: string
    createdAt?: string
  }

  type Role = {
    id?: number
    name?: string
    description?: string
    sequence?: number
    status?: number
    createdAt?: string
  }

  type RoleMenuRes = {
    list: number[]
  }

  type ChartData = {
    gdp: number
    year: string
    name: string
  }

  type UpdateLog = {
    children: string
    color: string
  }

  type Comment = {
    name: string
    description: string
  }

  type GeneralInfo = {
    newUser: string
    newMessage: string
    account: string
    shop: string
  }

  type WorkBenchData = {
    chartData: ChartData[]
    updateLog: UpdateLog[]
    commentList: Comment[]
    generalInfo: GeneralInfo
  }

  type Team = {
    name: string
    link: string
    avatar: string
  }

  type ComponentLibrary = {
    name: string
    icon: string
    description: string
    link: string
  }

  type Project = {
    name: string
    description: string
    avatar: string
    link: string
  }

  type Community = {
    avatar: string
    name: string
    description: string
    link: string
  }

  type Resource = {
    teamList: Team[]
    componentLibraryList: ComponentLibrary[]
    projectList: Project[]
    communityList: Community[]
  }
}
