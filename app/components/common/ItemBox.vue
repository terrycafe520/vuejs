<template>
	<div>
		<div class="item_box">
			<div class="hd">
				<div class="avatar_box">
					<img :src="info.avatar" class="avatar">
					<p>{{info.user_name}}</p>
				</div>
				<p class="title">{{info.title}}</p>
			</div>
			<div class="bd">
				<div>
					<div class="picbox" ref="picbox">
						<div v-show="format == 'gif'" class="gifbtn" ref="gifbtn"></div>
						<div class="loading" ref="loading"></div>
						<img  ref="pic" :src="mobile_img_url" class="mobile_pic">
					</div>
				</div>

				<div class="numbers">
					<div class="number1">

						<span class="i1">{{info._incrs.like}}</span>
						<span class="i2">{{info._incrs.dislike}}</span>
					</div>
					<div class="number2"><span class="i3">{{info.comment_total}} </span></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		props : ["info"],
		mounted(){

			var self = this;
			//给图片盒子添加监听
			$(this.$refs.picbox).on("tap",function(){
				if(self.format == "gif"){
					//此时加载图片
					var image = new Image();
					image.src = self.info.media_data[0].origin_img_url.origin_pic_url;
					//gif按钮隐藏
					$(self.$refs.gifbtn).hide();
					//小菊花显示
					$(self.$refs.loading).show();
					//load事件
					$(image).on("load",()=>{
						//替换图片路径
						$(self.$refs.pic).attr("src", self.info.media_data[0].origin_img_url.origin_pic_url);
						$(self.$refs.loading).hide();
					});
				}
			});
		},
		computed : {
			mobile_img_url(){
				if(this.info.media_data && Array.isArray(this.info.media_data)){
					return this.info.media_data[0].mobile_img_url;
				}
				return "";
			},
			format(){
				if(this.info.media_data && Array.isArray(this.info.media_data)){

					return this.info.media_data[0].format.toLowerCase();
				}
				return "";
			}
		}
	}
</script>

<style type="text/css">
	.item_box{
		background-color: white;
		width: 98%;
		border:6px solid #e1e1e1;
		box-sizing:border-box;
		position: relative;
	}
	.item_box .avatar_box{
	 	width: 100px;
	 	margin: 0 auto;
	 	text-align: center;
	}
	.item_box .avatar{
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
	.item_box .title{
		padding: 20px;
	}
	.item_box .hd{
		padding-top: 20px;
		position: relative;
	}
	.item_box .bd{
		clear: both;
		margin-top: 20px;
		overflow: hidden;
		padding: 20px 0;
		position: relative;
	}
	.item_box .bd .number1{
		float: left;
		text-align: center;
		padding-left: 20px;
	}
	.item_box .bd .number2{
		float: right;
		text-align: center;
	}
	.item_box .bd  span{
		padding-left: 20px;
		position: relative;
		margin-right: 20px;
	}
	.item_box .bd  span::before{
		content:"";
		width: 20px;
		height: 20px;
		background: url(/assets/images/icons.png)     -25px -100px;
	    background-size: 250px 237.5px;
    	background-repeat: no-repeat;
    	position: absolute;
    	top: 0;
    	left: -6px;
	}
	.item_box .bd  span.i2::before{
		 background-position: -75px -100px;
	}
	.item_box .bd  span.i3::before{
		 background-position: -200px -100px;
	}
	.mobile_pic{
		width: 100%;
	}
	.item_box .bd .numbers{
		margin-top: 20px;
	}
	.item_box .picbox{
		position: relative;
	}
	.item_box .picbox .gifbtn{
		background: url(/assets/images/icons.png)   -150px -125px;
		background-size: 250px 237.5px;
		background-repeat: no-repeat;   
		width: 45px;
		height: 45px;
		margin-left: -22.5px;
		margin-top: -22.5px;
		position: absolute;
		left: 50%;
		top: 50%;
		z-index: 1;
	}
	.item_box .picbox .loading{
		background: url(/assets/images/loading.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;   
		width: 45px;
		height: 45px;
		margin-left: -22.5px;
		margin-top: -22.5px;
		position: absolute;
		left: 50%;
		top: 50%;
		z-index: 1;
		animation:rotate 1s linear 0s infinite;
		display: none;
		transform-origin: 50% 50% !important; 
	}

	@-webkit-keyframes rotate{
		from{
			transform:rotate(0);
		}
		to{
			transform:rotate(360deg);
		}
	}
</style>