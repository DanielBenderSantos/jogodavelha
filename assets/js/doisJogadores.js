var j1 = 0;
var j2 = 0;
var valor = 0;
var b1 = 0;
var b2 = 0;
var b3 = 0;
var b4 = 0;
var b5 = 0;
var b6 = 0;
var b7 = 0;
var b8 = 0;
var b9 = 0;
var mat = [];
var continua = 0;
var numeroJogadas = 0;
var mudar = 0;
for (var j = 0; j < 9; j++) {
	mat[j] = []
}
function um() {
	if (continua == 0) {
		if (b1 == 0) {
			if (valor == 0) {
				document.getElementById("b1").id = "vermelho"
				valor = 1
				mat[0][0] = 1
			}
			else {

				document.getElementById("b1").id = "azul"
				valor = 0
				mat[0][0] = 0
			}
			b1++
			numeroJogadas++
			verifica(valor)
		}
	}
	
}


function dois() {
	if (continua == 0) {
		if (b2 == 0) {
			if (valor == 0) {
				document.getElementById("b2").id = "vermelho"
				valor = 1
				mat[0][1] = 1
			}
			else {

				document.getElementById("b2").id = "azul"
				valor = 0
				mat[0][1] = 0
			}
			b2++
			numeroJogadas++
			verifica(valor)
		}
	}
	
}

function tres() {
	if (continua == 0) {
		if (b3 == 0) {
			if (valor == 0) {
				document.getElementById("b3").id = "vermelho"
				valor = 1
				mat[0][2] = 1
			}
			else {

				document.getElementById("b3").id = "azul"
				valor = 0
				mat[0][2] = 0
			}
			b3++
			numeroJogadas++
			verifica(valor)
		}
	}
	
}

function quatro() {
	if (continua == 0) {
		if (b4 == 0) {
			if (valor == 0) {
				document.getElementById("b4").id = "vermelho"
				valor = 1
				mat[1][0] = 1
			}
			else {

				document.getElementById("b4").id = "azul"
				valor = 0
				mat[1][0] = 0
			}
			b4++
			numeroJogadas++
			verifica(valor)
		}
	}
	
}

function cinco() {
	if (continua == 0) {
		if (b5 == 0) {
			if (valor == 0) {
				document.getElementById("b5").id = "vermelho"
				valor = 1
				mat[1][1] = 1
			}
			else {

				document.getElementById("b5").id = "azul"
				valor = 0
				mat[1][1] = 0
			}
			b5++
			numeroJogadas++
			verifica(valor)
		}
	}
	
}

function seis() {
	if (continua == 0) {
		if (b6 == 0) {
			if (valor == 0) {
				document.getElementById("b6").id = "vermelho"
				valor = 1
				mat[1][2] = 1
			}
			else {

				document.getElementById("b6").id = "azul"
				valor = 0
				mat[1][2] = 0
			}
			b6++
			numeroJogadas++
			verifica(valor)
		}
	}
	
}

function sete() {
	if (continua == 0) {
		if (b7 == 0) {
			if (valor == 0) {
				document.getElementById("b7").id = "vermelho"
				valor = 1
				mat[2][0] = 1
			}
			else {

				document.getElementById("b7").id = "azul"
				valor = 0
				mat[2][0] = 0
			}
			b7++
			numeroJogadas++
			verifica(valor)
		}
	}
	
}

function oito() {
	if (continua == 0) {
		if (b8 == 0) {
			if (valor == 0) {
				document.getElementById("b8").id = "vermelho"
				valor = 1
				mat[2][1] = 1
			}
			else {

				document.getElementById("b8").id = "azul"
				valor = 0
				mat[2][1] = 0
			}
			b8++
			numeroJogadas++
			verifica(valor)
		}
	}
	
}

