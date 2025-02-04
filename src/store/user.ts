import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type UserState = API.UserInfo

const initialState = {
  username: '',
  buttons: [],
  menus: []
} as UserState

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserState>) => {
      state.username = action.payload.username
      state.buttons = action.payload.buttons
      state.menus = action.payload.menus
    }
  }
})

export const { setUserInfo } = userSlice.actions
export default userSlice.reducer
