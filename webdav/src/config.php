<?php
//Automatic class loader
require_once('lib/autoload.php');	
//Path to the directory wich would be shared 
$webDav["sourcePath"] = dirname($_SERVER['SCRIPT_FILENAME']).'/testfiles/';
//Path to the directory where information about file lock will be stored
$webDav["lockPath"] = dirname($_SERVER['SCRIPT_FILENAME']).'/lock/';
//Flag determines whether directories should be at the the top of the list.
$webDav["foldersFirst"] = true;
//If your server is Windows based, then you should set the value of the system_encoding option
//to your default system encoding. For example ISO-8859-1
$webdav["system_encoding"] = null;//"CP-1251";

?>