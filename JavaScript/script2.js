document.getElementById('div1').style.display = "block";
document.getElementById('addtab').classList.add('active');
document.getElementById('listtab').classList.remove('active');
document.getElementById('searchtab').classList.remove('active');
document.getElementById('tab').style.display = "none";
document.getElementById('search').style.display = 'none';
function add() {
	document.getElementById('div1').style.display = "block";
	document.getElementById('addtab').classList.add('active');
	document.getElementById('listtab').classList.remove('active');
	document.getElementById('searchtab').classList.remove('active');
	document.getElementById('tab').style.display = "none";
	document.getElementById('search').style.display = 'none';
		var employee = [];
		var empname = document.getElementById("name").value;
		var empage = document.getElementById("age").value;
		var empemail = document.getElementById("email").value;
		var empsal = document.getElementById("salary").value;
		var empremark = document.getElementById("remarks").value;
		var test = window.localStorage.getItem("employee");
		if(test) {
			employee = JSON.parse(test);
		}
		console.log(employee);
		employee.push( { "addname" : empname, "addage" : empage, "addemail" : empemail, "addsalary" : empsal, "addremarks" : empremark} );
		window.localStorage.setItem("employee", JSON.stringify(employee));
	
	}
function search1() {
	document.getElementById('div1').style.display = "none";
	document.getElementById('addtab').classList.remove('active');
	document.getElementById('listtab').classList.remove('active');
	document.getElementById('searchtab').classList.add('active');
	document.getElementById('tab').style.display = "none";
	document.getElementById('search').style.display = 'block';
}
function search() {
	var test = window.localStorage.getItem("employee");
	test = JSON.parse(test);
		var res = [];
		var query= document.getElementById("search11").value;
		var xlen = test.length;
		for(let i=0;i<xlen;i++)
		{
			if(test[i].addname.includes(query) || test[i].addemail.includes(query)) {
				res.push(test[i]);
			}
		}
		console.log(res);
		var t = '<table><tr><th> Name </th> <th> Age </th> <th> Email </th> <th> Salary </th> <th> Remarks </th> </tr>';
		var xlen = res.length;
		for (var i = 0; i < xlen; i++) {
			t += '<tr>';
			t += '<td>' + res[i].addname + '</td>' ;
			t += '<td>' + res[i].addage + '</td>';
			t += '<td>' + res[i].addemail + '</td>';
			t += '<td>' + res[i].addsalary + '</td>';
			t += '<td>' + res[i].addremarks + '</td>';
			t += '</tr>';
		}
		t += '</table>';
		document.getElementById('show').innerHTML = t;
	}		
function list() {
	document.getElementById('div1').style.display = "none";
	document.getElementById('addtab').classList.remove('active');
	document.getElementById('listtab').classList.add('active');
	document.getElementById('searchtab').classList.remove('active');
	document.getElementById('tab').style.display = "block";
	document.getElementById('search').style.display = 'none';
}
var test = window.localStorage.getItem("employee");
	if(test) {
		test = JSON.parse(test);
	}
	var tbl= '<table><tr><th> Name </th> <th> Age </th> <th> Email </th> <th> Salary </th> <th> Remarks </th> </tr>';
	var xlen = test.length;
    for (var i = 0; i < xlen; i++) {
        tbl += '<tr>';
        tbl += '<td>' + test[i].addname + '</td>' ;
        tbl += '<td>' + test[i].addage + '</td>';
		tbl += '<td>' + test[i].addemail + '</td>';
		tbl += '<td>' + test[i].addsalary + '</td>';
        tbl += '<td>' + test[i].addremarks + '</td>';
        tbl += '</tr>';
	}
	tbl += '</table>';
	console.log(tbl);
	document.getElementById('tab').innerHTML = tbl;
