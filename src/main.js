// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VModal from 'vue-js-modal'
import App from './App'
import { store } from './store/store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/stylesheets/index.css'
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VModal,{dialog: true});


//Components

import mainForm from './components/mainForm'



Vue.component('mainform',mainForm);

new Vue({
  el: '#app',
  data:{

  },
  store,
  components: { App },
  template: '<App/>'
});
