<template>
    <div class="global_panel">
        <div class="welcome_mensage">
            <p>Bem Vindo, <strong>Samuel Linkon!</strong></p>
        </div>
        <div class="cards_info">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    </div>
    
</template>

<script>
import Card from '../components/Card.vue'

export default{
    data(){
        return{

        }
    },
    components:{
        Card
    }
}
</script>
<style scoped>
    .cards_info{
        display: flex;
    }
    .welcome_mensage {
        display: block;
        text-align: left;
        padding: 30px;
    }
</style>