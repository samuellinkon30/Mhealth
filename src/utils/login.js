import api from './api'

export default{
    async login(payload){
        try {
            const headers = {
                'Content-Type': 'application/json', 
            };
            const response = await api.post(`/api/login/`, payload, {
                headers,
            });
            return response.data;
        } catch (error) {
            console.error('Erro ao realizar login:', error);
            throw error;
        }
    },
}