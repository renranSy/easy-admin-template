import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type UserState = {
  username: string
  avatar: string
  role: string
}

const initialState = {
  username: '',
  avatar: '',
  role: ''
} as UserState

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogin: (state, action: PayloadAction<UserState>) => {
      state.username = action.payload.username
      state.avatar = action.payload.avatar
      state.role = action.payload.role
    }
  }
})

export const { userLogin } = userSlice.actions
export default userSlice.reducer
