import axios from 'axios';


const api = axios.create({
    baseURL: 'https://mlovi.com.br/multidisciplinar/api',
    // withCredentsials: true,
    headers: {
      'Content-Type': 'application/json',
    },
});


export default api;
