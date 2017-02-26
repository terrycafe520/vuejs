import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store/store.js";
//插件
Vue.use(VueRouter);
 
import router from "./router.js";
import directives from "./directives.js";

//注册全局指令
Vue.directive("mylink",directives.mylink);
//注册全局组件
Vue.component("touch-slider",Vue.extend(require("./components/common/TouchSlider.vue")));
Vue.component("item-box",Vue.extend(require("./components/common/ItemBox.vue")));
 	 
//创建和挂载根实例，创建的时候Vue构造函数中要添加router属性
var app = new Vue({
	router,
	store
}).$mount('#app');