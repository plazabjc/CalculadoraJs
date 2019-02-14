var calculadora = {
	init: function () {
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
			if(display.textContent === "0"){
				display.textContent = "1";
			} else {
				display.textContent = display.textContent + "1";
			}	
		}
		btn_2.onclick = function(e){
			if(display.textContent === "0"){
				display.textContent = "2";
			} else {
				display.textContent = display.textContent + "2";
			}
		}
		btn_3.onclick = function(e){
			if(display.textContent === "0"){
				display.textContent = "3";
			} else {
				display.textContent = display.textContent + "3";
			}
		}
		btn_4.onclick = function(e){
			if(display.textContent === "0"){
				display.textContent = "4";
			} else {
				display.textContent = display.textContent + "4";
			}
		}
		btn_5.onclick = function(e){
			if(display.textContent === "0"){
				display.textContent = "5";
			} else {
				display.textContent = display.textContent + "5";
			}
		}
		btn_6.onclick = function(e){
			if(display.textContent === "0"){
				display.textContent = "6";
			} else {
				display.textContent = display.textContent + "6";
			}
		}
		btn_7.onclick = function(e){
			if(display.textContent === "0"){
				display.textContent = "7";
			} else {
				display.textContent = display.textContent + "7";
			}
		}
		btn_8.onclick = function(e){
			if(display.textContent === "0"){
				display.textContent = "8";
			} else {
				display.textContent = display.textContent + "8";
			}
		}
		btn_9.onclick = function(e){
			if(display.textContent === "0"){
				display.textContent = "9";
			} else {
				display.textContent = display.textContent + "9";
			}
		}
		btn_0.onclick = function(e){
			if (display.textContent !== "0"){
				display.textContent = display.textContent + "0";
			}
		}

		on.onclick = function(e){
			display.textContent = "0";
		}

		punto.onclick = function(e){
			if(display.textContent.indexOf('.') === -1){
				display.textContent = display.textContent + ".";
			}
		}

		sign.onclick = function(e){
			if (display.textContent === "0") {
				return
			} 

			if(display.textContent.indexOf('-') === -1){
				display.textContent = "-" + display.textContent;
			} else {
				display.textContent = display.textContent.substring(1);
			}
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