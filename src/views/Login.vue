<template>
    <v-form>
      <v-container>
        <v-row class="login">
          <v-col
            cols="12"
            md="2"
          >
            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Nome"
              required
              type="email"
            >
        </v-text-field>
        <v-text-field
            v-model="paswword"
            :counter="10"
            :rules="nameRules"
            label="Senha"
            type="password"
            required
          ></v-text-field>
          <v-btn @click="onClick">
            Entrar
          </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </template>
  
  <script>
  export default {
    data(){
        return{
            name:'',
            password:''
        }
    },
    methods: {
      onClick() {
        alert('Botão clicado!');
      }
    }
  }
  </script>
  
  <style scoped>
  .v-row.login {
    /* gap: 10px; */
    justify-content: center;
}
.v-row.login .v-input {
    margin: 15px 0px;
}
</style>
  