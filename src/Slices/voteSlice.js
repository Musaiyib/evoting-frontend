import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import voteService from './voteService'
import Swal from 'sweetalert2'

const initialState = {
    voters: [],
    loginVoter: {},
    voteToken: {},
    totalAmount: 0,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Vote
export const generateVoteToken = createAsyncThunk(
    'voteToken/create',
    async (voterData, thunkAPI) => {

        try {
            const token = thunkAPI.getState().auth.user.token
            await thunkAPI.dispatch(getVoters())
            const res = await voteService.generateVoteToken(voterData, token)
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

// Create new voter
export const vote = createAsyncThunk(
    'vote/create',
    async (voteData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            await thunkAPI.dispatch(getVoters())
            const res = await voteService.vote(voteData, token)
            console.log(res);
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

// Get voter token
export const getVoteToken = createAsyncThunk(
    'voteToken/get',
    async (voterData, thunkAPI) => {

        try {
            const token = thunkAPI.getState().auth.user.token
            const res = await voteService.getVoteToken(voterData, token)
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

// Get voter token
export const getAllVoteTokens = createAsyncThunk(
    'votersToken/get',
    async (_, thunkAPI) => {

        try {
            const token = thunkAPI.getState().auth.user.token
            await thunkAPI.dispatch(getVoters())
            const res = await voteService.getAllVoteToken(token)
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

//use vote token and regNo to sign voter
export const logVoter = createAsyncThunk(
    'login/voter',
    async (voter, thunkAPI) => {
        try {
            const res = await voteService.loginVoter(voter)
            return res
        } catch (error) {
            const message =
                (error.response && error.response.data && error.response.data.msg) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Create new voter
export const createVoter = createAsyncThunk(
    'voters/create',
    async (voterData, thunkAPI) => {

        try {
            const token = thunkAPI.getState().auth.user.token
            await thunkAPI.dispatch(getVoters())
            const res = await voteService.createVoter(voterData, token)
            if (res)
                toast.success("Voter added successfully", { autoClose: 5000 });
            return res
        } catch (error) {
            toast.error("Failed to add voter", { autoClose: 5000 });
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

// Get voters
export const getVoters = createAsyncThunk(
    'voters/getAll',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            const res = await voteService.getAllVoteToken(token)
            return res
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.msg) ||
                error.message ||
                error.toString()
            console.log(error);
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Update voter
export const updateVoter = createAsyncThunk(
    'voters/updateVoter',
    async (voterData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            const res = await voteService.updateVoter(voterData, token)
            return res
        } catch (error) {
            toast.error("Failed to updated voter", { autoClose: 5000 });
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

// Delete user voter
export const deleteVoter = createAsyncThunk(
    'voters/deleteVoter',
    async (id, thunkAPI) => {
        try {
            toast.success("Voter deleted successfully", { autoClose: 5000 });
            const token = thunkAPI.getState().auth.user.token
            const res = await voteService.deleteVoter(id, token)
            if (res)
                toast.success("Voter deleted successfully", { autoClose: 5000 });
            return res
        } catch (error) {

            toast.error("Failed to delete voter", { autoClose: 5000 });
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

export const voterSlice = createSlice({
    name: 'voter',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(generateVoteToken.pending, (state) => {
                state.isLoading = true
            })
            .addCase(generateVoteToken.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.isSuccess = true
                state.voteToken = payload.data
                state.message = payload.msg
                Swal.fire({
                    icon: 'success',
                    title: 'success',
                    text: payload.msg
                  })
            })
            .addCase(generateVoteToken.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload
                console.log(payload);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: payload
                  })
            })
            .addCase(createVoter.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createVoter.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.isSuccess = true
                Swal.fire({
                    icon: 'success',
                    title: 'success',
                    text: payload.msg
                  })
            })
            .addCase(createVoter.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload.msg
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: payload.msg
                  })
            })
            .addCase(getVoters.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getVoters.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.isSuccess = true
                state.voters = payload.data
            })
            .addCase(getVoters.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload.msg
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: payload.msg
                  })
            })
            .addCase(updateVoter.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateVoter.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.isSuccess = true
                state.voters = state.voters.filter(
                    (voter) => voter._id === payload.id ? voter = payload : voter
                )
                state.updated = payload.data
                Swal.fire({
                    icon: 'success',
                    title: 'success',
                    text: payload.msg
                  })
            })
            .addCase(updateVoter.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload.msg
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: payload.msg
                  })
            })
            .addCase(deleteVoter.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteVoter.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.isSuccess = true
                state.voters = state.voters.filter(
                    (voter) => voter._id !== payload.id
                )
                state.deleted = payload.data
                Swal.fire({
                    icon: 'success',
                    title: 'success',
                    text: payload.msg
                  })
            })
            .addCase(deleteVoter.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload.msg
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: payload.msg
                  })
            })
            .addCase(logVoter.pending, (state) => {
                state.isLoading = true
            })
            .addCase(logVoter.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.isSuccess = true
                state.loginVoter = payload.data
                Swal.fire({
                    icon: 'success',
                    title: 'success',
                    text: payload.msg
                  })
            })
            .addCase(logVoter.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload.msg
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: payload.msg
                  })
            })
            .addCase(getVoteToken.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getVoteToken.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.isSuccess = true
                state.loginVoter = payload.data
                Swal.fire({
                    icon: 'success',
                    title: 'success',
                    text: payload.msg
                  })
            })
            .addCase(getVoteToken.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload.msg
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: payload.msg
                  })
            })
            .addCase(getAllVoteTokens.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllVoteTokens.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.isSuccess = true
                state.voters = payload.data
                state.message = payload.msg
            })
            .addCase(getAllVoteTokens.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload.msg
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: payload.msg
                  })
            })
            .addCase(vote.pending, (state) => {
                state.isLoading = true
            })
            .addCase(vote.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.isSuccess = true
                state.voters = payload.data
                state.message = payload.msg
                Swal.fire({
                    icon: 'success',
                    title: 'success',
                    text: payload.msg
                  })
            })
            .addCase(vote.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload.msg
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: payload.msg
                  })
            })
    },
})

export const { reset } = voterSlice.actions
export default voterSlice.reducer