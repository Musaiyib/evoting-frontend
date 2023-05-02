import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import candidateService from './candidateService'
import Swal from 'sweetalert2'

const initialState = {
    candidates: [],
    roles:[],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Create new candidate
export const createCandidate = createAsyncThunk(
    'candidates/create',
    async (candidateData, thunkAPI) => {

        try {
            const token = thunkAPI.getState().auth.user.token
            await thunkAPI.dispatch(getCandidates())
            const res = await candidateService.createCandidate(candidateData, token)
            return res
        } catch (error) {
            toast.error("Failed to add candidate", { autoClose: 5000 });
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.msg) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Get candidates
export const getCandidates = createAsyncThunk(
    'candidates/getAll',
    async (_, thunkAPI) => {
        try {
            return await candidateService.getCandidates()
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.msg) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Get roles
export const getRoles = createAsyncThunk(
    'roles/getAll',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            const res = await candidateService.getRoles(token)
            return res
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.msg) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Update candidate
export const updateCandidate = createAsyncThunk(
    'candidates/updateCandidate',
    async (candidateData, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token
        console.log(token);
        try {
            const token = thunkAPI.getState().auth.user.token
            const res = await candidateService.updateCandidate(candidateData, token)
            await thunkAPI.dispatch(getCandidates())
            return res
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.msg) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Delete user candidate
export const deleteCandidate = createAsyncThunk(
    'candidates/deleteCandidate',
    async (id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            const res = await candidateService.deleteCandidate(id, token)
            await thunkAPI.dispatch(getCandidates())
            return res
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.msg) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const candidateSlice = createSlice({
    name: 'candidate',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createCandidate.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createCandidate.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.isSuccess = true
                Swal.fire({
                    icon: 'success',
                    title: 'success',
                    text: payload.msg
                  })
            })
            .addCase(createCandidate.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: payload
                  })
            })
            .addCase(getCandidates.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getCandidates.fulfilled, (state, { payload }) => {
                // let total = 0
                state.isLoading = false
                state.isSuccess = true
                state.candidates = payload.data
            })
            .addCase(getCandidates.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: payload
                  })
            })
            .addCase(getRoles.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getRoles.fulfilled, (state, { payload }) => {
                // let total = 0
                state.isLoading = false
                state.isSuccess = true
                state.roles = payload
            })
            .addCase(getRoles.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: payload
                  })
            })
            .addCase(updateCandidate.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateCandidate.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = payload.msg
                Swal.fire({
                    icon: 'success',
                    title: 'success',
                    text: payload.msg
                })
            })
            .addCase(updateCandidate.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: payload
                  })
            })
            .addCase(deleteCandidate.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteCandidate.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.isSuccess = true
                state.deleted = payload
                Swal.fire({
                    icon: 'success',
                    title: 'success',
                    text: payload.msg
                  })
            })
            .addCase(deleteCandidate.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: payload
                  })
            })
    },
})

export const { reset } = candidateSlice.actions
export default candidateSlice.reducer