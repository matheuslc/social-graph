import axios from 'axios'

const apiURL = import.meta.env.VITE_API_URL || 'http://localhost:3010'

export default axios.create({
    baseURL: apiURL
})