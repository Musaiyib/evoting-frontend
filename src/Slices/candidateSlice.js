import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import moment from 'moment'
import { toast } from 'react-toastify'
import candidateService from './candidateService'

const initialState = {
    candidates: [],
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
            if (res)
                toast.success("Candidate added successfully", { autoClose: 5000 });
            return res
        } catch (error) {
            toast.error("Failed to add candidate", { autoClose: 5000 });
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

// Get candidates
export const getCandidates = createAsyncThunk(
    'candidates/getAll',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await candidateService.getCandidates(token)
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

// Update candidate
export const updateCandidate = createAsyncThunk(
    'candidates/updateCandidate',
    async (candidateData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            toast.success("Candidate updated successfully", { autoClose: 5000 });
            const res = await candidateService.updateCandidate(candidateData, token)
            if (res)
                toast.success("Candidate updated successfully", { autoClose: 5000 });
            return res
        } catch (error) {
            toast.error("Failed to updated candidate", { autoClose: 5000 });
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

// Delete user candidate
export const deleteCandidate = createAsyncThunk(
    'candidates/deleteCandidate',
    async (id, thunkAPI) => {
        try {
            toast.success("Candidate deleted successfully", { autoClose: 5000 });
            const token = thunkAPI.getState().auth.user.token
            const res = await candidateService.deleteCandidate(id, token)
            if (res)
                toast.success("Candidate deleted successfully", { autoClose: 5000 });
            return res
        } catch (error) {

            toast.error("Failed to delete candidate", { autoClose: 5000 });
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
            .addCase(createCandidate.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(createCandidate.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload
            })
            .addCase(getCandidates.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getCandidates.fulfilled, (state, { payload }) => {
                // let total = 0
                state.isLoading = false
                state.isSuccess = true
                const formatDate = payload.map((candidate) => {
                    candidate.createdAt = moment(candidate.createdAt).format('ll')
                    candidate.updatedAt = moment(candidate.updatedAt).format('ll')
                    return candidate;
                })
                state.candidates = formatDate
            })
            .addCase(getCandidates.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload
            })
            .addCase(updateCandidate.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateCandidate.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.isSuccess = true
                state.candidates = state.candidates.filter(
                    (candidate) => candidate._id === payload.id ? candidate = payload : candidate
                )
                state.updated = payload
            })
            .addCase(updateCandidate.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload
            })
            .addCase(deleteCandidate.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteCandidate.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.isSuccess = true
                state.candidates = state.candidates.filter(
                    (candidate) => candidate._id !== payload.id
                )
                state.deleted = payload
            })
            .addCase(deleteCandidate.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload
            })
    },
})

export const { reset } = candidateSlice.actions
export default candidateSlice.reducer