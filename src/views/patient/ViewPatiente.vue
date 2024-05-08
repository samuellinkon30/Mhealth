<template>
  <div class="global_patient">
    <Loader :is-active="!hasReady"></Loader>
      <div class="sidebar">
          <div class="image">
              <img src="../../assets/patient/1.png" v-show="data.sexo==='M'"/>
              <img src="../../assets/patient/2.png" v-show="data.sexo==='F'"/>
          </div>
          <div class="name">
              <strong> {{data.nome}}</strong>
          </div>
          <div class="personal_data">
              <ul>
                  <li>
                      Paciente: <strong> #{{data.id}}</strong>
                  </li>
                  <li>
                      CNS: <strong> {{data.cns}}</strong>
                  </li>
                  <li>
                      CPF: <strong> {{data.cpf}}</strong>
                  </li>
                  <li>
                      Plano: <strong> </strong>
                  </li>
                  <li>
                      Data de Nascimento: <strong> {{dataNascimento}}</strong>
                  </li>
                  <li>
                      Sexo: <strong> {{data.sexo}}</strong>
                  </li>
              </ul>
          </div>
      </div>
      <div class="content">
          <div class="content_personal_data">
              <v-expansion-panels  multiple v-model="selectedPanel">
                  <v-expansion-panel>
                      <v-expansion-panel-title><v-icon>mdi-account</v-icon> Dados Pessoais</v-expansion-panel-title>
                      <v-expansion-panel-text>
                          <v-row>
                             
                              <v-col
                                class="collum_flex"
                                cols="12"
                                md="8"
                              >
                                <v-text-field
                                  v-model="nome"
                                  :rules="nomeRules"
                                  label="Nome"
                                  required
                                  variant="outlined"
                                  style="height: 20px;"
                                ></v-text-field>
                              </v-col>
                    
                              <v-col
                                class="collum_flex"
                                cols="12"
                                md="4"
                              >
                                <v-text-field
                                  v-model="cpf"
                                  label="CPF"
                                  required
                                  variant="outlined"
                                  :disabled="cpfDisabled"
                                  v-mask="'###.###.###-##'"
                                  :rules="cpfRules"
                                ></v-text-field>
                                
                              </v-col>
                            </v-row>
                    
                            <v-row>
                              <v-col
                                class="collum_flex"
                                cols="12"
                                md="12"
                              >
                                <v-select
                                  v-model="status"
                                  label="Status"
                                  :items="['Ativo', 'Inativo']"
                                  required
                                  variant="outlined"
                                  :rules="sexoRules"
                                ></v-select>

                                <v-text-field
                                  v-model="data.data_nascimento"
                                  label="Data de Nascimento"
                                  required
                                  variant="outlined"
                                  type="date"
                                ></v-text-field>

                                <v-text-field
                                v-model="telefone"
                                label="Telefone"
                                required
                                variant="outlined"
                                :rules="emailRules"
                              ></v-text-field>

                              <v-text-field
                              v-model="Whatsapp"
                              label="Whatsapp"
                              required
                              variant="outlined"
                              :rules="emailRules"
                            ></v-text-field>
                    
                      
                              </v-col>
                            </v-row>
                            
                            <v-row>
                              <v-col
                                class="collum_flex"
                                cols="12"
                                md="12"
                              >


                              <v-text-field
                              v-model="rua"
                              label="CPF"
                              required
                              variant="outlined"
                              :rules="ruaRules"
                            ></v-text-field>

                              <v-select
                              v-model="sexo"
                              label="Sexo"
                              :items="['Masculino', 'Feminino', 'Não informado']"
                              required
                              variant="outlined"
                              :rules="sexoRules"
                            ></v-select>
                
                                <v-text-field
                                  v-model="rua"
                                  label="Rua"
                                  required
                                  variant="outlined"
                                  :rules="ruaRules"
                                ></v-text-field>

                                <v-text-field
                                v-model="rua"
                                label="Rua"
                                required
                                variant="outlined"
                                :rules="ruaRules"
                              ></v-text-field>
                                
                              </v-col>
                            </v-row>
                            <v-divider :thickness="5"></v-divider>

                            <v-row>
                              <v-col
                                class="collum_flex"
                                cols="12"
                                md="12"
                              >
                              
                              <v-text-field
                              v-model="rua"
                              label="CPF"
                              required
                              variant="outlined"
                              :rules="ruaRules"
                            ></v-text-field>


                            <v-text-field
                            v-model="rua"
                            label="CPF"
                            required
                            variant="outlined"
                            :rules="ruaRules"
                          ></v-text-field>


                          <v-select
                          v-model="sexo"
                          label="Sexo"
                          :items="['Masculino', 'Feminino', 'Não informado']"
                          required
                          variant="outlined"
                          :rules="sexoRules"
                        ></v-select>

                              </v-col>
                            </v-row>
                            <v-divider :thickness="5"></v-divider>

                            <v-row>
                              
                              <v-col
                                class="collum_flex"
                                cols="12"
                                md="12"
                              >
                              
                              <v-text-field
                              v-model="rua"
                              label="CPF"
                              required
                              variant="outlined"
                              :rules="ruaRules"
                            ></v-text-field>


                            <v-text-field
                            v-model="rua"
                            label="CPF"
                            required
                            variant="outlined"
                            :rules="ruaRules"
                          ></v-text-field>


                          <v-select
                          v-model="sexo"
                          label="Sexo"
                          :items="['Masculino', 'Feminino', 'Não informado']"
                          required
                          variant="outlined"
                          :rules="sexoRules"
                        ></v-select>

                              </v-col>
                            </v-row>
                      </v-expansion-panel-text>
                  </v-expansion-panel>

                  <v-expansion-panel>
                      <v-expansion-panel-title><v-icon>mdi-card-account-details-outline</v-icon> Dados do Convênio</v-expansion-panel-title>
                      <v-expansion-panel-text>
                          <v-row>
                              <v-col
                                class="collum_flex"
                                cols="8"
                                md="8"
                              >
                                <v-text-field
                                  v-model="nome"
                                  :rules="nomeRules"
                                  label="Nome"
                                  required
                                  variant="outlined"
                                  style="height: 20px;"
                                ></v-text-field>
                              </v-col>
                    
                              <v-col
                                class="collum_flex"
                                cols="4"
                                md="4"
                              >
                                <v-text-field
                                  v-model="cpf"
                                  label="CPF"
                                  required
                                  variant="outlined"
                                  :disabled="cpfDisabled"
                                  v-mask="'###.###.###-##'"
                                  :rules="cpfRules"
                                ></v-text-field>
                                <v-checkbox 
                                  label="Não Possui"
                                  v-model="cpfDisabled"
                                ></v-checkbox>
                              </v-col>
                            </v-row>
                    
                            <v-row>
                              <v-col
                                class="collum_flex"
                                cols="12"
                                md="12"
                              >
                                <v-text-field
                                  v-model="email"
                                  label="Email"
                                  required
                                  variant="outlined"
                                  :rules="emailRules"
                                ></v-text-field>
                    
                                <v-text-field
                                  v-model="data_nascimento"
                                  label="Data de Nascimento"
                                  required
                                  variant="outlined"
                                  type="date"
                                  :rules="dataNascimentoRules"
                                ></v-text-field>
                    
                                <v-select
                                  v-model="sexo"
                                  label="Sexo"
                                  :items="['Masculino', 'Feminino', 'Não informado']"
                                  required
                                  variant="outlined"
                                  :rules="sexoRules"
                                ></v-select>
                    
                                <v-file-input clearable label="Foto" variant="outlined"></v-file-input>
                              </v-col>
                            </v-row>
                            
                            <v-row>
                              <v-col
                                class="collum_flex"
                                cols="12"
                                md="12"
                              >
                                <v-text-field
                                  v-model="rua"
                                  label="Rua"
                                  required
                                  variant="outlined"
                                  :rules="ruaRules"
                                ></v-text-field>
                    
                                <v-text-field
                                  v-model="numero"
                                  label="Número"
                                  required
                                  variant="outlined"
                                  :rules="numeroRules"
                                ></v-text-field>
                    
                                <v-text-field
                                  v-model="complemento"
                                  label="Complemento"
                                  required
                                  variant="outlined"                   
                                  :rules="complementoRules"
                                ></v-text-field>
                    
                                <v-text-field
                                  v-model="bairro"
                                  label="Bairro"
                                  required
                                  variant="outlined"
                                  :rules="bairroRules"
                                ></v-text-field>
                    
                                <v-text-field
                                  v-model="cidade"
                                  label="Cidade"
                                  required
                                  variant="outlined"
                                  :rules="cidadeRules"
                                ></v-text-field>
                    
                                <v-select
                                  v-model="estado"
                                  label="Estado"
                                  :items="estados"
                                  required
                                  variant="outlined"
                                  :rules="estadoRules"
                                ></v-select>
                    
                                <v-select
                                  v-model="pais"
                                  label="País"
                                  :items="['Brasil', 'Outro']"
                                  required
                                  variant="outlined"
                                  :rules="paisRules"
                                ></v-select>
                              </v-col>
                            </v-row>
                            
                            <v-row>
                              <v-col
                                class="collum_flex"
                                cols="12"
                                md="12"
                              >
                                <v-textarea 
                                  clearable 
                                  label="Diagnóstico" 
                                  variant="outlined" 
                                  v-model="diagnostico"
                                  :rules="diagnosticoRules"
                                ></v-textarea>
                              </v-col>
                            </v-row>
                            
                      </v-expansion-panel-text>
                  </v-expansion-panel>

                  <v-expansion-panel>
                      <v-expansion-panel-title><v-icon>mdi-account-child</v-icon> Dados de Parentesco</v-expansion-panel-title>
                      <v-expansion-panel-text>
                          <v-row>
                              <v-col
                                class="collum_flex"
                                cols="8"
                                md="8"
                              >
                                <v-text-field
                                  v-model="nome"
                                  :rules="nomeRules"
                                  label="Nome"
                                  required
                                  variant="outlined"
                                  style="height: 20px;"
                                ></v-text-field>
                              </v-col>
                    
                              <v-col
                                class="collum_flex"
                                cols="4"
                                md="4"
                              >
                                <v-text-field
                                  v-model="cpf"
                                  label="CPF"
                                  required
                                  variant="outlined"
                                  :disabled="cpfDisabled"
                                  v-mask="'###.###.###-##'"
                                  :rules="cpfRules"
                                ></v-text-field>
                                <v-checkbox 
                                  label="Não Possui"
                                  v-model="cpfDisabled"
                                ></v-checkbox>
                              </v-col>
                            </v-row>
                    
                            <v-row>
                              <v-col
                                class="collum_flex"
                                cols="12"
                                md="12"
                              >
                                <v-text-field
                                  v-model="email"
                                  label="Email"
                                  required
                                  variant="outlined"
                                  :rules="emailRules"
                                ></v-text-field>
                    
                                <v-text-field
                                  v-model="dataNascimento"
                                  label="Data de Nascimento"
                                  required
                                  variant="outlined"
                                  type="date"
                                  :rules="dataNascimentoRules"
                                ></v-text-field>
                    
                                <v-select
                                  v-model="sexo"
                                  label="Sexo"
                                  :items="['Masculino', 'Feminino', 'Não informado']"
                                  required
                                  variant="outlined"
                                  :rules="sexoRules"
                                ></v-select>
                    
                                <v-file-input clearable label="Foto" variant="outlined"></v-file-input>
                              </v-col>
                            </v-row>
                            
                            <v-row>
                              <v-col
                                class="collum_flex"
                                cols="12"
                                md="12"
                              >
                                <v-text-field
                                  v-model="rua"
                                  label="Rua"
                                  required
                                  variant="outlined"
                                  :rules="ruaRules"
                                ></v-text-field>
                    
                                <v-text-field
                                  v-model="numero"
                                  label="Número"
                                  required
                                  variant="outlined"
                                  :rules="numeroRules"
                                ></v-text-field>
                    
                                <v-text-field
                                  v-model="complemento"
                                  label="Complemento"
                                  required
                                  variant="outlined"                   
                                  :rules="complementoRules"
                                ></v-text-field>
                    
                                <v-text-field
                                  v-model="bairro"
                                  label="Bairro"
                                  required
                                  variant="outlined"
                                  :rules="bairroRules"
                                ></v-text-field>
                    
                                <v-text-field
                                  v-model="cidade"
                                  label="Cidade"
                                  required
                                  variant="outlined"
                                  :rules="cidadeRules"
                                ></v-text-field>
                    
                                <v-select
                                  v-model="estado"
                                  label="Estado"
                                  :items="estados"
                                  required
                                  variant="outlined"
                                  :rules="estadoRules"
                                ></v-select>
                    
                                <v-select
                                  v-model="pais"
                                  label="País"
                                  :items="['Brasil', 'Outro']"
                                  required
                                  variant="outlined"
                                  :rules="paisRules"
                                ></v-select>
                              </v-col>
                            </v-row>
                            
                            <v-row>
                              <v-col
                                class="collum_flex"
                                cols="12"
                                md="12"
                              >
                                <v-textarea 
                                  clearable 
                                  label="Diagnóstico" 
                                  variant="outlined" 
                                  v-model="diagnostico"
                                  :rules="diagnosticoRules"
                                ></v-textarea>
                              </v-col>
                            </v-row>
                            
                      </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
          </div>
      </div>
  </div>
