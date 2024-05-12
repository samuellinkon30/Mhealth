<template>
    <div class="menu">
        <div class="left_side_item">
            <div class="logo">
                <router-link to="/dashboard/home">
                    <img src="../assets/logomlovibranca.png"/>
                </router-link>
                
            </div>
            <div class="itens">
                <ul>
                    <li>
                        <v-menu>
                            <template v-slot:activator="{ props }">
                              <v-btn
                                v-bind="props"
                                class="btn-menu"
                              >
                              Agenda
                              </v-btn>
                            </template>
                            <v-list class="list_submenu">
                              <v-list-item>
                                <v-list-item-title>
                                    <router-link to="/dashboard/novo-agendamento">Novo Agendamento</router-link>
                                </v-list-item-title>
                                <v-list-item-title>
                                    <router-link to="/dashboard/calendario">Calendário</router-link>
                                </v-list-item-title>
                                
                                <v-list-item-title>
                                    <router-link to="/dashboard/lista-de-espera">Lista de Espera</router-link>
                                </v-list-item-title>
                                <v-list-item-title>
                                    <router-link to="/dashboard/painel-do-dia">Painel do Dia</router-link>
                                </v-list-item-title>
                              </v-list-item>
                            </v-list>
                          </v-menu>
                    </li>
                    <li>
                        <v-menu>
                            <template v-slot:activator="{ props }">
                              <v-btn
                                v-bind="props"
                                class="btn-menu"
                              >
                             Pacientes
                              </v-btn>
                            </template>
                            <v-list class="list_submenu">
                              <v-list-item>
                                <v-list-item-title>
                                    <router-link to="/dashboard/novo-paciente">Novo Paciente</router-link>
                                </v-list-item-title>

                                <v-list-item-title>
                                    <router-link to="/dashboard/pesquisar-paciente">Buscar Paciente</router-link>
                                </v-list-item-title>
                                
                                <v-list-item-title>
                                    <router-link to="/dashboard/exportar-paciente">Exportar Pacientes</router-link>
                                </v-list-item-title>
                                
                              </v-list-item>
                            </v-list>
                          </v-menu>
                    </li>
                    <li>
                        <v-menu>
                            <template v-slot:activator="{ props }">
                              <v-btn
                                v-bind="props"
                                class="btn-menu"
                              >
                             Financeiro
                              </v-btn>
                            </template>
                            <v-list class="list_submenu">
                              <v-list-item>
                                <v-list-item-title>
                                    <a href="">Receita</a>
                                </v-list-item-title>

                                <v-list-item-title>
                                    <a href="">Vendas</a>
                                </v-list-item-title>
                                
                                <v-list-item-title>
                                    <a href="">Repasse</a>
                                </v-list-item-title>

                                <v-list-item-title>
                                    <a href="">Recibos</a>
                                </v-list-item-title>
                                
                                
                              </v-list-item>
                            </v-list>
                          </v-menu>
                    </li>
                    <li>
                        <v-menu>
                            <template v-slot:activator="{ props }">
                              <v-btn
                                v-bind="props"
                                class="btn-menu"
                              >
                             Administração
                              </v-btn>
                            </template>
                            <v-list class="list_submenu">
                              <v-list-item>
                                <v-list-item-title>
                                    <a href="">Meu Perfil</a>
                                </v-list-item-title>

                                <v-list-item-title>
                                    <a href="">Usuários de Sistemas</a>
                                </v-list-item-title>                                                
                                <v-list-item-title>
                                    <a href="">Configurações</a>
                                </v-list-item-title>

                                <v-list-item-title>
                                    <a href="">Suporte</a>
                                </v-list-item-title>
                              </v-list-item>
                            </v-list>
                          </v-menu>
                    </li>
                   
                </ul>
            </div>
        </div>
        <div class="rigth_side_item">
            <div class="actions">
                <v-icon
                icon="mdi-bell-badge-outline"
                size="large"
                color="white"
              ></v-icon>
              <v-menu>
                <template v-slot:activator="{ props }">
                  <v-btn
                    v-bind="props"
                    class="btn-action-perfil"
                  >
                 SL
                  </v-btn>
                </template>
                <v-list class="list_submenu">
                  <v-list-item>
                    <v-list-item-title>
                        <a href="">Meu Perfil</a>
                    </v-list-item-title>

                    <v-list-item-title>
                        <a href="">Usuários de Sistemas</a>
                    </v-list-item-title>
                    
                    <v-list-item-title>
                        <a href="">Integrações</a>
                    </v-list-item-title>
                    
                    <v-list-item-title>
                        <a href="">Configurações</a>
                    </v-list-item-title>

                    <v-list-item-title>
                        <a href="">Suporte</a>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
        </div>
    
    </div>
</template>

<style scoped>
.left_side_item{
    display: flex;
    align-items: center;
}
.menu{
    display: flex;
    justify-content: space-between;
    background-color: #33265d;
    align-items: center;
    padding: 5px 0px;
    height: 45px;
}
.logo {
    display: flex;
    align-items: center;
}
.logo img {
    width: 100px;
}
.itens ul {
    display: flex;
    justify-content: space-between;
}
.itens ul li{
    list-style: none;
    display: flex;
    align-items: center;
}
.itens ul li a{
    color: white;
    text-decoration: none;
    font-weight: 600;
    display: block;
    height: 50px;
    align-items: center;
    display: flex;
}
.actions {
    display: flex;
    gap: 10px;
    align-items: center;
}
.info_user span {
    color: #33265d;
    background-color: white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.left_side_item {
    display: flex;
    gap: 5px;
    align-items: center;
    margin-left: 25px;
}
button.v-btn.v-btn--elevated.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.btn-menu {
    background-color: transparent;
    color: white;
    font-weight: 600;
    height: 45px;
    border-radius: 0 !important;
    font-size: 11px;
}
.list_submenu {
    background-color: #33265d !important;
    padding: 0;
}
.v-list-item.v-theme--light.v-list-item--density-default.v-list-item--one-line.v-list-item--variant-text {
    padding: 0;
}
.v-list-item-title {
    height: 50px;
    padding: 0px 10px !important;
    display: flex;
    align-items: center;
    transition: all 500ms linear;
}
.v-list.v-theme--light.v-list--density-default.v-list--one-line.list_submenu {
    padding: 0;
}
.v-list-item-title:hover {
    background-color: #67569d !important;
}
.v-list-item-title a {
    color: white;
    width: 100%;
    display: block;
    text-decoration: none;
    font-size: 15px;
}
.rigth_side_item{
    margin-right: 25px;
}
button.v-btn.v-btn--elevated.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.btn-action-perfil{
    background-color: transparent;
    font-weight: 600;
    height: 48px;
    border-radius: 50% !important;
    width: 48px !important;
}
button.v-btn.v-btn--elevated.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.btn-action-perfil span.v-btn__content {
    background-color: white;
    color: #33265d;
    padding: 10px;
    border-radius: 50%;
}
</style>