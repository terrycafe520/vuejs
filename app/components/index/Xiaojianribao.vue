<template>
	<div>
		<div class="xjrb_item_box">
			<div class="hd">
				<img v-bind:src="info.cover" alt="">
				<div class="hd_r">
					<div class="title">{{info.title}}</div>
					<div class="desc">{{info.desc}}</div>
				</div>
			</div>
			<div class="bd">
				<div class="number"><span class="i1">{{zhi}}</span></div>
				<div class="number"><span class="i2">{{info.comment_total}}</span></div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		props : ["info"],
		computed : {
			zhi : function(){
				if(this.info._incrs){
				 
					return this.info._incrs.ai + this.info._incrs.diao + this.info._incrs.keng + this.info._incrs.jian;
				}
				return 0;
			}
		}
	}

</script>

<style type="text/css">
	.xjrb_item_box{
		background-color: white;
		width: 98%;
		border:6px solid #e1e1e1;
		box-sizing:border-box;
		position: relative;
	}
	.xjrb_item_box .hd img{
		position: absolute;
		top: 10px;
		left: 10px;
		width: 92px;
		height: 92px;
	}
	.xjrb_item_box .hd{
		padding-left: 120px;
		position: relative;
	}
	.xjrb_item_box .hd .hd_r{
		width: 96%;
	}
	.xjrb_item_box .hd .hd_r .title{
		font-size: 18px;
		line-height: 125%;
		width: 100%;
		height: 66px;
		background-color: #eee;
		padding: 12px;
		box-sizing:border-box;
		border-radius: 10px;
		margin-top: 10px;
	}
	.xjrb_item_box .hd .hd_r .desc{
		padding: 20px;
		font-size: 14px;
		color:#333;
	}
	.xjrb_item_box .hd::before{
		content:"";
		position: absolute;
		background:url("/assets/images/xiaojizai.png");
		width: 60px;
		height: 60px;
		-webkit-background-size: 100% 100%;
		background-size: 100% 100%;
	    bottom: 10px;
		right: 30px;
	}
	.xjrb_item_box .hd::after{
		content:"";
		position: absolute;
		width: 96%;
		height: 1px;
		background-color: #eee;
		bottom: 0;
		left: 50%;
		transform:translate(-50%,0);
	}
	.xjrb_item_box .bd{
		clear: both;
		height: 30px;
		margin-top: 20px;
	}
	.xjrb_item_box .bd .number{
		float: left;
		width: 50%;
		text-align: center;
	}
	.xjrb_item_box .bd .number span{
		padding-left: 20px;
		position: relative;
	}
	.xjrb_item_box .bd .number span::before{
		content:"";
		width: 20px;
		height: 20px;
		background: url(/assets/images/icons.png)  -150px -100px;
	    background-size: 250px 237.5px;
    	background-repeat: no-repeat;
    	position: absolute;
    	top: 0;
    	left: -10px;
	}
	.xjrb_item_box .bd .number span.i2::before{
		background-position: -200px -100px;
	}
</style>