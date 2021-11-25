import axios from 'axios'
// import router from '../router'

const request = axios.create({
    baseURL: 'http://localhost:8090/SpringTest',
    timeout: 5000,
})

// axios请求拦截器，把重复的功能代码写入其中,减少代码复用
// request.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token')
//         if(token) config.headers.Authorization = 'Bearer ${token}'; //Bearer ： token的类型
//         return config
//     },
//     (error) => Promise.reject(error),
// )

// request.interceptors.response.use(
//     (response) => response,
//     ({response}) => {
//         const { status } = response
//         if(status === 401) router.push({ name: 'denglu'})
//     },
// )

export default request