function nove() {
	if (continua == 0) {
		if (b9 == 0) {
			if (valor == 0) {
				document.getElementById("b9").id = "vermelho"
				valor = 1
				mat[2][2] = 1
			}
			else {

				document.getElementById("b9").id = "azul"
				valor = 0
				mat[2][2] = 0
			}
			b9++
			numeroJogadas++
			verifica(valor)
		}
	}
	
}
function verifica(valor) {
	if (valor == 0) {
		document.getElementById("vez").innerHTML = " Vez do jogador 1"
	}
	else {
		document.getElementById("vez").innerHTML = " Vez do jogador 2"
	}
	if ((mat[0][0] == mat[0][1]) && (mat[0][0] == mat[0][2])) { //  1/2/3
		if (mat[0][0] != undefined) {
			if (mat[0][0] == 0) {
				document.getElementById("vencedor").innerHTML = ("Jogador 2 ganhou")
				j2 = Number(localStorage.getItem("doisJogadoresJogador2")) + Number(1);
				localStorage.setItem("doisJogadoresJogador2", j2)
			}
			else {
				document.getElementById("vencedor").innerHTML = ("Jogador 1 ganhou")
				j1 = Number(localStorage.getItem("doisJogadoresJogador1")) + Number(1);
				localStorage.setItem("doisJogadoresJogador1", j1)
			}
			continua = 1
		}
	}


	else if ((mat[1][0] == mat[1][1]) && (mat[1][0] == mat[1][2])) { // 4/5/6
		if (mat[1][0] != undefined) {
			if (mat[1][0] == 0) {
				document.getElementById("vencedor").innerHTML = ("Jogador 2 ganhou")
				j2 = Number(localStorage.getItem("doisJogadoresJogador2")) + Number(1);
				localStorage.setItem("doisJogadoresJogador2", j2)
			}
			else {
				document.getElementById("vencedor").innerHTML = ("Jogador 1 ganhou")
				j1 = Number(localStorage.getItem("doisJogadoresJogador1")) + Number(1);
				localStorage.setItem("doisJogadoresJogador1", j1)
			}
			continua = 1
		}
	}


	else if ((mat[2][0] == mat[2][1]) && (mat[2][0] == mat[2][2])) { // 7/8/9
		if (mat[2][0] != undefined) {
			if (mat[2][0] == 0) {
				document.getElementById("vencedor").innerHTML = ("Jogador 2 ganhou")
				j2 = Number(localStorage.getItem("doisJogadoresJogador2")) + Number(1);
				localStorage.setItem("doisJogadoresJogador2", j2)
			}
			else {
				document.getElementById("vencedor").innerHTML = ("Jogador 1 ganhou")
				j1 = Number(localStorage.getItem("doisJogadoresJogador1")) + Number(1);
				localStorage.setItem("doisJogadoresJogador1", j1)
			}
			continua = 1
		}
	}



	/////////////////////
	else if ((mat[0][0] == mat[1][0]) && (mat[0][0] == mat[2][0])) {// 1/4/7
		if (mat[0][0] != undefined) {
			if (mat[0][0] == 0) {
				document.getElementById("vencedor").innerHTML = ("Jogador 2 ganhou")
				j2 = Number(localStorage.getItem("doisJogadoresJogador2")) + Number(1);
				localStorage.setItem("doisJogadoresJogador2", j2)
			}
			else {
				document.getElementById("vencedor").innerHTML = ("Jogador 1 ganhou")
				j1 = Number(localStorage.getItem("doisJogadoresJogador1")) + Number(1);
				localStorage.setItem("doisJogadoresJogador1", j1)
			}
			continua = 1
		}
	}


	else if ((mat[0][1] == mat[1][1]) && (mat[0][1] == mat[2][1])) {// 2/5/8
		if (mat[0][1] != undefined) {
			if (mat[0][1] == 0) {
				document.getElementById("vencedor").innerHTML = ("Jogador 2 ganhou")
				j2 = Number(localStorage.getItem("doisJogadoresJogador2")) + Number(1);
				localStorage.setItem("doisJogadoresJogador2", j2)
			}
			else {
				document.getElementById("vencedor").innerHTML = ("Jogador 1 ganhou")
				j1 = Number(localStorage.getItem("doisJogadoresJogador1")) + Number(1);
				localStorage.setItem("doisJogadoresJogador1", j1)
			}
			continua = 1
		}
	}


	else if ((mat[0][2] == mat[1][2]) && (mat[0][2] == mat[2][2])) { //3/6/9
		if (mat[0][2] != undefined) {
			if (mat[0][2] == 0) {
				document.getElementById("vencedor").innerHTML = ("Jogador 2 ganhou")
				j2 = Number(localStorage.getItem("doisJogadoresJogador2")) + Number(1);
				localStorage.setItem("doisJogadoresJogador2", j2)
			}
			else {
				document.getElementById("vencedor").innerHTML = ("Jogador 1 ganhou")
				j1 = Number(localStorage.getItem("doisJogadoresJogador1")) + Number(1);
				localStorage.setItem("doisJogadoresJogador1", j1)
			}
			continua = 1
		}
	}


	//////////////////////////////
	else if ((mat[0][0] == mat[1][1]) && (mat[0][0] == mat[2][2])) {  // 1/5/9
		if (mat[0][0] != undefined) {
			if (mat[0][0] == 0) {
				document.getElementById("vencedor").innerHTML = ("Jogador 2 ganhou")
				j2 = Number(localStorage.getItem("doisJogadoresJogador2")) + Number(1);
				localStorage.setItem("doisJogadoresJogador2", j2)
			}
			else {
				document.getElementById("vencedor").innerHTML = ("Jogador 1 ganhou")
				j1 = Number(localStorage.getItem("doisJogadoresJogador1")) + Number(1);
				localStorage.setItem("doisJogadoresJogador1", j1)
			}
			continua = 1
		}
	}


	else if ((mat[0][2] == mat[1][1]) && (mat[0][2] == mat[2][0])) { // 3/5/7
		if (mat[0][2] != undefined) {
			if (mat[0][2] == 0) {
				document.getElementById("vencedor").innerHTML = ("Jogador 2 ganhou")
				j2 = Number(localStorage.getItem("doisJogadoresJogador2")) + Number(1);
				localStorage.setItem("doisJogadoresJogador2", j2)
			}
			else {
				document.getElementById("vencedor").innerHTML = ("Jogador 1 ganhou")
				j1 = Number(localStorage.getItem("doisJogadoresJogador1")) + Number(1);
				localStorage.setItem("doisJogadoresJogador1", j1)
			}
			continua = 1
		}
	}
	if (continua == 1) {
		document.getElementById("vez").id = "invisivel"
	}
	console.log(numeroJogadas)
	if ((numeroJogadas == 9) && (continua != 1)) {
		document.getElementById("vencedor").innerHTML = ("Velha")
		document.getElementById("vez").id = "invisivel"
	}

}

