import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Importe o Vuetify e os estilos necessários
import 'vuetify/styles/main.css'
import '@mdi/font/css/materialdesignicons.css' // Importe o arquivo de ícones

// Importe as funções de criação do Vuetify e os componentes/diretivas necessários
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/lib/components'
import * as directives from 'vuetify/lib/directives'

// Crie a instância do Vuetify
const vuetify = createVuetify({
    // Adicione os componentes e diretivas do Vuetify
    components,
    directives,

    // Defina o conjunto padrão de ícones como mdi
    icons: {
        defaultSet: 'mdi'
    }
})

// Crie o aplicativo Vue usando o Vue Router, Vuex e Vuetify
createApp(App)
    .use(store)
    .use(router)
    .use(vuetify) // Use o Vuetify no aplicativo
    .mount("#app");
