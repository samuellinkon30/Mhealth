<template>
  <Loader :isActive="hasLoad"></Loader>
  <div class="global_new_patient">
      <Breadcrumbs :list="breadcrumbs"></Breadcrumbs>
      <v-form ref="form" @submit.prevent="submitUser">
          <v-container class="dados_paciente">
              <v-row class="submit">
                  <v-btn class="mt-2" @click="submitUser()">Enviar</v-btn>
              </v-row>

              <div class="title">
                  <h5>Dados do Paciente</h5>
              </div>
              <v-row>
                  <v-col class="collum_flex" cols="8" md="8">
                      <v-text-field
                          v-model="nome"
                          :rules="nomeRules"
                          label="Nome"
                          required
                          variant="outlined"
                          style="height: 20px"
                      ></v-text-field>
                  </v-col>

                  <v-col class="collum_flex" cols="4" md="4">
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
                <v-col class="collum_flex" cols="12" md="12">
                    <v-text-field
                        v-model="nomePai"
                        :rules="nomeRules"
                        label="Nome do Pai"
                        required
                        variant="outlined"
                        style="height: 20px"
                    ></v-text-field>
                    <v-text-field
                    v-model="nomeMae"
                    label="Nome da Mãe"
                    :rules="nomeRules"
                    required
                    variant="outlined"
                    style="height: 20px"
                ></v-text-field>
                </v-col>

            </v-row>

              <v-row>
                  <v-col class="collum_flex" cols="12" md="12">
                      <v-text-field
                          v-model="email"
                          label="Email"
                          required
                          variant="outlined"
                          :rules="emailRules"
                      ></v-text-field>

                      <v-text-field
                      v-model="telefone"
                      label="Telefone"
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
                          :items="['M', 'F']"
                          required
                          variant="outlined"
                          :rules="sexoRules"
                      ></v-select>

                      <v-file-input
                          clearable
                          label="Foto"
                          variant="outlined"
                      ></v-file-input>
                  </v-col>
              </v-row>

              <v-row>
                  <v-col class="collum_flex" cols="12" md="12">
                    

                       <v-text-field
                          v-model="cep"
                          label="Cep"
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
                  <v-col class="collum_flex" cols="12" md="12">
                      <v-textarea
                          clearable
                          label="Diagnóstico"
                          variant="outlined"
                          v-model="diagnostico"
                          :rules="diagnosticoRules"
                      ></v-textarea>
                  </v-col>
              </v-row>
          </v-container>

          
          <!-- Dados do Convênio -->
          <v-container class="dados_convenio">
              <div class="title">
                  <h5>Dados do Convênio</h5>
                  <v-btn @click="addConvenio">+</v-btn>
              </div>
              <v-row v-for="(convenio, index) in convenios" :key="index">
                  <v-col class="collum_flex" cols="8" md="8">
                      <v-select
                          v-model="convenio.id"
                          :items="dataConvenios.map(item => item.nome)"
                          label="Convênio"
                          required
                          variant="outlined"
                      ></v-select>
                      {{ convenio.nome }}
                  
                      <v-text-field
                          v-model="convenio.cns"
                          label="Carteira Nacional de Saúde"
                          required
                          variant="outlined"
                      ></v-text-field>
                  </v-col>
                  <v-col class="collum_flex actions" cols="4" md="4">
                      <v-checkbox
                          label="Primário"
                          v-model="primaryConvenio"
                      ></v-checkbox>
                      <v-btn @click="removeConvenio(index)" v-show="index>0">
                          <v-icon>mdi-trash-can-outline</v-icon>
                      </v-btn>
                  </v-col>
              </v-row>
          </v-container>

          <!-- Dados do Responsável -->
          <v-container class="dados_responsavel">
              <div class="title">
                  <h5>Dados do Responsável</h5>
                  <v-btn @click="addResponsavel">+</v-btn>
              </div>
              <v-row
                  v-for="(responsavel, index) in responsaveis"
                  :key="index"
              >
                  <v-row class="full">
                      <v-col class="collum_flex" cols="12" md="12">
                          <v-text-field
                              v-model="responsavel.nome"
                              label="Nome"
                              required
                              variant="outlined"
                          ></v-text-field>

                          <v-text-field
                              v-model="responsavel.cpf"
                              label="CPF"
                              required
                              variant="outlined"
                              :disabled="cpfDisabled"
                              v-mask="'###.###.###-##'"
                              :rules="cpfRules"
                          ></v-text-field>

                          <v-text-field
                              v-model="responsavel.email"
                              label="Email"
                              required
                              variant="outlined"
                              :rules="emailRules"
                          ></v-text-field>

                          <v-text-field
                              v-model="responsavel.data_nascimento"
                              label="Data de Nascimento"
                              required
                              variant="outlined"
                              type="date"
                              :rules="dataNascimentoRules"
                          ></v-text-field>

                          <v-select
                              v-model="responsavel.sexo"
                              label="Sexo"
                              :items="['M', 'F']"
                              required
                              variant="outlined"
                              :rules="sexoRules"
                          ></v-select>

                          <v-select
                          v-model="responsavel.relacionamento"
                          label="Parentesco"
                          :items="['Pai/Mãe', 'Irmão/Irmã','Avó/Avó','Tio/Tia']"
                          required
                          variant="outlined"
                          :rules="sexoRules"
                      ></v-select>

                      <v-select
                      v-model="responsavel.responsavelFinanceiro"
                      label="Responável Finânceiro"
                      :items="['Sim', 'Não']"
                      required
                      variant="outlined"
                      :rules="sexoRules"
                  ></v-select>
                      </v-col>
                  </v-row>
              </v-row>
          </v-container>
      </v-form>
  </div>
  <button @click="mountParentescoArray()">test</button>
