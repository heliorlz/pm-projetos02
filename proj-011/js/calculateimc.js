function showResult() {

    document.querySelector(".div-result").classList.remove("hidden")
    document.querySelector(".div-btn").classList.add("hidden")

}

const btn = document.querySelector(".btn-imc")
btn.onclick = showResult

function showBtnImc() {
    document.querySelector(".div-result").classList.add("hidden")
    document.querySelector(".div-btn").classList.remove("hidden")

}

const result = document.querySelector(".back")
result.onclick = showBtnImc