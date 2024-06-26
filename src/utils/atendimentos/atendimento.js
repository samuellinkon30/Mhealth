import api from '../api'

export default{
    async getListAtendimentos(accessToken, especialidade, especialista){
        try {
            const headers = {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json', 
            };
            const response = await api.get(`/atendimentos?id_especialidade=${especialidade}&id_funcionario=${especialista}` , {
                headers,
            });
            return response.data;
        } catch (error) {
            console.error('Erro ao Carregar Listagem de Pacientes', error);
            throw error;
        }
    },

}