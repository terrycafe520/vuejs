<?php
	$page = $_GET["page"];

	if($page <= 0){
		$content = file_get_contents("xiaojianribao/p{$page}.txt");
	}else{
		$content = '{"data":[]}';
	}

	echo $content;
?>