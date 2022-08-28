import Vue from 'vue'
import App from './App.vue'

// import llgtfooComponentsBox from "llgtfoo-components-box.js";
// Vue.use(llgtfooComponentsBox)


import iyy from 'iyy-desgin'

Vue.use(iyy)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')