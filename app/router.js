import App from "./components/App.vue";
import VueRouter from "vue-router";
import Index from "./components/index/Index.vue";
import Video from "./components/video/Video.vue";
 
//路由清单
const routes = [
	{
		path : "/index" , 
		component : App,
		children : [
			{
				path : "index",
				component : Index
			},
			{
				path : "video",
				component : Video
			}
		]
	},
	{  //让其他路由都自动跳转到/index/index去
		path : "/*" , 
		redirect : "/index/index"
	}
];

const router = new VueRouter({
  	routes
});

export default router;