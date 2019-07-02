document.getElementById('div1').style.display = "block";
document.getElementById('addtab').classList.add('active');
document.getElementById('listtab').classList.remove('active');
document.getElementById('searchtab').classList.remove('active');
document.getElementById('deletetab').classList.remove('active');
document.getElementById('edittab').classList.remove('active');
document.getElementById('tab').style.display = "none";
document.getElementById('search').style.display = 'none';
document.getElementById('delete').style.display = 'none';
document.getElementById('edit').style.display = 'none';
document.getElementById('result1').style.display = 'none';
document.getElementById('result2').style.display = 'none';
document.getElementById('result3').style.display = 'none';
document.getElementById('result4').style.display = 'none';
document.getElementById('result5').style.display = 'none';
document.getElementById('result6').style.display = 'none';
document.getElementById('result7').style.display = 'none';
document.getElementById('result8').style.display = 'none';
document.getElementById('result9').style.display = 'none';
document.getElementById('result10').style.display = 'none';
document.getElementById('result11').style.display = 'none';

function emailsame(inputText) {
	var test = window.localStorage.getItem("employee");
	if(test) {
		employee = JSON.parse(test);
	}
	var emplen = employee.length;
	for(var i=0; i<emplen;i++)
	{
		if(employee[i].addemail == inputText)
			return false;
	}
	return true;
}
function emailsame1(inputText , index) {
	var test = window.localStorage.getItem("employee");
	if(test) {
		employee = JSON.parse(test);
	}
	var emplen = employee.length;
	for(var i=0; i<emplen;i++)
	{
		if(employee[i].addemail == inputText && index!=i)
			return false;
	}
	return true;
}
function emailvalidate(inputText) {
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if( inputText.match( mailformat ) ) {
		return true;
	} else {
		return false;
	}
}
function nameValidate(inputText) {
	var reg = /^[a-zA-Z\s]*$/;
	if(inputText.match( reg))
		return true;
	else
		return false;
}
function agevalidate(inputText) {
	var reg = /^[0-9]+$/;
	if(inputText.match( reg)) {
		return true; } else {
		return false; }
}
function salVaildate(inputText) {
	var reg = /^[0-9]+[.]{0,1}[0-9]{0,4}$/;
	if(inputText.match( reg)) {
		return true; } else {
		return false; }
} 
function add1 () {
	document.getElementById('div1').style.display = "block";
	document.getElementById('addtab').classList.add('active');
	document.getElementById('searchtab').classList.remove('active');
	document.getElementById('deletetab').classList.remove('active');
	document.getElementById('edittab').classList.remove('active');
	document.getElementById('tab').style.display = "none";
	document.getElementById('search').style.display = 'none';
	document.getElementById('delete').style.display = 'none';
	document.getElementById('edit').style.display = 'none';
}
function add() {
	var employee = [];
	var empname = document.getElementById("name").value;
	var empage = document.getElementById("age").value;
	var empemail = document.getElementById("email").value;
	var empsal = document.getElementById("salary").value;
	var empremark = document.getElementById("remarks").value;
	if (empname == "") {
		document.getElementById('result1').style.display = 'block';
		document.getElementById('result2').style.display = 'none';
		document.getElementById('result3').style.display = 'none';
		document.getElementById('result4').style.display = 'none';
		document.getElementById('result5').style.display = 'none';
		document.getElementById('result6').style.display = 'none';
		document.getElementById('result7').style.display = 'none';
		document.getElementById('result8').style.display = 'none';
		document.getElementById('result9').style.display = 'none';
		document.getElementById('result10').style.display = 'none';
		document.getElementById('result11').style.display = 'none';
	} else if (!(nameValidate(empname))) {
		document.getElementById('result1').style.display = 'none';
		document.getElementById('result2').style.display = 'block';
		document.getElementById('result3').style.display = 'none';
		document.getElementById('result4').style.display = 'none';
		document.getElementById('result5').style.display = 'none';
		document.getElementById('result6').style.display = 'none';
		document.getElementById('result7').style.display = 'none';
		document.getElementById('result8').style.display = 'none';
		document.getElementById('result9').style.display = 'none';
		document.getElementById('result10').style.display = 'none';
		document.getElementById('result11').style.display = 'none';

	} else if (empage == "") {
		document.getElementById('result1').style.display = 'none';
		document.getElementById('result2').style.display = 'none';
		document.getElementById('result3').style.display = 'block';
		document.getElementById('result4').style.display = 'none';
		document.getElementById('result5').style.display = 'none';
		document.getElementById('result6').style.display = 'none';
		document.getElementById('result7').style.display = 'none';
		document.getElementById('result8').style.display = 'none';
		document.getElementById('result9').style.display = 'none';
		document.getElementById('result10').style.display = 'none';
		document.getElementById('result11').style.display = 'none';

	} else if (!(agevalidate(empage))) {
		document.getElementById('result1').style.display = 'none';
		document.getElementById('result2').style.display = 'none';
		document.getElementById('result3').style.display = 'none';
		document.getElementById('result4').style.display = 'block';
		document.getElementById('result5').style.display = 'none';
		document.getElementById('result6').style.display = 'none';
		document.getElementById('result7').style.display = 'none';
		document.getElementById('result8').style.display = 'none';
		document.getElementById('result9').style.display = 'none';
		document.getElementById('result10').style.display = 'none';
		document.getElementById('result11').style.display = 'none';

	} else if (empemail == "") {
		document.getElementById('result1').style.display = 'none';
		document.getElementById('result2').style.display = 'none';
		document.getElementById('result3').style.display = 'none';
		document.getElementById('result4').style.display = 'none';
		document.getElementById('result5').style.display = 'block';
		document.getElementById('result6').style.display = 'none';
		document.getElementById('result7').style.display = 'none';
		document.getElementById('result8').style.display = 'none';
		document.getElementById('result9').style.display = 'none';
		document.getElementById('result10').style.display = 'none';
		document.getElementById('result11').style.display = 'none';

	} else if (!(emailvalidate(empemail))) {
		document.getElementById('result1').style.display = 'none';
		document.getElementById('result2').style.display = 'none';
		document.getElementById('result3').style.display = 'none';
		document.getElementById('result4').style.display = 'none';
		document.getElementById('result5').style.display = 'none';
		document.getElementById('result6').style.display = 'block';
		document.getElementById('result7').style.display = 'none';
		document.getElementById('result8').style.display = 'none';
		document.getElementById('result9').style.display = 'none';
		document.getElementById('result10').style.display = 'none';
		document.getElementById('result11').style.display = 'none';

	} else if (!(emailsame(empemail))) {
		document.getElementById('result1').style.display = 'none';
		document.getElementById('result2').style.display = 'none';
		document.getElementById('result3').style.display = 'none';
		document.getElementById('result4').style.display = 'none';
		document.getElementById('result5').style.display = 'none';
		document.getElementById('result6').style.display = 'none';
		document.getElementById('result7').style.display = 'block';
		document.getElementById('result8').style.display = 'none';
		document.getElementById('result9').style.display = 'none';
		document.getElementById('result10').style.display = 'none';
		document.getElementById('result11').style.display = 'none';
	} else if (empsal == "") {
		document.getElementById('result1').style.display = 'none';
		document.getElementById('result2').style.display = 'none';
		document.getElementById('result3').style.display = 'none';
		document.getElementById('result4').style.display = 'none';
		document.getElementById('result5').style.display = 'none';
		document.getElementById('result6').style.display = 'none';
		document.getElementById('result7').style.display = 'none';
		document.getElementById('result8').style.display = 'block';
		document.getElementById('result9').style.display = 'none';
		document.getElementById('result10').style.display = 'none';
		document.getElementById('result11').style.display = 'none';

	} else if (!(salVaildate(empsal))) {
		document.getElementById('result1').style.display = 'none';
		document.getElementById('result2').style.display = 'none';
		document.getElementById('result3').style.display = 'none';
		document.getElementById('result4').style.display = 'none';
		document.getElementById('result5').style.display = 'none';
		document.getElementById('result6').style.display = 'none';
		document.getElementById('result7').style.display = 'none';
		document.getElementById('result8').style.display = 'none';
		document.getElementById('result9').style.display = 'block';
		document.getElementById('result10').style.display = 'none';
		document.getElementById('result11').style.display = 'none';

	} else if(empremark == "") {
		document.getElementById('result1').style.display = 'none';
		document.getElementById('result2').style.display = 'none';
		document.getElementById('result3').style.display = 'none';
		document.getElementById('result4').style.display = 'none';
		document.getElementById('result5').style.display = 'none';
		document.getElementById('result6').style.display = 'none';
		document.getElementById('result7').style.display = 'none';
		document.getElementById('result8').style.display = 'none';
		document.getElementById('result9').style.display = 'none';
		document.getElementById('result10').style.display = 'block';
		document.getElementById('result11').style.display = 'none';

	} else {
		document.getElementById('result1').style.display = 'none';
		document.getElementById('result2').style.display = 'none';
		document.getElementById('result3').style.display = 'none';
		document.getElementById('result4').style.display = 'none';
		document.getElementById('result5').style.display = 'none';
		document.getElementById('result6').style.display = 'none';
		document.getElementById('result7').style.display = 'none';
		document.getElementById('result8').style.display = 'none';
		document.getElementById('result9').style.display = 'none';
		document.getElementById('result10').style.display = 'none';
		document.getElementById('result11').style.display = 'none';
	var test = window.localStorage.getItem("employee");
	if(test) {
		employee = JSON.parse(test);
	}
	employee.push( { "addname" : empname, "addage" : empage, "addemail" : empemail, "addsalary" : empsal, "addremarks" : empremark} );
	window.localStorage.setItem("employee", JSON.stringify(employee));
	document.getElementById('result11').style.display = 'block';
	}
}

