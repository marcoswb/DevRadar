import axios from 'axios'

const api = axios.create({
    // pegar ip do pc que está no expo web para rodar no celular
    baseURL: 'http://localhost:3333',
})

export default api