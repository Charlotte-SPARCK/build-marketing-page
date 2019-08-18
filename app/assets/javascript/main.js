function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();

    var checkboxCookie = this.id + "=" + this.checked + "; " + expires;
    document.cookie = checkboxCookie;
}

 var allInputs = document.getElementsByTagName("input");
 var  i=0;

 for (i=0; i<allInputs.length; i++){
   allInputs[i].onclick=setCookie;
 }

//To get a cookie:
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

//Check if cookie exists on page load
function checkCookieOnLoad() {
   if(getCookie("client-application-type-1") == "true") {
      // Show content and hide clicklink
      document.getElementById("client-type-section-1").style.display = "block";
      document.getElementById("disabled-1").style.display = "none";
      document.getElementById("client-type-section-1").checked = true;
   }
   if(getCookie("client-application-type-2") == "true") {
      // Show content and hide clicklink
      document.getElementById("client-type-section-2").style.display = "block";
      document.getElementById("disabled-2").style.display = "none";
   }
   if(getCookie("client-application-type-3") == "true") {
      // Show content and hide clicklink
      document.getElementById("client-type-section-3").style.display = "block";
      document.getElementById("disabled-3").style.display = "none";
   }
}

window.onload = function() {
  checkCookieOnLoad();
};



// var dcSplit, posnEq, firstGrp, lastGrp, posnCB, regEx, i=0;
//   dcSplit = document.cookie.split("; ");
//   regEx = (/client-application-type-\d=/);
//
//  for(i=0; i<dcSplit.length; i++) {
//    posnEq = dcSplit[i].indexOf("=")+1;
//    posnCB = dcSplit[i].search(regEx);
//
//    if(posnCB != -1) {
//      firstGrp = dcSplit[i].substring(posnCB, posnEq-1);
//      lastGrp = dcSplit[i].substring( posnEq, dcSplit[i].length);
//
//      //document.getElementById(firstGrp).checked=eval(lastGrp);
//    }
//  }
//
//
//  var now = new Date(), tomorrow, allInputs, cookieStr;
//  tomorrow = new Date((now.setDate(now.getDate())+(1*24*60*60*1000))).toGMTString();
//  allInputs = document.getElementsByTagName("input");
//
//  for (i=0; i<allInputs.length; i++){
//    allInputs[i].onclick=writeCookie;
//  }
//
//  function writeCookie() {
//    cookieStr = this.id+"="+this.checked+"; expires="+tomorrow+"; path=/";
//    document.cookie=cookieStr;
// }
//
// function readCookie(name) {
// 	var nameEQ = name + "=";
// 	var ca = document.cookie.split(';');
// 	for(var i=0;i < ca.length;i++) {
// 		var c = ca[i];
// 		while (c.charAt(0)==' ') c = c.substring(1,c.length);
// 		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
// 	}
// 	return null;
// }
//
// if (readCookie('client-application-type-1') == 'true') {
//   document.getElementById('disabled-1').style.display = "none";
// 	document.getElementById('client-type-section-1').style.display = "block";
// }
//
// if (readCookie('client-application-type-2') == 'true') {
//   document.getElementById('disabled-2').style.display = "none";
// 	document.getElementById('client-type-section-2').style.display = "block";
// }
//
// if (readCookie('client-application-type-3') == 'true') {
// document.getElementById('disabled-3').style.display = "none";
// 	document.getElementById('client-type-section-3').style.display = "block";
// }
