import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type UserState = API.User

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
      state.id = action.payload.id
    }
  }
})

export const { userLogin } = userSlice.actions
export default userSlice.reducer
