exports.action = function(data, callback, config, SARAH) {
  
var exec = require('child_process').exec;
 
switch(data.val) {
	case "runwarplane":
	  var process = '%CD%/plugins/warplane/ahk/Runwarplane.ahk';
	  var tts = "c'est fait monsieur bon vol";
	  break;
	case "closewarplane":
	  var process = '%CD%/plugins/warplane/Closewarplane.ahk';
	  var tts = "Combat terminé monsieur";
	  break;  
  }    

 var child = exec(process,
  function (error, stdout, stderr) {
    console.log(process);
   });
  
  callback({'tts': tts});

 }
 
