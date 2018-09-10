
// changing the expression document.querySelector(element) by $(element) only
// making more agile 
function $(element) {
    return document.querySelector(element)
}






// functions to change the form of the action button
function btnStart() {
    $('.btn-start').classList.remove('hidden')
    $('.btn-calculate').classList.add('hidden')
    $('.btn-calculate').classList.add('hidden')
}