<?php
function packages($query,$fields){
	$connection='https://api.mongolab.com/api/1/databases/runaway/collections/';
	$key='?apiKey=sCMaz0w9WNpWNg7zJm6rUc7pSmqq3phq';
	$queryString=urlencode(json_encode($query));
	$fieldString=urlencode(json_encode($fields));
	$result=curl($connection.'packages2'.$key.'&q='.$queryString.'&f='.$fieldString);
	return json_decode($result,true);
}
function packageSort($query,$order){
	$connection='https://api.mongolab.com/api/1/databases/runaway/collections/';
	$key='?apiKey=sCMaz0w9WNpWNg7zJm6rUc7pSmqq3phq';
	$queryString=urlencode(json_encode($query));
	$orderString=urlencode(json_encode($order));
	$result=curl($connection.'packages2'.$key.'&q='.$queryString.'&s='.$orderString);
	return json_decode($result,true);
}

function airports(){
	$connection='https://api.mongolab.com/api/1/databases/runaway/collections/';
	$key='?apiKey=sCMaz0w9WNpWNg7zJm6rUc7pSmqq3phq';	
	$result=curl($connection.'airports'.$key);
	return json_decode($result,true);
}
function nearestAirport($query){
	$connection='https://api.mongolab.com/api/1/databases/runaway/collections/';
	$key='?apiKey=sCMaz0w9WNpWNg7zJm6rUc7pSmqq3phq';
	$queryString=json_encode($query);
	$result=curl($connection.'airports'.$key.'&q='.$queryString.'&fo=true');
	return json_decode($result,true);
}

function curl($link){
	$curl=curl_init();
	curl_setopt($curl, CURLOPT_URL, $link);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
	$response = curl_exec($curl);
	curl_close($curl);
	return $response;
}
?>