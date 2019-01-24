import Vue from 'vue';
import Router from 'vue-router';
import Recipes from './views/Recipes.vue';
import Ingredients from './views/Ingredients.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'recipes',
      component: Recipes,
    },
    {
      path: '/ingredients',
      name: 'ingredients',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "ingredients" */ './views/Ingredients.vue'),
    }
  ],
});
