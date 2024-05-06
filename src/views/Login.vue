<template>
  <div class="login">
  <div class="banner"></div>
  <div class="info">
    <v-form @submit.prevent="onSubmit">
      <v-container>
        <v-row class="login" justify="center" align="center"> 
          
          <v-col
            cols="10"
            md="4"
          >
          <img class="logo" src="../assets/logomlovi.png">
            <v-text-field
              v-model="email"
              :counter="10"
              :rules="nameRules"
              label="Usuário"
              required
              type="email"
            >
        </v-text-field>
        <v-text-field
            v-model="password"
            :counter="10"
            :rules="nameRules"
            label="Senha"
            type="password"
            required
          ></v-text-field>

          <v-btn @click="onSubmit">
            Entrar
          </v-btn>
          <v-col
          cols="12"
          md="12"
        ><a href="#"><span>Esqueci minha senha</span></a>
      </v-col>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
  </div>
  <v-dialog max-width="500" v-model="isActive">  
    <template v-slot:default="{ isActive }">
      <v-card title="Erro!">
        <v-card-text>
          Usuário ou senha não não encontrado, por favor tente novamente
        </v-card-text>
  
        <v-card-actions>
          <v-spacer></v-spacer>
  
          <v-btn
            text="ok"
            @click="isActive.value = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
  </template>
  
  <script>
import api from "@/utils/login.js"
import { mapState, mapActions } from "vuex"

  export default {
    data(){
        return{
            email:'',
            password:'',
            isActive:false
        }
    },
    methods: {
      ...mapActions(["login"]),

      async onSubmit() {
        const obj = {
          'email':this.email,
          'password': this.password,
        }
        try {
          const response = await api.login(obj);
          console.log(response);
          this.login(response.token);
        } catch (error) {
          console.error('Erro ao realizar login');
        }
      },
      redirectTo(path) {
        this.$router.push(path);
        this.redirectTo('/dashboard/home')
      }
    }
  }
  </script>
  
  <style scoped>
  .info {
    width: 50%;
} 
  .banner {
    background-image: url('../assets/bg-login.png');
    width: 50%;
    height: 100vh;
    background-size: cover;
  }
  .v-row.login {
    justify-content: center;
  }
  .v-row.login .v-input {
      margin: 15px 0px;
  }
  .login {
    display: flex;
    width: 100%;
    height: 100vh;
  }
img.logo {
  width: 250px;
}
.login a {
  color: #33265d;
  text-decoration: none;
}
</style>
  