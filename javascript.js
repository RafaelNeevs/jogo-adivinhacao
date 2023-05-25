numAleatorio = Math.floor(Math.random() * 100) + 1;
parseInt;pontos = 100;
function numeroDigitado(){
	campoNumero = parseInt(document.getElementById("campoNumero").value);
	while(campoNumero!=numAleatorio){
		pontos -= 1;
		break;
	}
	if(campoNumero==numAleatorio){
		alert('O número digitado esta correto! Você ganhou '+pontos+' pontos!')
	}
	else if(campoNumero>numAleatorio){
		var labelResult = document.getElementById ("labelResultado");
		labelResult.innerHTML = "O número que foi digitado é maior do que o número pensado, tente um número menor !";
	}
	else if(campoNumero<numAleatorio){
		var labelResult = document.getElementById ("labelResultado");
		labelResult.innerHTML = "O número que foi digitado é menor do que o número pensado, tente um número maior !";
	}
}

function novojogo(){
	document.getElementById('campoNumero').value=''; 
	var labelResult = document.getElementById ("labelResultado");
	labelResult.innerHTML = ""; 
	numAleatorio = Math.floor(Math.random() * 100) + 1;
	parseInt;pontos = 100;
}