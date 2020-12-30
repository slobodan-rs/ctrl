import axios from 'axios'

const baseUrl = "http://68.183.210.81:8181/KomisionAG/api/services"

const login = (data) => {

    return axios.post(`${baseUrl}/login`, data)
}

export { login }