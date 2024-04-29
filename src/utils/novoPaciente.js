import api from './api'

export default{
    async cadastrarPaciente(accessToken, payload){
        try {
            const headers = {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json', 
            };
            const response = await api.post(`/api/pacientes`, payload , {
                headers,
            });
            return response.data;
        } catch (error) {
            console.error('Erro ao criar paciente:', error);
            throw error;
        }
    },
}