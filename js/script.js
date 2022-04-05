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
    let dinheiro1 = bonusCalculado.toLocaleString("pt-br", { style: "currency", currency: "BRL" });

    // referenciar o resultado
    let outResultado = document.getElementById("outResultado");

    // modificar resultado de saida


    if (salario == 0 || imu == 0) {
        alert("Preencha todos os campos");
        outResultado.textContent = "";
    } else {
        outResultado.textContent = "O Valor do bônus à receber é de: " + dinheiro1;
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
    let dinheiro2 = bonusPmvCalculado.toLocaleString("pt-br", { style: "currency", currency: "BRL" });

    // referenciar o resultado PMV
    let outResultadoPmv = document.getElementById("outResultadoPmv")

    //modificar o resultado de saída PMV

    if (salarioPmv == 0 || imuPmv == 0) {

        alert("Preencha todos os campos");
        outResultadoPmv.textContent = " ";

    } else if (icdPmv == 0 || fvaPmv == 0) {
        alert("Preencha todos os campos");
        outResultadoPmv.textContent = " ";
    } else {
        outResultadoPmv.textContent = "O Valor do bônus à receber é de: " + dinheiro2;
    }


}




// referenciar os botões
let calcular = document.getElementById("btCalcular");
calcular.addEventListener("click", calcularBonus);
let calcularPmv = document.getElementById("btCalcularPmv");
calcularPmv.addEventListener("click", calcularBonusPmv);


let apagar = document.getElementById("btApagar");
apagar.addEventListener("click", apagarResultado);











