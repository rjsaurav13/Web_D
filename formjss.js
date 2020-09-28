//submitted values-:
/*function  empty(){
	var m = document.forms["formlist"]["names"].value;
	var n = document.forms["formlist"]["monum"].value;
	var o = document.forms["formlist"]["memail"].value;
	var p = document.forms["formlist"]["mage"].value;
	var x = document.getElementById("returnval");
	  var y = document.getElementById("subvalue");
		var z = document.getElementById("subvalue2");
 var valid =true;
	if(m == null || m=="" || n == null || n==""|| o == null || o==""|| p == null || p==""){

	  x.style.display = "none";
		  y.style.display = "none";
			  z.style.display = "none";
				valid = false;
	}
	else{

		x.style.display = "block";
		  y.style.display = "block";
			  z.style.display = "block";
				getter();
	}
}*/

//submitted values-:
function myFunction() {
  var x = document.getElementById("returnval");
	var m = document.forms["formlistt"]["names"].value;
	var n = document.forms["formlistt"]["monum"].value;
	var o = document.forms["formlistt"]["memail"].value;
	var p = document.forms["formlistt"]["mage"].value;
	var q = document.forms["formlistt"]["mdob"].value;
  if (x.style.display === "block" || m == null || m=="" || n == null || n==""|| o == null || o==""|| p == null || p=="" || q == "") {
    x.style.display = "none";
    $("#submits").attr("abled");


  } else {
      x.style.display = "block";

      $("#submits").attr("disabled", true);
  }


}function myFunction1() {
  var y = document.getElementById("subvalue");
	var m = document.forms["formlistt"]["names"].value;
	var n = document.forms["formlistt"]["monum"].value;
	var o = document.forms["formlistt"]["memail"].value;
	var p = document.forms["formlistt"]["mage"].value;
	var q = document.forms["formlistt"]["mdob"].value;
  if (y.style.display === "block" || m == null || m=="" || n == null || n==""|| o == null || o==""|| p == null || p=="" || q == "") {
    y.style.display = "none";
$("#submits").attr("abled");
  alert("PLEASE FILL ALL THE COLUMNS");
  } else {
    y.style.display = "block";
    $("#submits").attr("disabled", true);
     alert("THANK YOU FOR SUBMITTING FORM. YOUR ENTERED DETAILS ARE SHOWN BELOW ");
         }

}function myFunction2() {
  var z = document.getElementById("subvalue2");
	var m = document.forms["formlistt"]["names"].value;
	var n = document.forms["formlistt"]["monum"].value;
	var o = document.forms["formlistt"]["memail"].value;
	var p = document.forms["formlistt"]["mage"].value;
	var q = document.forms["formlistt"]["mdob"].value;
  if (z.style.display === "block"  || m == null || m=="" || n == null || n==""|| o == null || o==""|| p == null || p=="" || q == "") {
    z.style.display = "none";
    $("#submits").attr("abled");

  } else {
  z.style.display = "block";
    $("#submits").attr("disabled", true);

  }
}
function getter() {
	var i,j,flname;
	var y = document.getElementById("returnval");

	var x = document.getElementById("formlist");

	for (i = 0; i < x.length ;i++) {
		var text = x.elements[i].value;
		var id = "getval" + i;
		document.getElementById(id).innerHTML = text;


	//first last letter-:
		var z,y;
		y=document.getElementById("fname").value;
		z=document.getElementById("fname").value;
		var lletter = y.charAt(y.length-1);
		document.getElementById("letter").innerHTML = lletter;

		var fletter = z.charAt(0);
		document.getElementById("letterf").innerHTML = fletter;

	// for mobile number sum
	 var mob=document.getElementById("mobnum").value;
	 sum=0;
	 while(mob!=0){
		sum=  (mob%10) + sum;
		mob= mob/10;
		mob=mob-(mob%1);
	}
	document.getElementById("returnsum").innerHTML=sum;

	// *********************for email*******************************
		var mail=document.getElementById("email").value;
		var atrate=mail.search("@");
		var dom=mail.slice(atrate,mail.length);
		var mail1=document.getElementById("email").value;
		var user=mail1.slice(0,atrate);
		document.getElementById("returnuser").innerHTML=user;
		//var k=mail.charAt(mail.length-9);
		//document.getElementById("returnmail").innerHTML=k;
	var ddom;
	switch(dom){
		case "@gmail.com":
			ddom="GOOGLE";
			document.getElementById("returnmail").innerHTML="GOOGLE";
			break;
		case "@yahoo.com":
			ddom="YAHOO";
			document.getElementById("returnmail").innerHTML="YAHOO";
			break;
		case "@hotmail.com":
			ddom="MICROSOFT";
			document.getElementById("returnmail").innerHTML="MICROSOFT";
			break;
		default:
			ddom="INVALID DOMAIN!!";
			document.getElementById("returnmail").innerHTML="INVALID DOMAIN!!";

	}



	//for age:-
		var getage=document.getElementById("age").value;
		if(getage===0 || getage<=12){
			document.getElementById("returnage").innerHTML="CHILDREN";
		}else if(getage===13 || getage<=19){
			document.getElementById("returnage").innerHTML="TEENAGER";
		}else if(getage===20 || getage<=35){
			document.getElementById("returnage").innerHTML="ADULT";
		}else{
			document.getElementById("returnage").innerHTML="OLD";
		}

		var grp=document.getElementById("age").value;
		if(grp<=10){
			document.getElementById("returngrp").innerHTML="10";
		}
		else if(grp<=20){
			document.getElementById("returngrp").innerHTML="20";
		}
	  else 	if(grp<=30){
			document.getElementById("returngrp").innerHTML="30";
		}
		else if(grp<=40){
			document.getElementById("returngrp").innerHTML="40";
		}
		else if(grp<=50){
			document.getElementById("returngrp").innerHTML="50";
		}
		else if(grp<=60){
			document.getElementById("returngrp").innerHTML="60";
		}
		else if(grp<=70){
			document.getElementById("returngrp").innerHTML="70";
		}
		else if(grp<=80){
			document.getElementById("returngrp").innerHTML="80";
		}
		else if(grp<=90){
			document.getElementById("returngrp").innerHTML="90";
		}
		else if(grp<=100){
			document.getElementById("returngrp").innerHTML="100";
		}

var getmonth=document.getElementById("dofb").value;
var getmonth1=getmonth.slice(5,7);
//document.getElementById("returmonth").innerHTML=getmonth1;
if(getmonth1==="01"){
	document.getElementById("returnmonth").innerHTML="JANUARY";
}
else if(getmonth1==="02"){
	document.getElementById("returnmonth").innerHTML="FEBRUARY";
}
else if(getmonth1==="03"){
	document.getElementById("returnmonth").innerHTML="MARCH";
}
else if(getmonth1==="04"){
	document.getElementById("returnmonth").innerHTML="APRIL";
}


else if(getmonth1==="05"){
	document.getElementById("returnmonth").innerHTML="MAY";
}

else if(getmonth1==="06"){
	document.getElementById("returnmonth").innerHTML="JUNE";
}

else if(getmonth1==="07"){
	document.getElementById("returnmonth").innerHTML="JULY";
}

else if(getmonth1==="08"){
	document.getElementById("returnmonth").innerHTML="AUGUST";
}

else if(getmonth1==="09"){
	document.getElementById("returnmonth").innerHTML="SEPTEMBER";
}

else if(getmonth1==="10"){
	document.getElementById("returnmonth").innerHTML="OCTOBER";
}

else if(getmonth1==="11"){
	document.getElementById("returnmonth").innerHTML="NOVEMBER";
}
else if(getmonth1==="12"){
	document.getElementById("returnmonth").innerHTML="DECEMBER";
}
else{
	document.getElementById("returnmonth").innerHTML="INVALID ENTRY!!!!";
}

	}

}
