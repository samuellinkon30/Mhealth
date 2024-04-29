import api from './api'

export default{
    async getEnrolbByCourse(accessToken, id){
        try {
            const headers = {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json', 
            };
            const response = await api.get(`/enrol/course/${id}?linesPerPage=100`, {
                headers,
            });
            return response.data;
        } catch (error) {
            console.error('Erro ao obter dados das matricula:', error);
            throw error;
        }
    },
}