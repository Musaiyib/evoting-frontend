import { API } from '../api'

// Create new vote
const generateVoteToken = async (voterData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await API.post(`/vote/new/voter`, voterData, config)
    return response.data
}

// Create new vote
const vote = async (voteData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await API.post(`/vote`, voteData, config)
    return response.data
}

// Create new vote
const getVoteToken = async (voterData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await API.post(`/vote/get/voter`, voterData, config)
    return response.data
}

// Create new vote
const getAllVoteToken = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await API.get(`/vote/get/all`, config)
    return response.data
}

// Login voter
const loginVoter = async (userData) => {
    const response = await API.post(`/vote/login`, userData)
    if (response.data) {
        localStorage.setItem('voter', JSON.stringify(response.data))
    }
    return response.data
}

const voteService = {
    generateVoteToken,
    vote,
    loginVoter,
    getVoteToken,
    getAllVoteToken,
}

export default voteService