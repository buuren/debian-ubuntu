/**
* Configuration object
*/
var _data = {	
	/**
	Url to server script wich should return correct JSON data	
	*/
	serverUrl : 'index.php',
	/**
	Url to the root folder of webdav server. Without ending /
	for example http://somedomain.com/webdav	
	*/
	webdavUrl : '',	
	/**
		Url prefix to detect if it is request to WEBDAV, Don't change this value
	*/
	webdavUrlPrefix : 'testfiles',	
	/**
	Human readable date format
	*/
	dateFormat: "dd.MM.yyyy HH:mm:ss",
	/**
	Configuration of context menu
	*/		
	contextMenuItems : [ 
		{'Download': { id:'download', onclick: function(menuItem,menu) { downloadFile(getItemByElement(this)); } } }, 		
		{'Edit': { id:'open', onclick:function(menuItem,menu) { openFileMO(getItemByElement(this)); } }},
		{'Edit in MS Office': { id:'openms', onclick:function(menuItem,menu) { openFileMS(getItemByElement(this)); } }},
		{'Edit in OpenOffice': { id:'openoo', onclick:function(menuItem,menu) { openFileOO(getItemByElement(this)); } }}		
	], 		
	/**
	List of extensions supported by Open Office
	*/	
	oooSupportedtypes:";odt;ott;oth;and;odm;sxw;stw;sxg;doc;dot;xml;docx;docm;dotx;dotm;wpd;wps;rtf;txt;csv;sdw;sgl;vor;uot;uof;jtd;jtt;hwp;602;pdb;psw;\
ods;ots;sxc;stc;xls;xlw;xlt;xlsx;xlsm;xltx;xltm;xlsb;wk1;wks;123;dif;csv;sdc;vor;dbf;slk;uos;uof;pxl;wb2;odp;odg;otp;sxi;sti;ppt;pps;pot;pptx;pptm;potx;potm;\
sda;sdd;sdp;vor;uop;uof;cgm;pdf;bmp;jpeg;jpg;pcx;psd;sgv;wmf;dxf;met;pgm;ras;svm;xbm;emf;pbm;plt;sda;tga;xpm;eps;pcd;png;sdd;tif;tiff;gif;pct;ppm;sgf;vor;",
	
	/**
	List of file types associated with MS Office applications. 
	Java apples uses these list of types to know what application should be launched
	*/
	accessTypes: "accda,accdb,accdc,accde,accdp,accdr,accdt,accdu,ade,adp,maf,mam,maq,mar,mat,mda,mdb,mde,mdt,mdw,laccdb,snp",
	excelTypes: "csv,dbf,dif,ods,pdf,prn,slk,xla,xlam,xls,xlsb,xlsm,xlsx,xlt,xltm,xltx,xlw,xml,xml,xps",
	outlookTypes: "obi,oft,ost,prf,pst,msg,oab,iaf",
	powerTypes: "emf,odp,pdf,pot,potm,potx,ppa,ppam,pps,ppsm,ppsx,ppt,pptm,pptx,pptx,rtf,thmx,tif,wmf,xml,xps",
	wordTypes: "doc,docm,docx,dot,dotm,dotx,htm,html,mht,mhtml,odt,pdf,rtf,txt,wps,xml,xml,xps",
	frontPageTypes: "btr,dwt,elm,fwp,htx,mso",
	/**
	*	Below is internal variables , not related to 
	*/
	/**
	Variable store current working directory
	*/
	currentDirectory : '/',	
	/**
	Flag determining if office path was sucessfully detected
	*/
	pathDetected : false,	
	/** 
	File to open when applet will be loaded
	*/
	fileToOpen : null,
	/** 
	Open mode
	*/
	modeToOpen : 0,
	/**
	Collection of files and folders in current directory
	*/
	files : null,
	
	/**
		Applet code stored in variable and published on web page only when user try to open document.
		Applet will launch appropriate application on user computer.
	*/	
	appletContents :
	'<applet \
	code="com.elementit.OfficeLauncher.OfficeLauncher"\
	  archive="java/OfficeLauncher.jar"\
	  width="0"\
	  height="0"\
	  name="OfficeLauncher" \
	  id="OfficeLauncher" \
	  mayscript="true" \
	  alt="OfficeLauncher by www.element-it.com" \
	  VIEWASTEXT> \
	 <param name="MSOffice.Types.Access" value="_data.accessTypes"> \
	 <param name="MSOffice.Types.Excel" value="_data.excelTypes"> \
	 <param name="MSOffice.Types.Outlook" value="_data.outlookTypes"> \
	 <param name="MSOffice.Types.PowerPoint" value="_data.powerTypes"> \
	 <param name="MSOffice.Types.Word" value="_data.wordTypes"> \
	 <param name="MSOffice.Types.FrontPage" value="_data.frontPageTypes"> \
	 <param name="progressbar" value="true"> \
	 <param name="boxmessage" value="Loading OfficeLauncher Applet ..."> \
	 <span style="border:1px  solid #FF0000;display:block;padding:5px;margin-top:10px;margin-bottom:10px;text-align:left; background: #FDF2F2;color:#000;">You should <b>enable applets</b> running at browser and to have the <b>Java</b> (JRE) version &gt;= 1.5.<br />If applet is not displaying properly, please check <a target="_blank" href="http://java.com/en/download/help/testvm.xml" title="Check Java applets">additional configurations</a></span> \
	 </applet>'
}
