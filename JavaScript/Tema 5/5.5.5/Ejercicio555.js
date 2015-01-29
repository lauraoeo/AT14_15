function add () {
	var element = document.getElementById("op").innerHTML;
	var array = element.split("+");
	var res=(parseInt(array[0]) + parseInt(array[1]));	
	var elem2 = document.getElementById("res");
	elem2.innerHTML = "= " + res;
};
