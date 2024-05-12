import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueTheMask from 'vue-the-mask'

import { createVuetify } from 'vuetify'
import * as directives from 'vuetify/lib/directives'
import * as components from 'vuetify/lib/components'
import * as labsComponents from 'vuetify/lib/labs'

import Plugin from '@quasar/quasar-ui-qcalendar'
import '@quasar/quasar-ui-qcalendar/dist/index.css'

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

const app = createApp(App)

app.use(store)
app.use(VueTheMask)
app.use(router)
app.use(vuetify)
app.use(Plugin) // Importe o Plugin do qCalendar aqui
app.mount("#app");