function edit_submit() {
	var employee = [];
	var empindex = document.getElementById("index_edit").value;
	var empname = document.getElementById("nameedit").value;
	var empage = document.getElementById("ageedit").value;
	var empemail = document.getElementById("emailedit").value;
	var empsal = document.getElementById("salaryedit").value;
	var empremark = document.getElementById("remarksedit").value;
	if (empname == "") {
		document.getElementById('result1e').style.display = 'block';
		document.getElementById('result2e').style.display = 'none';
		document.getElementById('result3e').style.display = 'none';
		document.getElementById('result4e').style.display = 'none';
		document.getElementById('result5e').style.display = 'none';
		document.getElementById('result6e').style.display = 'none';
		document.getElementById('result7e').style.display = 'none';
		document.getElementById('result8e').style.display = 'none';
		document.getElementById('result9e').style.display = 'none';
		document.getElementById('result10e').style.display = 'none';
		document.getElementById('result11e').style.display = 'none';
	} else if (!(nameValidate(empname))) {
		document.getElementById('result1e').style.display = 'none';
		document.getElementById('result2e').style.display = 'block';
		document.getElementById('result3e').style.display = 'none';
		document.getElementById('result4e').style.display = 'none';
		document.getElementById('result5e').style.display = 'none';
		document.getElementById('result6e').style.display = 'none';
		document.getElementById('result7e').style.display = 'none';
		document.getElementById('result8e').style.display = 'none';
		document.getElementById('result9e').style.display = 'none';
		document.getElementById('result10e').style.display = 'none';
		document.getElementById('result11e').style.display = 'none';
	} else if (empage == "") {
		document.getElementById('result1e').style.display = 'none';
		document.getElementById('result2e').style.display = 'none';
		document.getElementById('result3e').style.display = 'block';
		document.getElementById('result4e').style.display = 'none';
		document.getElementById('result5e').style.display = 'none';
		document.getElementById('result6e').style.display = 'none';
		document.getElementById('result7e').style.display = 'none';
		document.getElementById('result8e').style.display = 'none';
		document.getElementById('result9e').style.display = 'none';
		document.getElementById('result10e').style.display = 'none';
		document.getElementById('result11e').style.display = 'none';
	} else if (!(agevalidate(empage))) {
		document.getElementById('result1e').style.display = 'none';
		document.getElementById('result2e').style.display = 'none';
		document.getElementById('result3e').style.display = 'none';
		document.getElementById('result4e').style.display = 'block';
		document.getElementById('result5e').style.display = 'none';
		document.getElementById('result6e').style.display = 'none';
		document.getElementById('result7e').style.display = 'none';
		document.getElementById('result8e').style.display = 'none';
		document.getElementById('result9e').style.display = 'none';
		document.getElementById('result10e').style.display = 'none';
		document.getElementById('result11e').style.display = 'none';

	} else if (empemail == "") {
		document.getElementById('result1e').style.display = 'none';
		document.getElementById('result2e').style.display = 'none';
		document.getElementById('result3e').style.display = 'none';
		document.getElementById('result4e').style.display = 'none';
		document.getElementById('result5e').style.display = 'block';
		document.getElementById('result6e').style.display = 'none';
		document.getElementById('result7e').style.display = 'none';
		document.getElementById('result8e').style.display = 'none';
		document.getElementById('result9e').style.display = 'none';
		document.getElementById('result10e').style.display = 'none';
		document.getElementById('result11e').style.display = 'none';

	} else if (!(emailvalidate(empemail))) {
		document.getElementById('result1e').style.display = 'none';
		document.getElementById('result2e').style.display = 'none';
		document.getElementById('result3e').style.display = 'none';
		document.getElementById('result4e').style.display = 'none';
		document.getElementById('result5e').style.display = 'none';
		document.getElementById('result6e').style.display = 'block';
		document.getElementById('result7e').style.display = 'none';
		document.getElementById('result8e').style.display = 'none';
		document.getElementById('result9e').style.display = 'none';
		document.getElementById('result10e').style.display = 'none';
		document.getElementById('result11e').style.display = 'none';

	} else if (!(emailsame1(empemail, empindex))) {
		document.getElementById('result1e').style.display = 'none';
		document.getElementById('result2e').style.display = 'none';
		document.getElementById('result3e').style.display = 'none';
		document.getElementById('result4e').style.display = 'none';
		document.getElementById('result5e').style.display = 'none';
		document.getElementById('result6e').style.display = 'none';
		document.getElementById('result7e').style.display = 'block';
		document.getElementById('result8e').style.display = 'none';
		document.getElementById('result9e').style.display = 'none';
		document.getElementById('result10e').style.display = 'none';
		document.getElementById('result11e').style.display = 'none';
	} else if (empsal == "") {
		document.getElementById('result1e').style.display = 'none';
		document.getElementById('result2e').style.display = 'none';
		document.getElementById('result3e').style.display = 'none';
		document.getElementById('result4e').style.display = 'none';
		document.getElementById('result5e').style.display = 'none';
		document.getElementById('result6e').style.display = 'none';
		document.getElementById('result7e').style.display = 'none';
		document.getElementById('result8e').style.display = 'block';
		document.getElementById('result9e').style.display = 'none';
		document.getElementById('result10e').style.display = 'none';
		document.getElementById('result11e').style.display = 'none';

	} else if (!(salVaildate(empsal))) {
		document.getElementById('result1e').style.display = 'none';
		document.getElementById('result2e').style.display = 'none';
		document.getElementById('result3e').style.display = 'none';
		document.getElementById('result4e').style.display = 'none';
		document.getElementById('result5e').style.display = 'none';
		document.getElementById('result6e').style.display = 'none';
		document.getElementById('result7e').style.display = 'none';
		document.getElementById('result8e').style.display = 'none';
		document.getElementById('result9e').style.display = 'block';
		document.getElementById('result10e').style.display = 'none';
		document.getElementById('result11e').style.display = 'none';

	} else if(empremark == "") {
		document.getElementById('result1e').style.display = 'none';
		document.getElementById('result2e').style.display = 'none';
		document.getElementById('result3e').style.display = 'none';
		document.getElementById('result4e').style.display = 'none';
		document.getElementById('result5e').style.display = 'none';
		document.getElementById('result6e').style.display = 'none';
		document.getElementById('result7e').style.display = 'none';
		document.getElementById('result8e').style.display = 'none';
		document.getElementById('result9e').style.display = 'none';
		document.getElementById('result10e').style.display = 'block';
		document.getElementById('result11e').style.display = 'none';

	} else {
		document.getElementById('result1e').style.display = 'none';
		document.getElementById('result2e').style.display = 'none';
		document.getElementById('result3e').style.display = 'none';
		document.getElementById('result4e').style.display = 'none';
		document.getElementById('result5e').style.display = 'none';
		document.getElementById('result6e').style.display = 'none';
		document.getElementById('result7e').style.display = 'none';
		document.getElementById('result8e').style.display = 'none';
		document.getElementById('result9e').style.display = 'none';
		document.getElementById('result10e').style.display = 'none';
		document.getElementById('result11e').style.display = 'none';
		var test = window.localStorage.getItem("employee");
		if(test) {
			employee = JSON.parse(test);
		}
		employee[empindex].addname = empname;
		employee[empindex].addage = empage;
		employee[empindex].addemail = empemail;
		employee[empindex].addsalary = empsal;
		employee[empindex].addremarks = empremark;
		window.localStorage.setItem("employee", JSON.stringify(employee));
		document.getElementById('result11').style.display = 'block';
		list();
	}
}

