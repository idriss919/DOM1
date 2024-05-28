let cardbody = Array.from(document.querySelectorAll('.card-body'));
let plus = Array.from(document.getElementsByClassName('fas fa-plus-circle'));
let minus = Array.from(document.getElementsByClassName('fas fa-minus-circle'));
let quantity = document.querySelectorAll('.quantity');
let heart = document.querySelectorAll('.fas.fa-heart');
let supprime = document.querySelectorAll('fas fa-trash-alt');
//fonction plus
for (let i = 0; i < cardbody.length; i++) {
    plus[i].addEventListener('click', function() {
        quantity[i].innerText++})
    //fonction moin
    minus[i].addEventListener('click', function() {
        if ( quantity[i].innerText>0){
        quantity[i].innerText--
    }})
    
    //couleur coeur
    heart[i].addEventListener('click', function() {
        this.style.color = "red";
    
    })
    
    //supprimer le panier 
    function deleteElement() {
        const[i] = document.getElementById('fas fa-trash-alt');
        if (element) {
            element.remove();
            const numbers = [1, 2, 3, 4, 5];
            let sum = 0;
    
            numbers.forEach(number => {
                sum += number;
        }}