</template>

<script>
  import Loader from '@/components/utils/Loader.vue';
  import Breadcrumbs from '@/components/utils/Breadcrumbs.vue';
  import api from "@/utils/patient/paitients";
  import apiConvenios from '@/utils/convenios/convenios'
  import { mapState } from 'vuex';

  export default {
    data() {
      return {
        nome: '',
        cpf: '',
        cpfDisabled: null,
        email: '',
        data_nascimento: '',
        sexo: '',
        foto: '',
        rua: '',
        cep:'',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: '',
        pais: '',
        telefone: '',
        cns: '',
        diagnostico: '',
        dataConvenios:[],
        dataConveniosAux:[],
        nomePai:'',
        nomeMae:'',
        estados: [
          'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal',
          'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul',
          'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro',
          'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina',
          'São Paulo', 'Sergipe', 'Tocantins'
        ],
        hasLoad:false,
        convenios: [{ id: "", cns: ""}],
        primaryConvenio:null,
        primaryFinanceiro:null,
        responsaveis: [{ nome: "", cpf: "", email: "", data_nascimento:"", sexo:"",responsavelFinanceiro:"", relacionamento:"" }],
        breadcrumbs:['Dashboard', 'Paciente', 'Novo Paciente'],
      }

    },
    computed: {
      ...mapState(['token']),
      nomeRules() {
        return [
          v => !!v || 'Nome é obrigatório',
        ]
      },
      cpfRules() {
        return [
          v => !!v || 'CPF é obrigatório',
          v => (v && v.length === 14) || 'CPF incompleto',
        ]
      },
      emailRules() {
        return [
          v => !!v || 'Email é obrigatório',
          v => /.+@.+\..+/.test(v) || 'Email precisa ser válido',
        ]
      },
      dataNascimentoRules() {
        return [
          v => !!v || 'Data de nascimento é obrigatória',
        ]
      },
      sexoRules() {
        return [
          v => !!v || 'Sexo é obrigatório',
        ]
      },
      ruaRules() {
        return [
          v => !!v || 'Rua é obrigatória',
        ]
      },
      numeroRules() {
        return [
          v => !!v || 'Número é obrigatório',
        ]
      },
      complementoRules() {
        return [
          v => !!v || 'Complemento é obrigatório',
        ]
      },
      bairroRules() {
        return [
          v => !!v || 'Bairro é obrigatório',
        ]
      },
      cidadeRules() {
        return [
          v => !!v || 'Cidade é obrigatória',
        ]
      },
      estadoRules() {
        return [
          v => !!v || 'Estado é obrigatório',
        ]
      },
      paisRules() {
        return [
          v => !!v || 'País é obrigatório',
        ]
      },
      telefoneRules() {
        return [
          v => !!v || 'Telefone é obrigatório',
        ]
      },
      cnsRules() {
        return [
          v => !!v || 'Carteira Nacional de Saúde é obrigatória',
        ]
      },
      diagnosticoRules() {
        return [
          v => !!v || 'Diagnóstico é obrigatório',
        ]
      }
    },
    created(){
      this.getListConvenios();
    },

    methods: {
      async submitUser(){
        this.verifyId();
        this.mountParentescoArray();
        const payload = {
          nome: this.nome,
          cpf: this.cpf,
          email: this.email,
          data_nascimento: this.data_nascimento,
          sexo: this.sexo,
          foto: this.foto,
          cep: this.cep,
          endereco: this.rua,
          numero: this.numero,
          complemento: this.complemento,
          bairro: this.bairro,
          cidade: this.cidade,
          estado: this.estado,
          pais: this.pais,
          telefone: this.telefone,
          celulcar: this.telefone,
          diagnostico: this.diagnostico,
          responsaveis: this.responsaveis,
          convenios: this.dataConveniosAux,
          nomePai: this.nomePai,
          nomeMae: this.nomeMae,
        }
        try {
            const response = await api.createPatiente(this.token, payload)
        } catch (error) {
            console.error(error)
        }
      },
      verifyId() {
        this.dataConveniosAux = [];
            this.convenios.forEach(value => {
              this.dataConvenios.map(item => {
                      if (item.nome === value.id) {
                        this.dataConveniosAux.push({'id':item.id, 'carteira':value.cns})                          
                      } 
                  });
            });
          },
          mountParentescoArray() {
    this.responsaveis.forEach(item => {
        Object.assign(item, {
            cep: this.cep,
            endereco: this.rua,
            numero: this.numero,
            complemento: this.complemento,
            bairro: this.bairro,
            cidade: this.cidade,
            estado: this.estado,
            pais: this.pais,
        });
    });
},
      submit() {
        if (this.$refs.form.validate()) return false;
        this.hasLoad = !this.hasLoad;
        const paciente = {
          nome: this.nome,
          cpf: this.cpf,
          email: this.email,
          data_nascimento: this.data_nascimento,
          sexo: this.sexo,
          foto: this.foto,
          endereco: {
            rua: this.rua,
            numero: this.numero,
            complemento: this.complemento,
            bairro: this.bairro,
            cidade: this.cidade,
            estado: this.estado,
            pais: this.pais
          },
          telefone: this.telefone,
          cns: this.cns,
          diagnostico: this.diagnostico
        };
      },
      async getListConvenios(){
        try {
            const response =  await apiConvenios.getListConvenios(this.token);
            this.dataConvenios = response;
        } catch (error) {
          console.log(error)
        }
      },
    addConvenio() {
        this.convenios.push({ nome: "", cns: "", primario: false });
    },
    removeConvenio(index) {
        if(index==0) return false;
        this.convenios.splice(index, 1);
    },

    addResponsavel() {
        this.responsaveis.push({ nome: "", cpf: "", telefone: "", financeiro: false });
    },
    removeResponsavel(index) {
        if(index==0) return false;
        this.responsaveis.splice(index, 1);
    },
    },
    components:{
        Loader,
        Breadcrumbs
    }
  };
