let calculadoraEs = document.getElementById("calculadora-es");
let calculadoraPmv = document.getElementById("calculadora-pmv");


// referenciar todos os campos de entrada

let inSalario = document.getElementById("inSalario");
let inImu = document.getElementById("inImu");
let inFaltas = document.getElementById("inFaltas");

let inSalarioPmv = document.getElementById("inSalarioPmv");
let inImuPmv = document.getElementById("inImuPmv");
let inIcdPmv = document.getElementById("inIcdPmv");
let inFvaPmv = document.getElementById("inFvaPmv");


function calcularBonus(event) {
    // pegar valor dos input
    let salario = inSalario.value;
    let imu = (inImu.value / 100);
    let faltasPercentual = (inFaltas.value * 10) / 100;



    // calcular o valor
    let bonusCalculado = (salario * 1.5 * imu);
    let bonusComFalta = bonusCalculado - bonusCalculado * faltasPercentual;

    let dinheiro1 = bonusComFalta.toLocaleString("pt-br", { style: "currency", currency: "BRL" });

    // referenciar o resultado
    let outResultado = document.getElementById("outResultado");

    // modificar resultado de saida


    if (salario == 0 || imu == 0) {
        alert("Preencha todos os campos");
        outResultado.textContent = "";
    } else {
        outResultado.textContent = "O Valor do bônus à receber é de: " + dinheiro1;
    }

    if (event.type === 'touchstart') event.preventDefault();

    console.log(bonusComFalta)

}

function apagarResultado() {
    outResultado.textContent = " "
    outResultadoPmv.textContent = " "
    limparCampos();


}

function limparCampos() {
    let campos = document.getElementsByTagName("input")
    for (campo of campos) {
        campo.value = '';
    }

}


function calcularBonusPmv(event) {
    // pegar valor dos input
    let salarioPmv = inSalarioPmv.value;
    let imuPmv = (inImuPmv.value / 100);
    let icdPmv = inIcdPmv.value;
    let fvaPmv = (inFvaPmv.value / 100);
    let bonusPmvCalculado = (salarioPmv * 1.5 * imuPmv * icdPmv * fvaPmv)


    if (salarioPmv == 0 || imuPmv == 0) {

        alert("Preencha todos os campos");
        outResultadoPmv.innerHTML = `Não foi possível calcular o seu bônus, Preencha todos os campos!`
    }

    if (fvaPmv <= 0.3) {
        let bonusMinimo = (salarioPmv * 1.5 * imuPmv * icdPmv * 0.3);
        let bonusFormatado = bonusMinimo.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
        let outResultadoPmv = document.getElementById("outResultadoPmv")
        outResultadoPmv.innerHTML = `O valor do bônus é de ${bonusFormatado}`;
    } else {
        let bonusFormatado2 = bonusPmvCalculado.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
        outResultadoPmv.innerHTML = `O valor do bônus é de ${bonusFormatado2}`;

    }

    if (event.type === 'touchstart') event.preventDefault();





}



// Funcionalidade para alternar calculadoras
let btnMudar = document.getElementById("btnMudar");
btnMudar.addEventListener("click", changeCalculator);
btnMudar.addEventListener("touchstart", changeCalculator);

calculadoraEs.classList.add("active");

function changeCalculator(event) {
    if (event.type === "touchstart") event.preventDefault();
    calculadoraPmv.classList.toggle("active");
    calculadoraEs.classList.toggle("active");
};


// Esta parte está funcionando, porém pesquisar uma forma melhor de fazer essa troca.
function abrePmv() {
    calculadoraPmv.classList.add("active");
    calculadoraEs.classList.remove("active");
}

function abreES() {
    calculadoraEs.classList.add("active");
    calculadoraPmv.classList.remove("active");

}

// referenciar os botões
let calcular = document.getElementById("btCalcular");
calcular.addEventListener("click", calcularBonus);
calcular.addEventListener("touchstart", calcularBonus);

let calcularPmv = document.getElementById("btCalcularPmv");
calcularPmv.addEventListener("click", calcularBonusPmv);
calcularPmv.addEventListener("touchstart", calcularBonusPmv);




let apagar = document.getElementsByClassName("btnApagar")
apagar[0].addEventListener("click", apagarResultado);
apagar[0].addEventListener("touchstart", apagarResultado);

apagar[1].addEventListener("click", apagarResultado);
apagar[1].addEventListener("touchstart", apagarResultado);
















