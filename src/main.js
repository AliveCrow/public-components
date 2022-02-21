/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-02-18 13:26:12
 * @LastEditTime: 2022-02-18 14:25:53
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(Element, { size: 'small', zIndex: 3000 });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
