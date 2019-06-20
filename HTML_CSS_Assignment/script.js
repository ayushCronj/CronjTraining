document.getElementById("result1").style.display = "none";
document.getElementById("result2").style.display = "none";
document.getElementById("result3").style.display = "none";
document.getElementById("result4").style.display = "none";
function validate1()
{
	var email1 = "ayush@cronj.com";
	var pass1 = "qwerty";
	if( document.getElementById('email').value == "")
	{
			document.getElementById("result3").style.display = "block";
			document.getElementById("result1").style.display = "none";
			document.getElementById("result2").style.display = "none";
			document.getElementById("result4").style.display = "none";
	}
	else if(document.getElementById('pass').value == "")
	{
			document.getElementById("result4").style.display = "block";
			document.getElementById("result1").style.display = "none";
			document.getElementById("result2").style.display = "none";
			document.getElementById("result3").style.display = "none";
	}
	else if( document.getElementById('email').value == email1 &&  document.getElementById('pass').value == pass1)
		{
			document.getElementById("result1").style.display = "block";
			document.getElementById("result2").style.display = "none";
			document.getElementById("result3").style.display = "none";
			document.getElementById("result4").style.display = "none";
			window.location = "table.html";
		}
	else
		{
			document.getElementById("result2").style.display = "block";
			document.getElementById("result1").style.display = "none";
			document.getElementById("result3").style.display = "none";
			document.getElementById("result4").style.display = "none";
		}
}
function validate2()
{
document.getElementById("result1").style.display = "none";
document.getElementById("result2").style.display = "none";
document.getElementById("result3").style.display = "none";
document.getElementById("result4").style.display = "none";
}
