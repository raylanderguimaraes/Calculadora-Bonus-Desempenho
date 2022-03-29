// referenciar todos os campos de entrada
let inSalario = document.getElementById("inSalario");
let inImu = document.getElementById("inImu");



function calcularBonus() {
    // pegar valor dos input
    let salario = inSalario.value;
    let imu = inImu.value;
    // calcular o valor
    let bonusCalculado = (salario * 1.5) * (imu / 100);

    // referenciar o resultado
    let outResultado = document.getElementById("outResultado");

    // modificar resultado de saida
    outResultado.textContent = "O Valor do bônus à receber é de: R$ " + bonusCalculado.toFixed(2);

    if (salario == 0 || imu == 0) {
        alert("Preencha todos os campos");
        outResultado.textContent = "";
    }
}

function apagarResultado() {

    outResultado.textContent = " "


}

// referenciar o botão
let calcular = document.getElementById("btCalcular");
calcular.addEventListener("click", calcularBonus);

let apagar = document.getElementById("btApagar");
apagar.addEventListener("click", apagarResultado);







