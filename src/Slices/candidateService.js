import { API } from '../api'

// Create new candidate
const createCandidate = async (candidateData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    console.log(candidateData);
    const response = await API.post(`/candidate/register`, candidateData, config)

    return response.data
}

// Get candidates
const getCandidates = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await API.get(`/candidate/`, config)
    return response.data
}

// Get roles
const getRoles = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await API.get(`/roles/`, config)
    return response.data
}

// Update user
const updateCandidate = async (candidate, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await API.put(`/candidate/${candidate.id}`, candidate.data, config)
    return response.data
}

// Delete user candidate
const deleteCandidate = async (candidateId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await API.delete(`/candidate/${candidateId}`, config)

    return response.data
}

const candidateService = {
    createCandidate,
    getCandidates,
    getRoles,
    updateCandidate,
    deleteCandidate,
}

export default candidateService