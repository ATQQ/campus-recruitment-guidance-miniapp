import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const getters={

}

const state={
    barheight:0
}

const mutations={
    getBarHeight(state,data){
        console.log(state,data)
    }
}

const actions={

}

const store=new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store;