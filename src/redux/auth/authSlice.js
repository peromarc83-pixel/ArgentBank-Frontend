import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token'),
    email: localStorage.getItem('email') || '',
    firstName: null,
    lastName: null,
    userName: null,
  },
  reducers: {
    setEmail: function(state, action) {
      state.email = action.payload
    },
    loginSuccess: function(state, action) {
      state.token = action.payload.token
      state.email = action.payload.email

      if (action.payload.rememberMe) {
        localStorage.setItem('token', action.payload.token)
        localStorage.setItem('email', action.payload.email)
      } else {
        localStorage.removeItem('token')
        localStorage.removeItem('email')
      }
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
      localStorage.removeItem('token')
    },
  },
})

export const { setEmail, loginSuccess, setUserProfile, logout } = authSlice.actions
export default authSlice.reducer