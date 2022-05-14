import {createStore} from 'vuex';
import VuexPersistence from 'vuex-persist'

const store=createStore({
    state:{
      name:'Samanja'

    },
  plugins: [new VuexPersistence().plugin]


})
export default store