import axios from 'axios';


const api = axios.create({
    baseURL: 'http://localhost:8989/api',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
});