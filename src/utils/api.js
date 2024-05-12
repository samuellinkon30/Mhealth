import axios from 'axios';


const api = axios.create({
    baseURL: 'https://queromeusiteonline.com.br/multidisciplinar/api',
    // withCredentsials: true,
    headers: {
      'Content-Type': 'application/json',
    },
});


export default api;