</script>

<style>
  .collum_flex {
      display: flex;
      gap: 10px;
  }
  .v-input__details {
      text-align: left;
  }

  .global_new_patient .v-field__field,
  .global_new_patient .v-input--horizontal {
      height: 50px !important;
  }
  .v-container.v-locale--is-ltr.dados_paciente {
      background-color: #ffffff;
      padding: 30px;
      max-width: 100%;
  }
  .v-container.v-locale--is-ltr.dados_responsavel {
      background-color: #ffffff;
      padding: 30px;
      max-width: 100%;
  }
  .v-container.v-locale--is-ltr.dados_convenio {
      background-color: #ffffff;
      padding: 30px;
      max-width: 100%;
  }
  .v-container.v-locale--is-ltr {
      margin-bottom: 10px;
  }
  .title {
      text-align: left;
      padding: 10px 0px;
      display: flex;
      justify-content: space-between;
      font-size: 18px;
  }
  .v-col-md-4.v-col-4.collum_flex {
      align-items: center;
  }
  .v-col-md-4.v-col-4.collum_flex.actions {
      justify-content: space-between;
  }
  .v-col-md-2.v-col-2.collum_flex.actions {
      align-items: center;
  }
  .submit {
      display: flex;
      justify-content: flex-end;
  }
  .global_new_patient {
      padding-bottom: 50px;
  }
  .full {
      width: 100%;
  }
</style>
