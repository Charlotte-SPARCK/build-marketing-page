var dcSplit, posnEq, firstGrp, lastGrp, posnCB, regEx, i=0;
 dcSplit=document.cookie.split("; ");
 regEx=(/CB\d=/);
 for(i=0; i<dcSplit.length; i++)
  { posnEq = dcSplit[i].indexOf("=")+1;
    posnCB=dcSplit[i].search(regEx);
    if(posnCB != -1)
      { firstGrp = dcSplit[i].substring(posnCB, posnEq-1);
        lastGrp = dcSplit[i].substring( posnEq, dcSplit[i].length);
        document.getElementById(firstGrp).checked=eval(lastGrp);
   }  }
// ------
 var now=new Date(), tomorrow, allInputs, cookieStr;
 tomorrow=new Date((now.setDate(now.getDate())+(1*24*60*60*1000))).toGMTString();
 allInputs=document.getElementsByTagName("input");
 for(i=0; i<allInputs.length; i++){ allInputs[i].onclick=writeCookie; }
// --------
 function writeCookie()
   { cookieStr=this.id+"="+this.checked+"; expires="+tomorrow+"; path=/";
     document.cookie=cookieStr;
   }
 // -------

// function setCookie(cname, cvalue, exdays) {
//   var d = new Date();
//   d.setTime(d.getTime() + (exdays*24*60*60*1000));
//   var expires = "expires="+ d.toUTCString();
//   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }
//
// function getCookie(cname) {
//   var name = cname + "=";
//   var decodedCookie = decodeURIComponent(document.cookie);
//   var ca = decodedCookie.split(';');
//   for(var i = 0; i <ca.length; i++) {
//     var c = ca[i];
//     while (c.charAt(0) == ' ') {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }
//
// function set_check(input){
//     setCookie(input.value, input.checked, 60*60*1);
//     console.log(input.value);
//     console.log(input.checked);
//     console.log(document.cookie)
// }
//
// function get_check(input){
//     alert(document.cookie)
// }
//
// $( document ).ready(function() {
//     get_check(this);
// });
//
// $("input").change(function () {
//   set_check(this);
// });
