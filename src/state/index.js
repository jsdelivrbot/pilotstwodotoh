import Vue from 'vue';
import Vuex from 'vuex';

export default new Vuex.Store({
  state: {
    pilot: {
      initiative: '1',
      ability: 'Pilot ability text'
    },
    ship: {
      hull: '1',
      shields: '0',
      //Bullseye, mobile90, mobile180, front180, front, back?
      arcs: [],
      name: 'Name',
      ability: 'Ship ability text'
    },
    design: {
      mode: 'portrait',

    }
  },
  mutations: {
    // manipulate state here (has to be syncronous)
    setPilot(state, pilot) {

    },
    setShip(state, ship) {

    }
  },
  actions: {
    // do asnyc operations here and then commit your mutations
  }
})