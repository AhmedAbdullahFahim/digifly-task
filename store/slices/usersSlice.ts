import { User } from '@/types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UsersState {
  usersData: User[]
}

const initialState: UsersState = {
  usersData: [],
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.usersData = action.payload
    },
  },
})

export const { setUsers } = usersSlice.actions

export default usersSlice.reducer
