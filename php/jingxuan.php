<?php
	$page = $_GET["page"];

	if($page <= 2){
		$content = file_get_contents("jingxuan/jingxuanp{$page}.txt");
	}else{
		$content = '{"data":[]}';
	}

	echo $content;
?>