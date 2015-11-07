<?php
// Connect to a new mongo thingy.
$mongo = new MongoClient("mongodb://username:password@ds052408.mongolab.com:52408/runaway");

echo "hello world";

if ($mongo) {	// If happy...
   $db = $mongo -> runaway;
   $dataSet = $db-> airports;
} else {
   echo json_encode(['status' => 'mongo connection error']);
   exit; 
}
?> 

