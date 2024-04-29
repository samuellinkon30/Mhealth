import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueTheMask from 'vue-the-mask'

import 'vuetify/styles/main.css'
import '@mdi/font/css/materialdesignicons.css' 
import "qalendar/dist/style.css";

import { createVuetify } from 'vuetify'
import * as directives from 'vuetify/lib/directives'
import * as components from 'vuetify/components'
import * as labsComponents from 'vuetify/labs/components'

import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure your project is capable of handling css files
import { aliases, md } from 'vuetify/iconsets/md'



const vuetify = createVuetify({
    components: {
        ...components,
        ...labsComponents,
        icons: {
            defaultSet: 'md',
            aliases,
            sets: {
              md,
            },
          },
        
      },
    directives,

    // Defina o conjunto padrão de ícones como mdi
    icons: {
        defaultSet: 'mdi'
    }
})

createApp(App)
    .use(store)
    .use(VueTheMask)
    .use(router)
    .use(vuetify)
    .mount("#app");