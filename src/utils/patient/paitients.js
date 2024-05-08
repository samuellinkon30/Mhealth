import api from '../api'

export default{
    async getListPatientes(accessToken){
        try {
            const headers = {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json', 
            };
            const response = await api.get(`/pacientes` , {
                headers,
            });
            return response.data;
        } catch (error) {
            console.error('Erro ao Carregar Listagem de Pacientes', error);
            throw error;
        }
    },
    async getDataPatiente(accessToken, id){
        try {
            const headers = {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json', 
            };
            const response = await api.get(`/pacientes/${id}` , {
                headers,
            });
            return response.data;
        } catch (error) {
            console.error(`Erro ao carregar Paciente: ${id}`, error);
            throw error;
        }
    },
}