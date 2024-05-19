import api from '../api'

export default{
    async getListConvenios(accessToken){
        try {
            const headers = {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json', 
            };
            const response = await api.get(`/convenios` , {
                headers,
            });
            return response.data;
        } catch (error) {
            console.error('Erro ao Carregar Listagem de Convênios', error);
            throw error;
        }
    },

}