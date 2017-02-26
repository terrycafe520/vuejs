<template>
	<div>
		<header>
			<div class="header-bg"></div>
			<nav>
				<ul>
					<li><a v-mylink="'/index/index'">精选</a></li>
					<li><a v-mylink="'/index/video'">视频</a></li>
					<li><a v-mylink="'/index/index'">2段子</a></li>
					<li><a v-mylink="'/index/video'">发现</a></li>
					<li><a v-mylink="'/index/video'">奇趣专栏</a></li>
				</ul>
			</nav>
		</header>
		<router-view>
			
		</router-view>
	</div>
</template>


<script>
 
</script>

<style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}
	body{
		font-family: "Microsoft Yahei";
	}
	header{
		height: 100px;
		background-color: #fff8de;
		width: 100%;
		position: relative;
	}
	.header-bg{
		height: 62px;
		background: url("/assets/images/header-bg-ui2.png") no-repeat center;
		background-size: auto 62px;
	}
	header nav{
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 38px;
		background-color: #f79100;
	}
	header nav ul{
		list-style: none;
		width: 100%;
		max-width: 520px;
		margin: 0 auto;
	}
	header nav ul li{
		float: left;
		width: 20%;
		text-align: center;
		line-height: 38px;
	}
</style>