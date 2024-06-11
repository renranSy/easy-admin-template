import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
import themeReducer from './theme'

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
