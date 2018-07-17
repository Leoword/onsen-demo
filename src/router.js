import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Home from './AppNavigator.vue';
import AppSplitter from './AppSplitter.vue';
import AnimationRetrivePage from './pages/retrive.vue';
import PullHook from './pages/components/PullHook.vue';
import Dialogs from './pages/components/Dialogs.vue';
import Buttons from './pages/components/Buttons.vue';
import Carousel from './pages/components/Carousel.vue';
import InfiniteScroll from './pages/components/InfiniteScroll.vue';
import Progress from './pages/components/Progress.vue';


const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppSplitter,
      children: [
        {
          path: 'animation/:name',
          name: 'AnimationRetrivePage',
          component: Home
        },
        {
          path: 'pullhook',
          name: 'pullhook',
          component: PullHook
        },
        {
          path: 'dialogs',
          name: 'dialogs',
          component: Dialogs
        },
        {
          path: 'buttons',
          name: 'buttons',
          component: Buttons
        },
        {
          path: 'carousel',
          name: 'carousel',
          component: Carousel
        },
        {
          path: 'infinitescroll',
          name: 'infinitescroll',
          component: InfiniteScroll
        },
        {
          path: 'progress',
          name: 'progress',
          component: Progress
        }
      ]
    }
  ]
});

/* For Vuex
 *
 * import store from 'store.js';
 *
 * router.beforeEach((to, from, next) => {
 *   // Reset pageStack to the new route
 *   store.commit('navigator/resetStack', to.matched.map(m => m.components.default));
 *   next();
 * });
 */

export default router;
