function cambiarImagen(){
	for(i=0; i< 5; i++){
		var element = document.getElementById(i);
		element.style.display = 'none';
	}

	var op1= Math.floor(Math.random() *5);

	var element = document.getElementById(op1);
	element.style.display= 'block';
};