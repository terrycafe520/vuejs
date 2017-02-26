import store from "./store.js";

export const actions = {
	//罗列Action，非常像React + Redux中的action文件
	getBanner({commit}){
		$.get("/php/banner.php",(data)=>{
			 commit("GETBANNER",JSON.parse(data));
		});
	},

	getXiaojian({commit}){
		$.get("/php/xiaojianribao.php?page=0",(data)=>{
			commit("GETXIAOJIAN",JSON.parse(data).data);
		});
	},


	getJingxuan({commit},page){
		$.get("/php/jingxuan.php",{"page":page},(data)=>{
			commit("GETJINGXUAN",{shuju: JSON.parse(data).data , pno : page });
		});
	},

	getJingxuanNextPage({commit}){

		commit("CHANGEJINGXUANLOCK",false);
		$.get("/php/jingxuan.php",{"page":store.state.jingxuanpno + 1},(data)=>{
		 	commit("GETJINGXUAN",{shuju : JSON.parse(data).data, pno : store.state.jingxuanpno + 1});

		 	
		 	if(JSON.parse(data).data.length != 0){
		 		commit("CHANGEJINGXUANLOCK",true);
		 	}
		});
	}
}