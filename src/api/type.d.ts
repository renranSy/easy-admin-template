declare namespace API {
  type Response<T> = {
    code: number
    data: T
    message: string
  }

  type GetBookingDateResult = {
    current: number
    pages: number
    total: number
    size: number
    records: BookingDate[]
  }

  type BookingDate = {
    id: number
    bookingDate: string
    limitNumber: number
    bookingNumber: number
    // 预约类型：0、常规体检 1、B超/CT
    bookingType: number
  }

  type BookingRecord = {
    name: string
    idCard: string
    phone: string
    bookingDate: string
    bookingType: string
  }

  type GetRecordParams = {
    name?: string
    bookingDate: string
    bookingType?: string
    pageNum: number
    pageSize: number
  }

  type GetRecordResult = {
    current: number
    pages: number
    total: number
    size: number
    records: BookingRecord[]
  }

  type Notice = {
    id: number
    type: number
    text: string
    link: string
    imgUrl: string
    createTime: string
  }
}