function search1() {
	document.getElementById('div1').style.display = "none";
	document.getElementById('addtab').classList.remove('active');
	document.getElementById('listtab').classList.remove('active');
	document.getElementById('searchtab').classList.add('active');
	document.getElementById('deletetab').classList.remove('active');
	document.getElementById('edittab').classList.remove('active');
	document.getElementById('tab').style.display = "none";
	document.getElementById('search').style.display = 'block';
	document.getElementById('delete').style.display = 'none';
	document.getElementById('edit').style.display = 'none';
}

function search() {
	var test = window.localStorage.getItem("employee");
	test = JSON.parse(test);
	var res = [];
	var query= document.getElementById("search11").value;
	var xlen = test.length;
	for(let i=0;i<xlen;i++) {
		if(test[i].addname.includes(query) || test[i].addemail.includes(query)) {
				res.push(test[i]);
		}
	}
	// console.log(res);
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
	document.getElementById('deletetab').classList.remove('active');
	document.getElementById('edittab').classList.remove('active');
	document.getElementById('tab').style.display = "block";
	document.getElementById('search').style.display = 'none';
	document.getElementById('delete').style.display = 'none';
	document.getElementById('edit').style.display = 'none';
	list_display();
}

function delete1() {
	document.getElementById('div1').style.display = "none";
	document.getElementById('addtab').classList.remove('active');
	document.getElementById('listtab').classList.remove('active');
	document.getElementById('searchtab').classList.remove('active');
	document.getElementById('deletetab').classList.add('active');
	document.getElementById('edittab').classList.remove('active');
	document.getElementById('tab').style.display = "none";
	document.getElementById('search').style.display = 'none';
	document.getElementById('delete').style.display = 'block';
	document.getElementById('edit').style.display = 'none';
	delete11();
}

