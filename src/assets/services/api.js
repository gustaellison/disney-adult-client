import axios from 'axios'

export const BASE_URL = 'https://disney-adults-7bc8b57c75ad.herokuapp.com'

const Client = axios.create({baseURL: BASE_URL})

export default Client