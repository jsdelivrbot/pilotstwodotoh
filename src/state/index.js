import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pilot: {
      initiative: '1',
      name: '',
      ability: ''
    },
    ship: {
      hull: '1',
      shields: '0',
      //Bullseye, mobile90, mobile180, front180, back180, front, back
      arcs: [],
      name: 'Name',
      ability: ''
    },
    layout: {
      mode: 'portrait'

    }
  },
  mutations: {
    // manipulate state here (has to be syncronous)
    setPilot(state, pilot) {
      state.pilot = pilot;
    },
    setShip(state, ship) {
      state.ship = ship;
    }
  },
  actions: {
    updatePilot(context, pilot) {
      context.commit('setPilot', pilot);
    },
    updateShip(context, ship) {
      context.commit('setShip', ship);
    }
  }
})