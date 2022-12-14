import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import moment from 'moment'
import { toast } from 'react-toastify'
import voteService from './voteService'

const initialState = {
    voters: [],
    voteToken: {},
    totalAmount: 0,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Create new voter
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
                    error.response.data.message) ||
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
                    error.response.data.message) ||
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
            return await voteService.getVoters(token)
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

// Update voter
export const updateVoter = createAsyncThunk(
    'voters/updateVoter',
    async (voterData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            toast.success("Voter updated successfully", { autoClose: 5000 });
            const res = await voteService.updateVoter(voterData, token)
            if (res)
                toast.success("Voter updated successfully", { autoClose: 5000 });
            return res
        } catch (error) {
            toast.error("Failed to updated voter", { autoClose: 5000 });
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
                    error.response.data.message) ||
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
                state.message = payload.message
            })
            .addCase(generateVoteToken.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload
            })
            .addCase(createVoter.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createVoter.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(createVoter.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload
            })
            .addCase(getVoters.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getVoters.fulfilled, (state, { payload }) => {
                // let total = 0
                state.totalAmount = payload.reduce((prev, voter) => {
                    return prev + voter.amount
                }, 0)
                state.isLoading = false
                state.isSuccess = true
                const formatDate = payload.map((voter) => {
                    voter.createdAt = moment(voter.createdAt).format('ll')
                    voter.updatedAt = moment(voter.updatedAt).format('ll')
                    return voter;
                })
                state.voters = formatDate
            })
            .addCase(getVoters.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload
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
                state.updated = payload
            })
            .addCase(updateVoter.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload
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
                state.deleted = payload
            })
            .addCase(deleteVoter.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload
            })
    },
})

export const { reset } = voterSlice.actions
export default voterSlice.reducer