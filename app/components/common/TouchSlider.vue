<template>
	<div>
		<div id='slider' class="swiper-container" ref="slider">
		  <div class="swiper-wrapper">
		    <div class="swiper-slide" v-for="(item,index) in picArr" >
		    	<img :src="item.img" /> 
		    </div>
		  </div>
		  <div class="circles">
		  	<ol>
		  		<li v-for="(item,index) in picArr" v-bind:style="{width: 100 / picArr.length + '%'}"></li>
		  	</ol>
		  </div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		props : ["picArr","autoplay","speed","width"],
		updated(){
			var self = this;
			new Swiper (self.$refs.slider, {
				initialSlide : 0 , 
				loop : true,  			//循环滚动
				direction:"horizontal",	//横向滚动
				autoplay : self.autoplay || 1000,
				speed : parseInt(self.speed) || 300,
				onSlideChangeStart : function(swiper){
					$(self.$refs.slider).find(".circles ol li").eq(swiper.realIndex).addClass("cur").siblings().removeClass("cur");
				}
			});     
		}
	}
</script>

<style type="text/css">
	.swiper-container{
		width: 100%;
		height: auto;
		position: relative;
	}
	.swiper-container img{
		width: 100%;
		vertical-align: middle;
	}
	.swiper-container .circles{
		position: absolute;
		bottom: 0px;
		left: 0;
		width: 100%;
		height: 8px;
		z-index: 9999;
		
	}
	.swiper-container .circles ol{
		list-style: none;
	}
	.swiper-container .circles ol li{
		float: left;
		height: 8px;
		background-color: #eee;
		opacity: 0.5;
	}
	.swiper-container .circles ol li.cur{
		background-color: orange;
	}
</style>

