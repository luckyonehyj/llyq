import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // headTitle: "",
        yuqingNum: "",
        tiewenNum: "",
        minganNum: "",
        redianNum: "",
        zhiban: "",
        chuzhi: "",
        jiankan: ""
    },
    mutations: {
        // updateTitle(state, title) {
        //     state.headTitle = title
        // },
        updateNum1(state, num) {
            state.yuqingNum = num
        },
        updateNum2(state, num) {
            state.minganNum = num
        },
        updateNum3(state, num) {
            state.tiewenNum = num
        },
        updateNum4(state, num) {
            state.redianNum = num
        },
        updateChuzhi(state, duty) {
            state.chuzhi = duty
        },
        updateZhiban(state, duty) {
            state.zhiban = duty
        },
        updateJiankan(state, duty) {
            state.jiankan = duty
        },
    },
    actions: {},
    modules: {}
})