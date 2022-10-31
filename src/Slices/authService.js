import axios from 'axios'
import { API } from '../api'


// RegisterUser user
const registerUser = async (userData) => {
    const response = await API.post(`/users/register`, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Login user
const loginUser = async (userData) => {
    const response = await API.post(`/users/`, userData)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Update user
const updateUser = async ({ userId, userData }, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await API.put(`/users/${userId}`, userData, config)
    return response.data
}

// Get All Users
const getAllusers = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await API.get(`/users/allusers`, config)
    return response.data
}

// Delete user
const deleteUser = async (userId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.delete(`${API}/users/${userId}`, config)
    return response.data
}

// Logout user
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    registerUser,
    logout,
    loginUser,
    updateUser,
    getAllusers,
    deleteUser
}

export default authService