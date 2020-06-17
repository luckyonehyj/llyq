import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'lib-flexible/flexible'
import 'normalize.css'
import ElementUI from 'element-ui';
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css'
Vue.use(ElementUI);
Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')