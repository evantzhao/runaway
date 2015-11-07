<?php
    define('URL', 'http://duythien.dev/sitepoint/blog-mongodb');
    define('UserAuth', 'duythien');
    define('PasswordAuth', 'duythien');

    $config = array(
        'username' => 'duythien',
        'password' => 'qazwsx2013@',
        'dbname'   => 'blog',
        'connection_string'=> sprintf('mongodb://%s:%d/%s','127.0.0.1','27017','blog')
    );
?>