function delete11() {
	var test = window.localStorage.getItem("employee");
	test = JSON.parse(test);
	var i;
	var xlen = test.length;
	var t = '<br><table><tr><th> Name </th> <th> Age </th> <th> Email </th> <th> Salary </th> <th> Remarks </th>  <th> Delete </th></tr>';
	for( i=0 ; i<xlen ; i++) {
		t += '<tr>';
		t += '<td>' + test[i].addname + '</td>' ;
		t += '<td>' + test[i].addage + '</td>';
		t += '<td>' + test[i].addemail + '</td>';
		t += '<td>' + test[i].addsalary + '</td>';
		t += '<td>' + test[i].addremarks + '</td>';
		t += '<td> <button id="edit_' + i + '" onclick = "delete111('+ i +');"> Delete </button>';
		t += '</tr>';
	}
	t += '</table>';
	// console.log(test);
	document.getElementById('showdelete').style.display= "block";
	document.getElementById('showdelete').innerHTML = t;
}
function delete111(index) {
	var test = window.localStorage.getItem("employee");
	test = JSON.parse(test);
	test.splice(index,1);
	window.localStorage.setItem("employee", JSON.stringify(test));
	list();
}

function edit1() {
	document.getElementById('div1').style.display = "none";
	document.getElementById('addtab').classList.remove('active');
	document.getElementById('listtab').classList.remove('active');
	document.getElementById('searchtab').classList.remove('active');
	document.getElementById('deletetab').classList.remove('active');
	document.getElementById('edittab').classList.add('active');
	document.getElementById('tab').style.display = "none";
	document.getElementById('search').style.display = 'none';
	document.getElementById('delete').style.display = 'none';
	document.getElementById('edit').style.display = 'block';
	edit11();
}

