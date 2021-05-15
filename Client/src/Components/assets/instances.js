// const axios = require('axios').default
import axios from 'axios'

const instance = axios.create({
    url:'http://localhost:3001'
    
})

export default instance