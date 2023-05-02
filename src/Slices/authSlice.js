import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'
import Swal from 'sweetalert2'

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    users: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Register user
export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (user, thunkAPI) => {
        try {
            const res = await authService.registerUser(user)
            window.location = '/elcom/dashboard'
            return res
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Login user
export const loginUser = createAsyncThunk('auth/loginUser', async (user, thunkAPI) => {
    try {
        const res = await authService.loginUser(user)
        return res
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Logout
export const logout = createAsyncThunk('auth/logout', async () => {
    await authService.logout()
})

// Update user
export const updateUser = createAsyncThunk('auth/updateUser', async (user, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await authService.updateUser(user, token)
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get All Users
export const getAllusers = createAsyncThunk('auth/getAllusers', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await authService.getAllusers(token)
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Delete user
export const deleteUser = createAsyncThunk(
    'auth/deleteUser',
    async (id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await authService.deleteUser(id, token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (...state) => {
            state.user = null
            state.users = null
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        },
    },
    extraReducers: (builder) => {
        builder

            // Register
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = payload
                Swal.fire({
                    icon: 'success',
                    title: 'success',
                    text: payload.msg
                  })
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload
                state.user = null
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: payload
                  })
            })

            // Login
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = payload
                Swal.fire({
                    icon: 'success',
                    title: 'success',
                    text: payload.msg
                  })
            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload
                state.user = null
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: payload
                  })
            })

            // Update
            .addCase(updateUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateUser.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = payload
                Swal.fire({
                    icon: 'success',
                    title: 'success',
                    text: payload.msg
                  })
            })
            .addCase(updateUser.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload
                state.user = null
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: payload
                  })
            })

            // Get All Users
            .addCase(getAllusers.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllusers.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.isSuccess = true
                state.users = payload.users
                Swal.fire({
                    icon: 'success',
                    title: 'success',
                    text: payload.msg
                  })
            })
            .addCase(getAllusers.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload
                state.users = null
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: payload
                  })
            })

            // delete
            .addCase(deleteUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteUser.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = payload
                Swal.fire({
                    icon: 'success',
                    title: 'success',
                    text: payload.msg
                  })
            })
            .addCase(deleteUser.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload
                state.user = null
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: payload
                  })
            })

            // logout
            .addCase(logout.fulfilled, (state) => {
                state.user = null
            })
    },
})

export const { reset } = authSlice.actions
export default authSlice.reducer