function edit11() {
	var test = window.localStorage.getItem("employee");
	test = JSON.parse(test);
	var i;
	var xlen = test.length;
	document.getElementById('result1e').style.display = 'none';
	document.getElementById('result2e').style.display = 'none';
	document.getElementById('result3e').style.display = 'none';
	document.getElementById('result4e').style.display = 'none';
	document.getElementById('result5e').style.display = 'none';
	document.getElementById('result6e').style.display = 'none';
	document.getElementById('result7e').style.display = 'none';
	document.getElementById('result8e').style.display = 'none';
	document.getElementById('result9e').style.display = 'none';
	document.getElementById('result10e').style.display = 'none';
	document.getElementById('result11e').style.display = 'none';
	var t = '<br><table><tr><th> Name </th> <th> Age </th> <th> Email </th> <th> Salary </th> <th> Remarks </th>  <th> Edit </th></tr>';
	for( i=0 ; i<xlen ; i++) {
		t += '<tr>';
		t += '<td>' + test[i].addname + '</td>' ;
		t += '<td>' + test[i].addage + '</td>';
		t += '<td>' + test[i].addemail + '</td>';
		t += '<td>' + test[i].addsalary + '</td>';
		t += '<td>' + test[i].addremarks + '</td>';
		t += '<td> <button id="edit_' + i + '" onclick = "edit111('+ i +');"> Edit </button>';
		t += '</tr>';
	}
	t += '</table>';
	console.log(test);
	document.getElementById('showtable').innerHTML = t;
}

function edit111(index) {
	var test = window.localStorage.getItem("employee");
	test = JSON.parse(test);
	var xlen = test.length;
	document.getElementById('index_edit').value = index;
	document.getElementById('nameedit').value = test[index].addname;
	document.getElementById('ageedit').value = test[index].addage;
	document.getElementById('emailedit').value = test[index].addemail;
	document.getElementById('salaryedit').value = test[index].addsalary;
	document.getElementById('remarksedit').value = test[index].addremarks;
	document.getElementById('edit_form').style.display = "block";
}
function list_display(){
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
}
function validate2()
{
	document.getElementById('result1').style.display = 'none';
	document.getElementById('result2').style.display = 'none';
	document.getElementById('result3').style.display = 'none';
	document.getElementById('result4').style.display = 'none';
	document.getElementById('result5').style.display = 'none';
	document.getElementById('result6').style.display = 'none';
	document.getElementById('result7').style.display = 'none';
	document.getElementById('result8').style.display = 'none';
	document.getElementById('result9').style.display = 'none';
	document.getElementById('result10').style.display = 'none';
	document.getElementById('result11').style.display = 'none';
}