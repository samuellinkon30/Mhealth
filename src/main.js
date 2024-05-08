import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueTheMask from 'vue-the-mask'

import { createVuetify } from 'vuetify'
import * as directives from 'vuetify/lib/directives'
import * as components from 'vuetify/lib/components'
import * as labsComponents from 'vuetify/lib/labs'

import 'vuetify/styles/main.css'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    components: {
        ...components,
        ...labsComponents,
    },
    directives,
    icons: {
        defaultSet: 'mdi',
    }
})

createApp(App)
    .use(store)
    .use(VueTheMask)
    .use(router)
    .use(vuetify)
    .mount("#app");
