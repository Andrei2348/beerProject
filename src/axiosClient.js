// https://0c084bf8e2515d75.mokky.dev/beerList
import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'https://0c084bf8e2515d75.mokky.dev/beerList',
})

export default axiosClient