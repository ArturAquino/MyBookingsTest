import axios from 'axios'

// const BASE_URL = process.env.REACT_APP_BASE_URL

export const getBookings = () => {
    return axios.get(`https://5ba412108da2f20014654cf8.mockapi.io/api/v1/flights`)
        .then(response => {
            return response.data
        }
    )
}