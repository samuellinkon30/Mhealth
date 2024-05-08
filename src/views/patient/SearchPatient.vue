<template>
    <div class="global_search_patient">
       <div class="title">
        <!-- <p>Pesquise por paciente </p> -->
        <span class="subtitle"> Pesquise por nome, CPF ou outros...</span>
        <v-container class="actions">
            <v-col class="collum_flex" cols="12" md="10"> 
                <v-card-text>
                    <v-text-field
                        :loading="loading"
                        append-inner-icon="mdi-magnify"
                        density="compact"
                        label="Pesquise..."
                        variant="solo"
                        hide-details
                        single-line
                        @click:append-inner="onClick"
                    ></v-text-field>
                </v-card-text>
            </v-col>
            <v-col class="collum_flex" cols="12">
                <v-btn class="mt-2" @click="submit" >Pesquisar</v-btn>
            </v-col>
        </v-container>

       </div>

       <div class="action">

       </div>

       <div class="result_patient" >
            <v-container class="box_info" v-for="(patient, index) in data" @click="goToPatient(patient.id)" :key="index">
                <v-col cols="12" md="1"><v-icon>mdi-badge-account-outline</v-icon></v-col>
                <v-col cols="12" md="8" class="info_patiente_data">
                    <span class="primary_info">#{{ index }} - {{patient.nome}}</span>
                    <span class="secondary_info">CNS: 0011198210</span>
                </v-col>
               
                <v-col cols="12" md="2">
                    <span>
                        <v-icon>mdi-account-check</v-icon>
                        Status: Ativo
                    </span>
                </v-col>
                <v-col cols="12" md="1">
                    <v-menu>
                        <template v-slot:activator="{ props }">
                          <v-btn
                            v-bind="props"
                            class=""
                          >
                          <v-icon>mdi-cog-outline</v-icon>
                          </v-btn>
                        </template>
                        <v-list>
                          <v-list-item>
                            <v-list-item-title v-for="i in 5" :key="i">
                                <a href="">Configuração {{i}}</a>
                            </v-list-item-title>                                             
                          </v-list-item>
                        </v-list>
                      </v-menu>
                </v-col>
            </v-container>
       </div>
    </div>
    
</template>

<script>
import api from "@/utils/patient/paitients"
import { mapState } from "vuex"

export default{
    data(){
        return{
            loaded: false,
            loading: false,
            data:[],
        }
    },
    computed:{
        ...mapState(['token'])
    },
    methods:{
        async getListPatientes(){
            try {
                const response = await api.getListPatientes(this.token);
                console.debug(response);
                this.data = response
            } catch (error) {
                console.error('Erro ao gerar lista de pacientes.')
            }
        },
        goToPatient(slug){
            this.$router.push('/dashboard/paciente/' + slug)
        },
        onClick () {
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 2000)
      },
    },
    created(){
        this.getListPatientes();
    },      
}
</script>
<style scoped>
.result_patient {
    margin: 20px;
}
.box_info {
    display: flex;
    width: 100%;
}
.box_info[data-v-4a50692e] {
    display: flex;
    width: 100%;
    border: 1px solid #dddddd;
    margin: 10px 0px;
    border-radius: 5px;
    max-width: 100%;
    background-color: white;
    padding: 0;
    align-items: center;
}
.title {
    display: block;
    padding: 20px;
}
span.subtitle {
    font-size: 13px;
}
.v-container.v-locale--is-ltr.actions {
    display: flex;
    width: 100%;
    align-items: center;
    margin: 0;
    padding: 0;
    max-width: 100%;
    gap: 20px;
}
button.v-btn.v-btn--elevated.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.mt-2 {
    margin: 0 !important;
    height: 40px;
}
.v-container.v-locale--is-ltr.actions > div {
    padding: 0;
}
.v-container.v-locale--is-ltr.actions .v-card-text {
    padding: 0;
}
.v-col-md-9.v-col-12.info_patiente_data {
    text-align: left;
    display: flex;
    flex-direction: column;
}
.v-col-md-8.v-col-12.info_patiente_data{
    text-align: left;
    display: flex;
    flex-direction: column;
    cursor: pointer;
}
span.secondary_info {
    font-size: 12px;
}
.result_patient i {
    color: #33265d;
}
.v-list-item-title {
    padding: 10px 20px;
}
.v-list-item-title a{
    text-decoration: none;
    color: black;
}
.v-list-item.v-theme--light.v-list-item--density-default.v-list-item--one-line.v-list-item--variant-text{
    padding: 0;
}
.v-list-item-title:hover {
    background-color: #f8f8f8;
}
</style>