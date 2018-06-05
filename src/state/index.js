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
      ability: '',
      defense: 0
    },
    layout: {
      mode: 'portrait',
      imageUrl: 'https://cdna.artstation.com/p/assets/images/images/008/756/972/large/klaus-wittmann-bob1.jpg?1515102092'
    }
  },
  mutations: {
    // manipulate state here (has to be syncronous)
    setPilot(state, pilot) {
      state.pilot = pilot;
    },
    setShip(state, ship) {
      state.ship = ship;
    },
    setLayout(state, layout){
      state.layout = layout
    }
  },
  actions: {
    updatePilot(context, pilot) {
      context.commit('setPilot', pilot);
    },
    updateShip(context, ship) {
      context.commit('setShip', ship);
    },
    updateLayout(context, layout){

    }
  }
})