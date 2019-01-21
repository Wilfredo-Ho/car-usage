import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
    activePath: '/',
    tabMenu: [
        {
            name: 'home',
            title: '首页',
            path: '/'
        }
    ]
}

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

export default store