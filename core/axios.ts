import axios, { InternalAxiosRequestConfig } from "axios";
import { parseCookies } from "nookies";


axios.defaults.baseURL = 'http://localhost:7777'

axios.interceptors.request.use((config:InternalAxiosRequestConfig) => {
    if(typeof window !== 'undefined') {
        const { _token } = parseCookies()
        config.headers.Authorization = 'Bearer' + _token
    }
    return config;
})

export default axios;