import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './userSlice/userSlice'
import storage from 'redux-persist/lib/storage'
import {
  persistReducer,
} from 'redux-persist'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage: storage,
}
export const rootReducers = combineReducers({
  user: userReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch