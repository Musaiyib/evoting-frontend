import { API } from '../api'

// Create new payment
const createPayment = async (paymentData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await API.post(`/payments`, paymentData, config)

    return response.data
}

// Get payments
const getPayments = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await API.get(`/payments/`, config)
    return response.data.payments
}

// Update user
const updatePayment = async (payment, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await API.put(`/payments/${payment.id}`, payment.data, config)
    return response.data
}

// Delete user payment
const deletePayment = async (paymentId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await API.delete(`/payments/${paymentId}`, config)

    return response.data
}

const paymentService = {
    createPayment,
    getPayments,
    updatePayment,
    deletePayment,
}

export default paymentService