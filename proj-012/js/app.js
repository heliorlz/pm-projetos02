
// changing the expression document.querySelector(element) by $(element) only
// making more agile 
// function $(element) {
//     return document.querySelector(element)
// }






// change the type of action button
document.querySelector('.btn-start').addEventListener('click', function() {
    document.querySelector('.btn-start').classList.toggle('dolar')
    document.querySelector('.btn-start').classList.toggle('real')
})