import Help from '@/views/Help.vue';
import Home from '@/views/Home.vue';
import Translate from '@/views/Translate.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const prefix = "Timo's Translator | ";

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: prefix + 'Home'
      }
    },
    {
      path: '/translate',
      name: 'translate',
      component: Translate,
      meta: {
        title: prefix + 'Translate'
      }
    },
    {
      path: '/help',
      name: 'help',
      component: Help,
      meta: {
        title: prefix + 'Help'
      }
    }
  ]
});

export default router;
