import api from '../api'

export default{
    async getListEspecialistas(accessToken){
        try {
            const headers = {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json', 
            };
            const response = await api.get(`/funcionarios?especialista=1` , {
                headers,
            });
            return response.data;
        } catch (error) {
            console.error('Erro ao Carregar Listagem de Especialidades', error);
            throw error;
        }
    },
    

}