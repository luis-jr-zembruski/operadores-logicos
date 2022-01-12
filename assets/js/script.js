//Conferir se os numeros são iguais

//conferir se a soma dos números é maior que 10 ou menor que 20

//Retornar uma string "Os números num1 e num2 não/são iguais.
// Sua soma é soma, que é maior/menor que 10 e maior/menor que 20."
const num1 = Number(prompt("Digite o primeiro valor!"));
const num2 = Number(prompt("Digite o segundo valor!"));

function operadoresLogicos(num1, num2) {
  const isIquals = num1 === num2 ? "" : "não";
  const sum = num1 + num2;
  const moreThan = sum > 10 ? "maior" : "menor";
  const lessThan = sum < 20 ? "menor" : "maior";

  return `Os números ${num1} e ${num2} ${isIquals} são iguais. Sua soma é ${sum}, que é ${moreThan} que 10 e ${lessThan} que 20.`;
}

alert(operadoresLogicos(num1, num2));