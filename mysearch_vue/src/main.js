import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element.js'
import ElementUI from 'element-ui';
import Unicon from 'vue-unicons'
import {uniLayerGroupMonochrome, uniCarWash} from 'vue-unicons/dist/icons'

Unicon.add([uniLayerGroupMonochrome, uniCarWash])

Vue.use(ElementUI);
Vue.use(Unicon)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
