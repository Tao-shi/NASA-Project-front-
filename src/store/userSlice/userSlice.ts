import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { loginUserInterface, updateReloadWalletInterface, updateUserInterface, UserState, updateReloadTransactionstInterface } from './userSlice-interface'
import { setAuthToken } from '../../api'

const initialState: UserState = {
  user: null,
  token: null,
  isAuthenticated: false,
  reloadWallet: false,
  reloadTransactions: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<loginUserInterface>) => {
      state.user = action.payload.user
      state.isAuthenticated = true
      state.token = action.payload.token
    },
    logoutUser: (state) => {
      state.user = null
      state.isAuthenticated = false
      state.token = null
      setAuthToken(null)
    },
    updateUser: (state, action: PayloadAction<updateUserInterface>) => {
      state.user = action.payload.user
    },
    upadateReloadWallet: (state, action: PayloadAction<updateReloadWalletInterface>) => {
      state.reloadWallet = action.payload.reloadWallet
    },
    upadateReloadTransactions: (state, action: PayloadAction<updateReloadTransactionstInterface>) => {
      state.reloadTransactions = action.payload.reloadTransactions
    }
  }
})

export const { loginUser, logoutUser, updateUser, upadateReloadWallet, upadateReloadTransactions } = userSlice.actions

const userReducer = userSlice.reducer

export default userReducer