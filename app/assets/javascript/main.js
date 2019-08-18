
  var dcSplit, posnEq, firstGrp, lastGrp, posnCB, regEx, i=0;
    dcSplit = document.cookie.split("; ");
    regEx = (/client-application-type-\d=/);

   for(i=0; i<dcSplit.length; i++) {
     posnEq = dcSplit[i].indexOf("=")+1;
     posnCB = dcSplit[i].search(regEx);

     if(posnCB != -1) {
       firstGrp = dcSplit[i].substring(posnCB, posnEq-1);
       lastGrp = dcSplit[i].substring( posnEq, dcSplit[i].length);

       document.getElementById(firstGrp).checked=eval(lastGrp);
     }
   }

 var now = new Date(), tomorrow, allInputs, cookieStr;
 tomorrow = new Date((now.setDate(now.getDate())+(1*24*60*60*1000))).toGMTString();
 allInputs = document.getElementsByTagName("input");

 for (i=0; i<allInputs.length; i++){
   allInputs[i].onclick=writeCookie;
 }


 function writeCookie() {
   cookieStr = this.id+"="+this.checked+"; expires="+tomorrow+"; path=/";

   document.cookie=cookieStr;
  }
