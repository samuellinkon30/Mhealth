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
    async getDataPatienteByHash(accessToken, id, type){
        try {
            const headers = {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json', 
            };
            if(type=="cpf"){
                const response = await api.get(`/pacientes?cpf=${id}` , {
                    headers,
                });
            } else {
                const response = await api.get(`/pacientes?nome=${id}` , {
                    headers,
                });
            }
            
            return response.data;
        } catch (error) {
            console.error(`Erro ao carregar Paciente: ${id}`, error);
            throw error;
        }
    },
    async createPatiente(accessToken, payload){
        try {
            const headers = {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json', 
            };
            const response = await api.post(`/pacientes` , payload, {
                headers,
            });
            return response.data;
        } catch (error) {
            console.error(`Erro ao criar paciente}`, error);
            throw error;
        }
    },
}