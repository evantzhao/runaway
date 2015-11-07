<?php
require_once("./includes/db_connect.php");
if(isset($_GET['lon']))
{
	$lon = floatval($_GET['lon']);
	$lat = floatval($_GET['lat']);
	$query = array(
		'origin'=>true,
		'loc'=>array(
			'$near'=>array($lon,$lat)));
	$doc = $airports->findOne($query);
	$airportCode=$doc['airport'];
}
else
{
	$airportCode=$_GET['airport'];
}

if($airportCode=='JFK')
{
	echo file_get_contents('./includes/jfk.json');
}
else
{
	$query = array('Origin'=>$airportCode);
	$cursor = $packages->find($query,array('Destination'=>1,'JetBlue Package Price/Person'=>1,'_id'=>0));
	$destinations=[];
	$destinations['Origin']=$airportCode;
	foreach($cursor as $key=>$value)
	{
		if(!isset($destinations[$value['Destination']]))
			$destinations[$value['Destination']]=$value;
		else if(floatval($destinations[$value['Destination']]['JetBlue Package Price/Person'])>floatval($value['JetBlue Package Price/Person']))
			$destinations[$value['Destination']]=$value;
	}
	echo json_encode($destinations);
}
?>