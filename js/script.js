// referenciar todos os campos de entrada
let inSalario = document.getElementById("inSalario");
let inImu = document.getElementById("inImu");

let inSalarioPmv = document.getElementById("inSalarioPmv");
let inImuPmv = document.getElementById("inImuPmv");
let inIcdPmv = document.getElementById("inIcdPmv");
let inFvaPmv = document.getElementById("inFvaPmv");


function calcularBonus() {
    // pegar valor dos input
    let salario = inSalario.value;
    let imu = (inImu.value / 100);
    // calcular o valor
    let bonusCalculado = (salario * 1.5 * imu);

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


function calcularBonusPmv() {
    // pegar valor dos input
    let salarioPmv = inSalarioPmv.value;
    let imuPmv = (inImuPmv.value / 100);
    let icdPmv = inIcdPmv.value;
    let fvaPmv = (inFvaPmv.value / 100);

    // calcular bônus
    //salário x 1,5 x IMU x ICD x FVA
    let bonusPmvCalculado = (salarioPmv * 1.5 * imuPmv * icdPmv * fvaPmv)

    // referenciar o resultado PMV
    let outResultadoPmv = document.getElementById("outResultadoPmv")

    //modificar o resultado de saída PMV
    outResultadoPmv.textContent = "O Valor do bônus à receber é de: R$ " + bonusPmvCalculado.toFixed(2);
    if (salarioPmv == 0 || imu == 0) {

        alert("Preencha todos os campos");
        outResultadoPmv.textContent = " ";

    }

}




// referenciar os botões
let calcular = document.getElementById("btCalcular");
calcular.addEventListener("click", calcularBonus);
let calcularPmv = document.getElementById("btCalcularPmv");
calcularPmv.addEventListener("click", calcularBonusPmv);


let apagar = document.getElementById("btApagar");
apagar.addEventListener("click", apagarResultado);











