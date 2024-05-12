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
        <div class="box_grid">
            <div class="box-1"></div>
            <div class="box-2"></div>
        </div>
        <div class="box_grid_full">

    
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
        gap: 10px;
    }
    .welcome_mensage {
        display: block;
        text-align: left;
        padding: 30px;
    }
    .box-1 {
        width: 100%;
        background-color: #e5e5e5;
        height: 300px;
        display: block;
    }
    .box-2 {
        width: 100%;
        background-color: #e5e5e5;
        height: 300px;
        display: block;
    }
    .box_grid {
        display: flex;
        gap: 10px;
        margin-top: 20px;
    }
    .box_grid_full {
        width: 100%;
        background-color: #cfcfcf;
        height: 300px;
        margin-top: 10px;
    }
</style>