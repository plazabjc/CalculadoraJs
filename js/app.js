var calculadora = {
	init: function () {
		var on = document.getElementById("on");
		var sign = document.getElementById("sign");
		var raiz = document.getElementById("raiz");
		var divide = document.getElementById("dividido");
		var btn_7 = document.getElementById("7");
		var btn_8 = document.getElementById("8");
		var btn_9 = document.getElementById("9");
		var multiplica = document.getElementById("por");
		var btn_4 = document.getElementById("4");
		var btn_5 = document.getElementById("5");
		var btn_6 = document.getElementById("6");
		var resta = document.getElementById("menos");
		var btn_1 = document.getElementById("1");
		var btn_2 = document.getElementById("2");
		var btn_3 = document.getElementById("3");
		var btn_0 = document.getElementById("0");
		var punto = document.getElementById("punto");
		var igual = document.getElementById("igual");
		var suma = document.getElementById("mas");
	

		var presionarTecla = function(event) {
		  // document.getElementsByClassName("tecla").style="width:50%;";
		  // event.target es el elemento que disparo el evento
		  event.target.style.transform = "scale(0.8)";
		}

		var levantarTecla = function(event) {
		  // document.getElementsByClassName("tecla").style="width:50%;";
		  // event.target es el elemento que disparo el evento
		  event.target.style.transform = "scale(1)";
		}




		var teclas = document.getElementsByClassName("tecla")
		for(var i=0; i < teclas.length; i++){
			var tecla = teclas[i]

			tecla.addEventListener("mousedown", presionarTecla)
			tecla.addEventListener("mouseup", levantarTecla)
		}

		

	}
}



calculadora.init();