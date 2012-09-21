<?php
	require_once('config.php');
	
	if(function_exists("date_default_timezone_set") && 	function_exists("date_default_timezone_get"))
		@date_default_timezone_set(@date_default_timezone_get());	
		
    $tree = new Sabre_DAV_ObjectTree(new Elementit_Sabre_DAV_FS_DirectoryExtended($webDav["sourcePath"]));
	
	$server = new Sabre_DAV_Server($tree);

	//lock plugin 
	$backend = new Sabre_DAV_Locks_Backend_FS($webDav["lockPath"]); 
    $server->addPlugin(new Sabre_DAV_Locks_Plugin($backend));

	//if it is AJAX request, add plugin
	if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) || isset($_REQUEST['isAjax']))
		$server->addPlugin( new Elementit_Sabre_Plugin_Ajax($webDav["foldersFirst"]));
	
	if(isset($_REQUEST['path']))	
	{					
		//here we should modify server variables in order to get SabreDav work correctly and get info about specified path
		$_SERVER['PATH_INFO'] = $_REQUEST['path'];
		$_SERVER['REQUEST_URI'] = $_SERVER['PATH_INFO'];		
	}
	
	$webDir = substr($_SERVER["PHP_SELF"], 0, strpos($_SERVER["PHP_SELF"], pathinfo(__FILE__, PATHINFO_BASENAME))-1);
	
	/* cut base path from request uri */	
	$_SERVER['REQUEST_URI']=str_replace($webDir,"",$_SERVER['REQUEST_URI']);
	if(isset($_SERVER['PATH_INFO']))  $_SERVER['PATH_INFO']=str_replace($webDir,"",$_SERVER['PATH_INFO']);
	
    $server->exec();
?>