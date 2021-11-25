/*
---------------------------
var body_children = $('body').children()

	//recursively loop through the result of that object
$(body_children).each(function(key, item) { ...loop shiz here })

	// then, as your going through each item of that loop do: to get the string value to do a string compare
$(item).html()

var areEqual = string1.toUpperCase() === string2.toUpperCase();


	// hide that element there the comparison matches, so like:
$(item).hide() or $(item).remove() 


*/
var regex = /Bwa/i;
var search = regex.exec(document.body.innerText);

function filterPKILL() {
	console.log("Activating PKILL module...");
	return $(":contains('Bwa'), :contains('BWA'), :contains('*BWA*'), :contains('#BWA'), :contains('#Dox_m3'), :contains('#DoX_m3'), :contains('#DOX_m3'), :contains('KINGSA7AN'), :contains('D_o_x_'), :contains('bwa')").filter("h1,h2,h3,h4,h5,p,body,span,a,q,href,li,em,b,cite,class,script,strong,img,div");
}

/*
HTML TAGS
h1,h2,h3,h4,h5,p,span,a,q,href,li,em,b,cite,class,script,strong,img
h1,h2,h3,h4,h5,p,span,a,q,href,li,em,b,strong
*/

function filterPURGE () {
	console.log("Activating PURGE module...");
	return $(":contains('Bwa'), :contains('BWA'), :contains('*BWA*'), :contains('#BWA'), :contains('#Dox_m3'), :contains('#DoX_m3'), :contains('bwa')").filter(":only-child").closest('div');
}

function filterGTFO() {
	console.log("Activating GTFO module...");
	return $(":contains('Bwa'), :contains('BWA'), :contains('*BWA*'), :contains('#BWA'), :contains('#Dox_m3'), :contains('#DoX_m3'), :contains('bwa')").filter(":not('body'):not('html')");
}


/*
function recordToFilename() {
    var input = document.getElementById('filename'),
        fileName = input.value;
    if (fileName) {
        Recorder.record('audio', fileName);
    } else {
        alert('Please enter a filename!');
        input.focus();
    }
}


function load(string) {
    var xmlhttp;
    if(window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "YOUR_URL", true);
    xmlhttp.send();
}
*/


function getElements(filter) {
   if (filter == "PKILL") {
	   return filterPKILL();
   } else if (filter == "GTFO") {
	   return filterGTFO();
   } else if (filter == "PURGE") {
	   return filterPURGE();
   } else {
     return filterPKILL();
   }
}
function filterElements(elements) {
	console.log("Elements to filter: ", elements);
	elements.fadeOut("fast");
}
if (search) {
   console.log("bash Cybernetic_Eye_Hack.sh");
   chrome.storage.sync.get({
     filter: 'PURGE',
   }, function(items) {
	   console.log("Default config: " + items.filter);
	   elements = getElements(items.filter);
	   filterElements(elements);
	   chrome.runtime.sendMessage({method: "saveStats", bwas: elements.length}, function(response) {
			  console.log("Capturing " + elements.length + " bit of metadata."); 
		 });
	 });
  chrome.runtime.sendMessage({}, function(response) {});
}