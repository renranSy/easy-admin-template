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
