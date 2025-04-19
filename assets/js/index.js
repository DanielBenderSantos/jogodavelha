let j1 = 0;
let j2 = 0;
let valor = 0;
let continua = 0;
let numeroJogadas = 0;
let mudar = 0;
let mat = Array.from({ length: 3 }, () => Array(3).fill(undefined));
let botoes = Array(9).fill(0);

function jogada(pos) {
	if (continua === 1 || botoes[pos] !== 0) return;

	const linha = Math.floor(pos / 3);
	const coluna = pos % 3;
	const id = `b${pos + 1}`;

	document.getElementById(id).id = valor === 0 ? "vermelho" : "azul";
	mat[linha][coluna] = valor;
	botoes[pos]++;
	numeroJogadas++;
	verifica(valor);
	valor = valor === 0 ? 1 : 0;
}

function verifica(valorAtual) {
	const vencedor = valorAtual === 0 ? "Jogador 1" : "Jogador 2";
	const key = valorAtual === 0 ? "doisJogadoresJogador1" : "doisJogadoresJogador2";

	const v = (a, b, c) =>
		mat[a[0]][a[1]] === mat[b[0]][b[1]] &&
		mat[a[0]][a[1]] === mat[c[0]][c[1]] &&
		mat[a[0]][a[1]] !== undefined;

	const combinacoes = [
		[[0, 0], [0, 1], [0, 2]], [[1, 0], [1, 1], [1, 2]], [[2, 0], [2, 1], [2, 2]], // Linhas
		[[0, 0], [1, 0], [2, 0]], [[0, 1], [1, 1], [2, 1]], [[0, 2], [1, 2], [2, 2]], // Colunas
		[[0, 0], [1, 1], [2, 2]], [[0, 2], [1, 1], [2, 0]]                          // Diagonais
	];

	for (const c of combinacoes) {
		if (v(...c)) {
			document.getElementById("vencedor").innerHTML = `${vencedor} ganhou`;
			const atual = Number(localStorage.getItem(key)) || 0;
			localStorage.setItem(key, atual + 1);
			continua = 1;
			document.getElementById("vez").id = "invisivel";
			return;
		}
	}

	if (numeroJogadas === 9 && continua !== 1) {
		document.getElementById("vencedor").innerHTML = "Velha";
		document.getElementById("vez").id = "invisivel";
		return;
	}

	document.getElementById("vez").innerHTML = `Vez do ${valor === 0 ? "jogador 2" : "jogador 1"}`;
}

function resetar(link) {
	window.location.href = link;
}

function zerar(link) {
	localStorage.removeItem("doisJogadoresJogador1");
	localStorage.removeItem("doisJogadoresJogador2");
	window.location.href = link;
}

function verPlacar() {
	document.getElementById("saidaDoisJogadoresJogador1").innerHTML = localStorage.getItem("doisJogadoresJogador1") || 0;
	document.getElementById("saidaDoisJogadoresJogador2").innerHTML = localStorage.getItem("doisJogadoresJogador2") || 0;
	document.getElementById("invisivel").id = "visivel";
}

function mudarBotao() {
	if (numeroJogadas !== 0) {
		alert("Reinicie o jogo para poder mudar o estilo");
		return;
	}

	const estilo = mudar === 0 ? "quadrado" : "redondo";
	for (let i = 1; i <= 9; i++) {
		document.getElementById(`b${i}`)?.classList?.replace("redondo", estilo);
		document.getElementById(`b${i}`)?.classList?.replace("quadrado", estilo);
	}
	mudar = mudar === 0 ? 1 : 0;
}

function voltar(link) {
	window.location.href = link;
}
