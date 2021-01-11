import axios from 'axios'

const baseUrl = "http://68.183.210.81:8181/KomisionAG/api/services"

// Login
const login = (data) => {
    return axios.post(`${baseUrl}/login`, data)
}

// Add Product

const postNewProduct = (data) => {
    return axios.post(`${baseUrl}/suppliers/addproduct`, data)
}

export { login, postNewProduct }