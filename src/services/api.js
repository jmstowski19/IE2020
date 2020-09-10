import axios from 'axios'
import {config} from '../configuration.js'

export default axios.create({
    baseURL: config.baseURL
});