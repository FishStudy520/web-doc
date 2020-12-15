import {
	createStore
} from 'vuex'

export default createStore({
	// 存放状态
	state:{
		count: 0
	},
	mutations: {
		// 操作
		increment(state) {
			state.count++
		}
	},
    actions: {
    
    },
    modules: {
    
    }
})
