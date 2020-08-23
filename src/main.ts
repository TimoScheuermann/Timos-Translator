import { store } from '@/store';
import * as TCComponents from 'tccomponents_vue';
import 'tccomponents_vue/lib/tccomponents_vue.css';
import Vue from 'vue';
import { Route } from 'vue-router';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

Vue.config.productionTip = false;

Vue.use(TCComponents, { primaryColor: 'red' });
for (const component in TCComponents) {
  Vue.component(component, TCComponents[component]);
}

router.beforeEach((to: Route, from: Route, next: Function) => {
  const title = to.meta.title || 'TC Components';
  document.title = title;

  const gt = document.querySelector('meta[name="title"]');
  if (gt) gt.setAttribute('content', title);

  const twitter = document.querySelector('meta[property="twitter:title"]');
  if (twitter) twitter.setAttribute('content', title);

  const og = document.querySelector('meta[property="og:title"]');
  if (og) og.setAttribute('content', title);

  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
