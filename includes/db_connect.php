<?php
// Connect to a new mongo thingy.
$mongo = new MongoClient("mongodb://username:password@ds052408.mongolab.com:52408/runaway");

if ($mongo) {	// If happy...
   $db = $mongo -> runaway;
   $airports = $db-> airports;
   $packages = $db-> packages2;
} else {
   echo json_encode(['status' => 'mongo connection error']);
   exit; 
}
?> 