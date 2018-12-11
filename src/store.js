import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router';

let cardAPI = axios.create({
  baseURL: "https://battlecardz.herokuapp.com/api/games",
  timeout: 3000
})




Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    game: {},
    myCard: {},
    theirCard: {},
    attack: {}
  },
  mutations: {
    SETGAME(state, gameData) {
      state.game = gameData
    },
    SETMYCARD(state, card) {
      state.myCard = card
    },
    SETTHEIRCARD(state, card) {
      state.theirCard = card
    },
    SETATTACK(state, payload) {
      state.attack = payload
    }
  },
  actions: {
    startGame({ commit }) {
      cardAPI.post('')
        .then(res => {
          commit("SETGAME", res.data.game)
          router.push({ name: "game" })
        })
        .catch(err => {
          console.log(err)
        })
    },
    pickMyCard({ commit }, card) {
      commit("SETMYCARD", card)
    },
    pickTheirCard({ commit }, card) {
      commit("SETTHEIRCARD", card)
    },
    attack({ commit }, payload) {
      cardAPI.put("/:gameId")
        .then(res => {
          commit("SETATTACK", res.data.game)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
