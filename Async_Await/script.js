document.getElementById("result1").style.display = "none";
document.getElementById("result2").style.display = "none";
document.getElementById("result3").style.display = "none";
document.getElementById("result4").style.display = "none";
document.getElementById("emailerror").style.display = "none";
function ValidateEmail(inputText) {
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (inputText.match(mailformat)) {
		return true;
	} else {
		return false;
	}
}
function validate1() {
	var email1 = "ayush@cronj.com";
	var pass1 = "qwerty";
	var user1 = "Ayush Goel";
	if (document.getElementById('email').value == "") {
		document.getElementById("result3").style.display = "block";
		document.getElementById("result1").style.display = "none";
		document.getElementById("result2").style.display = "none";
		document.getElementById("result4").style.display = "none";
		document.getElementById("emailerror").style.display = "none";
	}
	else if (document.getElementById('pass').value == "") {
		document.getElementById("result4").style.display = "block";
		document.getElementById("result1").style.display = "none";
		document.getElementById("result2").style.display = "none";
		document.getElementById("result3").style.display = "none";
		document.getElementById("emailerror").style.display = "none";
	}
	else if ((document.getElementById('email').value == email1 || document.getElementById('email').value == user1) && document.getElementById('pass').value == pass1) {
		document.getElementById("result1").style.display = "block";
		document.getElementById("result2").style.display = "none";
		document.getElementById("result3").style.display = "none";
		document.getElementById("result4").style.display = "none";
		document.getElementById("emailerror").style.display = "none";
		sessionStorage.setItem(email1, pass1);
		window.location = "index1.html";
	}
	else {
		document.getElementById("result2").style.display = "block";
		document.getElementById("result1").style.display = "none";
		document.getElementById("result3").style.display = "none";
		document.getElementById("result4").style.display = "none";
		document.getElementById("emailerror").style.display = "none";
	}
}
function validate2() {
	document.getElementById("result1").style.display = "none";
	document.getElementById("result2").style.display = "none";
	document.getElementById("result3").style.display = "none";
	document.getElementById("result4").style.display = "none";
	document.getElementById("emailerror").style.display = "none";
}
