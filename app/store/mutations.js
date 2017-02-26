export const mutations = {
	//得到banner，更改state对象
 	GETBANNER(state,bannerarray){
 		state.jingxuanbanner = bannerarray;
 	},

 	//得到小贱，更改state对象
 	GETXIAOJIAN(state,xiaojianarr){
 		state.xiaojian = xiaojianarr;
 	},


 	GETJINGXUAN(state,o){
 		state.jingxuan = state.jingxuan.concat(o.shuju);
 		state.jingxuanpno = o.pno;
 	},


 	CHANGEJINGXUANLOCK(state,torf){
 		state.jingxuanlock = torf;
 	}
}