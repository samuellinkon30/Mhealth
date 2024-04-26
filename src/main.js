import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import 'vuetify/styles/main.css'
import '@mdi/font/css/materialdesignicons.css' 
import "qalendar/dist/style.css";

import { createVuetify } from 'vuetify'
import * as directives from 'vuetify/lib/directives'
import * as components from 'vuetify/components'
import * as labsComponents from 'vuetify/labs/components'


const vuetify = createVuetify({
    components: {
        ...components,
        ...labsComponents,
        
      },
    directives,

    // Defina o conjunto padrão de ícones como mdi
    icons: {
        defaultSet: 'mdi'
    }
})

createApp(App)
    .use(store)
    .use(router)
    .use(vuetify)
    .mount("#app");
