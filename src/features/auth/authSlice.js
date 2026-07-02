import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    firstName: null,
    lastName: null,
    userName: null,
  },
  reducers: {
    loginSuccess: function(state, action) {
      state.token = action.payload.token
    },
    setUserProfile: function(state, action) {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.userName = action.payload.userName
    },
    logout: function(state) {
      state.token = null
      state.firstName = null
      state.lastName = null
      state.userName = null
    },
  },
})

export const { loginSuccess, setUserProfile, logout } = authSlice.actions
export default authSlice.reducer