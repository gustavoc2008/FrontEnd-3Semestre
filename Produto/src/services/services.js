import axios from "axios";

const apiPort = "3000"

const localApi = `http://localhost:${apiPort}`

const externaApi = null

const api = axios.create({
    baseaURL: localApi
})

export default api