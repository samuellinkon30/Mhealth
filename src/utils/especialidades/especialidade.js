import api from '../api'

export default{
    async getListEspecialidades(accessToken){
        try {
            const headers = {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json', 
            };
            const response = await api.get(`/especialidades` , {
                headers,
            });
            return response.data;
        } catch (error) {
            console.error('Erro ao Carregar Listagem de Especialidades', error);
            throw error;
        }
    },

}