</template>

<script>
import api from "@/utils/patient/paitients"
import { mapState } from "vuex"
import Loader from "@/components/utils/Loader.vue"

  export default{
      data(){
          return{
              data:[],
              infoPatiente:['990091','99999999999','Unimed Recife','25 anos e 3 meses','30/10/1997','F'],
              selectedPanel: 0,
              nome:'',
              cpf:'',
              dataNascimento:'',
              hasReady:false,
          }
      },
      computed:{
        ...mapState(['token']),
      },
      components:{
        Loader
      },
      methods:{
        async getDataPatient(){
          const param =  this.$route.params.slug;
          try {
            const response =  await api.getDataPatiente(this.token, param);
            this.data = response;
            this.nome= response.nome;
            this.cpf = response.cpf;
            this.dataNascimento =  this.formatarData(response.data_nascimento)
            this.hasReady = true;
            console.debug(response)
          } catch (error) {
            console.error('Erro ao carregar user: ', id, error)
          }
        },
        formatarData(data) {
          const [ano, mes, dia] = data.split('-');
          return `${dia}/${mes}/${ano}`;
      }
      },
      created(){
        this.getDataPatient();
      },
  }
</script>

<style>
.content.dashboard {
  width: 100%;
}
.global_patient {
  display: flex;
  gap: 5px;
}
.sidebar {
  width: 350px;
  background-color: white;
  padding: 20px;
  min-height: 88vh;
}
.content {
  width: calc(100% - 350px);
  background-color: white;
}
.personal_data {
  margin: 30px 10px;
}
.personal_data li{
  list-style: none;
  text-align: left;
  margin: 10px 0px;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 10px;
}
.name {
  border-bottom: 1px solid #c8c8c8;
  padding-bottom: 10px;
}
button.v-expansion-panel-title {
  gap: 10px;
}
hr.v-divider.v-theme--light {
  margin: 20px 0px;
}
</style>
