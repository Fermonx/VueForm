// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import { store } from './store/store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/stylesheets/index.css'
Vue.config.productionTip = false;
Vue.use(BootstrapVue);


//Components

import form from './components/mainForm'


Vue.component('form',form);

new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
});
