import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default function createStore(){
    const store = new Vuex.Store({
        state:{
            homeinfo:''
        },
        actions:{
            getHomeInfo({commit}){
                return axios.get('http://localhost:8881/api/info').then(res=>{
                    console.log(res.data)
                    commit('setHomeInfo', res.data)
                })
            }
        },
        mutations:{
            setHomeInfo(state, res){
                state.homeinfo = res
            }
        }
    })
    return store
}
