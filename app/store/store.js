import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import {mutations} from "./mutations.js"
import {actions} from "./actions.js"

//创建一个vuex的store对象
export default new Vuex.Store({
	//全局共享状态
	state: {
		//精选栏目中的banner，实际上没有必要做全局，bige高
		jingxuanbanner : [],
		//小贱十条
		xiaojian : [],
		//精选
		jingxuan : [],
		//精选页数
		jingxuanpno : 0,
		//精选页面的节流
		jingxuanlock : true
	},
	getters : {
		 
	},
	mutations,
	actions
});