function zerar(link) {
	localStorage.removeItem("doisJogadoresJogador1")
	localStorage.removeItem("doisJogadoresJogador2")
	window.location.href = link
}

function verPlacar() {
	document.getElementById("saidaDoisJogadoresJogador1").innerHTML = localStorage.getItem("doisJogadoresJogador1")
	document.getElementById("saidaDoisJogadoresJogador2").innerHTML = localStorage.getItem("doisJogadoresJogador2")
	document.getElementById("invisivel").id = "visivel"

}

function resetar(link) {
	var valor = 0;
	var b1 = 0;
	var b2 = 0;
	var b3 = 0;
	var b4 = 0;
	var b5 = 0;
	var b6 = 0;
	var b7 = 0;
	var b8 = 0;
	var b9 = 0;
	var mat = [];
	var continua = 0
	var numeroJogadas = 1;
	window.location.href = link
}

function mudarBotao() {
	if (numeroJogadas == 0) {
		if (mudar == 0) {
			document.getElementById("b1").className = ("quadrado");
			document.getElementById("b2").className = ("quadrado");
			document.getElementById("b3").className = ("quadrado");
			document.getElementById("b4").className = ("quadrado");
			document.getElementById("b5").className = ("quadrado");
			document.getElementById("b6").className = ("quadrado");
			document.getElementById("b7").className = ("quadrado");
			document.getElementById("b8").className = ("quadrado");
			document.getElementById("b9").className = ("quadrado");
			mudar = 1
		}
		else if (mudar == 1) {
			document.getElementById("b1").className = ("redondo");
			document.getElementById("b2").className = ("redondo");
			document.getElementById("b3").className = ("redondo");
			document.getElementById("b4").className = ("redondo");
			document.getElementById("b5").className = ("redondo");
			document.getElementById("b6").className = ("redondo");
			document.getElementById("b7").className = ("redondo");
			document.getElementById("b8").className = ("redondo");
			document.getElementById("b9").className = ("redondo");
			mudar = 0
		}
	}
	else {
		alert("reinicie o jogo para poder mudar o estilo")
	}
}

function voltar(link){
    window.location.href=link;
}