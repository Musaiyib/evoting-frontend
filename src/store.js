import { configureStore, } from '@reduxjs/toolkit'
import candidateSlice from './Slices/candidateSlice'
import voteSlice from './Slices/voteSlice'
import authSlice from './Slices/authSlice'


export default configureStore({
    reducer: {
        auth: authSlice,
        votes: voteSlice,
        candidates: candidateSlice,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})