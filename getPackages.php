<?php
//require_once('./includes/db_connect.php');
require_once('./includes/db_connect_web.php');

$origin=$_GET['origin'];
$destination=$_GET['destination'];
if(!isset($_GET['price']))
  $price=10000.0;
else
  $price=floatval($_GET['price']);

//$cursor=$packages->find(array('Origin'=>$origin,'Destination'=>$destination,'JetBlue Package Price/Person'=>array('$lt'=>$price)))->sort(array('JetBlue Package Price/Person'=>1));
$query=array('Origin'=>$origin,'Destination'=>$destination,'JetBlue Package Price/Person'=>array('$lt'=>$price));
$order=array('JetBlue Package Price/Person'=>1);
$cursor=packageSort($query,$order);
foreach($cursor as $key=>$value)
{
  $start=str_replace('2015/', "", $value['Hotel Check In Date']);
  $end=str_replace('2015/', "", $value['Hotel Check Out Date']);
  //if(date_create($start)>=date_create())
  //{
    echo '<div class="row" id="pack">
       <div class="col-md-3" id="info">            
          <h1>$'.$value['JetBlue Package Price/Person'].'</h1>
          <h4>'.$value['Hotel Nights Stay'].' Nights</h4>
          <a href="http://www.jetblue.com/vacations/"><button type="button" class="btn btn-default">Select</button></a>

       </div>
       <div class="col-md-9" id="package">
          <h1>'.$value['Hotel Property']."</h1>
          <p> $origin &rarr; $destination <br>".
          $start.'&rarr; '.$end.' <br>
          Expedia price: '.$value['Expedia Package Price/Person'].' <br> </p>
       </div>
    </div>';
  //}
}
?>