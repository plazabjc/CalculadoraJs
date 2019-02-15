var calculadora = {
	init: function () {
		var aux = "0";
		var display = document.getElementById("display");
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


		//Eventos
		btn_1.onclick = function(e){
			if(aux === "0"){
				aux = "1";
			} else {
				aux = aux + "1";
			}
			display.textContent = aux.substring(0, 8)	
		}
		btn_2.onclick = function(e){
			if(aux === "0"){
				aux = "2";
			} else {
				aux = aux + "2";
			}
			display.textContent = Number(aux).substring(0, 8)
		}
		btn_3.onclick = function(e){
			if(aux === "0"){
				aux = "3";
			} else {
				aux = aux + "3";
			}
			display.textContent = aux.substring(0, 8)
		}
		btn_4.onclick = function(e){
			if(aux === "0"){
				aux = "4";
			} else {
				aux = aux + "4";
			}
			display.textContent = aux.substring(0, 8)
		}
		btn_5.onclick = function(e){
			if(aux === "0"){
				aux = "5";
			} else {
				aux = aux + "5";
			}
			display.textContent = aux.substring(0, 8)
		}
		btn_6.onclick = function(e){
			if(aux === "0"){
				aux = "6";
			} else {
				aux = aux + "6";
			}
			display.textContent = aux.substring(0, 8)
		}
		btn_7.onclick = function(e){
			if(aux === "0"){
				aux = "7";
			} else {
				aux = aux + "7";
			}
			display.textContent = aux.substring(0, 8)
		}
		btn_8.onclick = function(e){
			if(aux === "0"){
				aux = "8";
			} else {
				aux = aux + "8";
			}
			display.textContent = aux.substring(0, 8)
		}
		btn_9.onclick = function(e){
			if(aux === "0"){
				aux = "9";
			} else {
				aux = aux + "9";
			}
			display.textContent = aux.substring(0, 8)
		}
		btn_0.onclick = function(e){
			if (aux !== "0"){
				aux = aux + "0";
			}
			display.textContent = aux.substring(0, 8)
		}

		on.onclick = function(e){
			aux = "0";
			display.textContent = aux.substring(0, 8)
		}

		punto.onclick = function(e){
			if(aux.indexOf('.') === -1){
				aux = aux + ".";
			}
		}

		sign.onclick = function(e){
			if (aux === "0") {
				return
			} 

			if(aux.indexOf('-') === -1){
				aux = "-" + aux;
			} else {
				aux = aux.substring(1);
			}
			display.textContent = aux.substring(0, 8)
		}


	


		var presionarTecla = function(event) {
		  // document.getElementsByClassName("tecla").style="width:50%;";
		  // event.target es el elemento que disparo el evento
		  event.target.style.transform = "scale(0.9)";
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