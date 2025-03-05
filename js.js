/**  Sendo assim, a sua tarefa de hoje é reescrever o código abaixo 
 *   de maneira que ele imprima as informações de maneira correta, 
 *   que faça sentido e sem erros:
 * 
 *   Estou usando o "===" que compara se os valores são iguais e se são do mesmo tipo.
 * 
 */

//

function compararNumeros() {
    console.log("Função Comparar Numeros ativo");
    
    //
    let num1 = document.getElementById("numero_1").value;
    let num2 = document.getElementById("numero_2_string").value;
    console.log("Num 1: " + num1 + ", Num2: " + num2);

    if (num1 === '' || num2 === '') {
        alert("Adicione os valores!!");

    } else if (isNaN(num1) || isNaN(num2)) {
        alert("Adicione somente números");
        
    } else {

        // Converte o número para número float
        num1 = parseFloat(num1);
    
        if (num1 === num2) {
            console.log('As variáveis num1 e num2 tem o mesmo valor, e o mesmo tipo')
            document.getElementById("resultado").innerHTML = `As variáveis ${num1} e ${num2}, tem o mesmo valor, e o mesmo tipo`;
        } else if (num1 == num2) {
            console.log('As variáveis num1 e num2, possuem os mesmos valores mais tipos diferentes.')
            document.getElementById("resultado").innerHTML = `As variáveis ${num1} e ${num2}, possuem os mesmos valores mais tipos diferentes.`;
        } else {
            console.log("As variáveis num1 e num2, não possuem o mesmo valor.")
            document.getElementById("resultado").innerHTML = `As variáveis ${num1} e ${num2}, não possuem o mesmo valor e são tipos diferentes.`;
        }
    }
}