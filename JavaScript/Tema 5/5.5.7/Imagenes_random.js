lista=['http://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Barbados_beach_%286735320631%29.jpg/1280px-Barbados_beach_%286735320631%29.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyVcXLkQvHilHH-yEwJNORti6UOUQWzzgNT3bU5O9RpsRelHvo',
'http://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Indian_Head_and_Twin_Mountains_on_the_Eastern_Devil%27s_Path%2C_October_2012.jpg/1280px-Indian_Head_and_Twin_Mountains_on_the_Eastern_Devil%27s_Path%2C_October_2012.jpg',
'http://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Eiffelturm4.jpg/640px-Eiffelturm4.jpg', 
'http://www.fonditos.com/includes/imagen.php?ruta=/var/www/fonditos/www/wallpapers/1152x864/03049.jpg&nombre=cold_winter-1152x864.jpg']

function generar(){
	var op1= Math.floor(Math.random() *5);
	var img = document.getElementById('img');
	img.src = lista[op1];

};

generar();