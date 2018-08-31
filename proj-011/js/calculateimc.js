// as funções show Result e showBtnImc servem para adicionar ou remover a class .hidden, para alternar a exibição,
// ora botão para calculo imc, ora resultado

// Harlley utiliza a função $(elemento) {return document.querySelector(elemento)}, assim podemos substituir toda a expressão
// document.querySelector() por $()

// variaveis dentro de funções são locais, não podendo ser utilizadas fora de sua função

function showResult() {
    document.querySelector(".div-result").classList.remove("hidden")
    document.querySelector(".div-btn").classList.add("hidden")
}

function showBtnImc() {
    document.querySelector(".div-result").classList.add("hidden")
    document.querySelector(".div-btn").classList.remove("hidden")
}

// funções que, através do evento click do botão, realiza certas tarefas
// Harlley ensinou refatorar o cédigo, deixar ele mais clean,como por exemplo, trocar a function que é anonima por => (arrow)
document.querySelector('.btn-imc').addEventListener('click', function(){ 
    let height = document.querySelector('#height')
    let weight = document.querySelector('#weight')
    
    //  condicional para validar os inputs 
    if (height.value == "") {
        alert('Digite sua altura, respeitando o formato convencional (ex: 1,70)!')
        height.focus()
    }
    else if (weight.value == "") {
        alert('Digite seu peso em kg!')
        weight.focus()
    }
    else {
        // foi necessário colocar as funções dentro do if, demorei a entender que era preciso seguir a ordem corretamente
        calculateResult(height, weight)
        showResult()   
    }
})

document.querySelector('.back').addEventListener('click', function(){
    showBtnImc()
})


// função que mostra o resultado e a descrição, chamada através do click do .btn-imc 
function calculateResult(height, weight) {
    // const imc calculamos, de fato, o imc do usuário, e retornamos na interface através do innerHTML 
    const imc = calculateIMC(height.value, weight.value)
    // através do toLocaleString, para formatarmos a saída da melhor forma 
    document.querySelector('.imc-value').innerHTML = imc.toLocaleString('pt-BR', {maximumFractionDigits: 2})
    document.querySelector('.imc-desc').innerHTML = descriptionIMC(imc)
    console.log(descriptionIMC(imc))
}

// função que pega os parametros para calcular o imc 
function calculateIMC(altura, peso) {
    return peso / (altura * altura)
}

function descriptionIMC(imc) {
    // devemos utilizar os parenteses juntando as expressoes
    console.log(imc)
    if (imc < 16) {
        return 'Magreza Grave'
    } 
    else if (imc >= 16 && imc < 17) {
        return 'Magreza Moderada'
    } 
    else if (imc >= 17 && imc < 18.5) {
        return 'Magreza Leve'
    } 
    else if (imc >= 18.5 && imc < 25) {
        return 'Saudável'
    } 
    else if (imc >= 25 && imc < 30) {
        return 'Sobrepeso'
    } 
    else if (imc >= 30 && imc < 35) {
        return 'Obesidade'
    } 
    else if (imc >= 35 && imc < 40) {
        return 'Obesidade Severa'
    } 
    // o ultimo else só funciona se não dermos condicao, pois da erro
    else {
        return 'Obesidade Mórbida'
    }
}


