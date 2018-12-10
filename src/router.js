import Vue from 'vue'
import Router from 'vue-router'
import Game from './views/Game.vue'
import Home from './views/Home.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/game',
      name: 'game',
      component: Game
    }
  ]
})
