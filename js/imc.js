var btnCalcular = document.querySelector("#btn-calcular-imc");

btnCalcular.addEventListener("click", function(event){
	event.preventDefault();

	var altura = document.querySelector("#altura").value;
	var peso = document.querySelector("#peso").value;
	var spanResultado = document.querySelector("#resultado-imc");

	var resultadoIMC = calculaIMC(altura, peso);
	var classificacaoIMC = classificaIMC(resultadoIMC);

	spanResultado.textContent = resultadoIMC.toFixed(2) + "\n\n" + classificacaoIMC;
});

function calculaIMC(altura, peso){
	var resultadoIMC = peso / (altura/100 * altura/100);
	return resultadoIMC;
}

function classificaIMC(imc){
	var classificacao = "_ _ , _";

	if(imc < 16)                  classificacao = "Magreza grave";
	if(imc >= 16   && imc < 17)   classificacao = "Magreza moderada";
	if(imc >= 17   && imc < 18.5) classificacao = "Magreza leve";
	if(imc >= 18.5 && imc < 25)   classificacao = "Saudável";
	if(imc >= 25   && imc < 30)   classificacao = "Sobrepeso";
	if(imc >= 30   && imc < 35)   classificacao = "Obesidade grau I";
	if(imc >= 35   && imc < 40)   classificacao = "Obesidade grau II (severa)";
	if(imc >= 40)   classificacao = "Obesidade grau III (mórbida)";
	
	return classificacao;
}