let checkBox = document.querySelector('#toggle');
let Monthly = document.querySelectorAll('.price-monthly');
let Yearly = document.querySelectorAll('.price-annually');


checkBox.addEventListener('change', function(){

    if(checkBox.checked){
        Yearly.forEach(price => price.style.display = "none");
        console.log('checked');
        Monthly.forEach(price => price.style.display = "flex");
        console.log('checked');
    } else {
        console.log('unchecked');
        Yearly.forEach(price => price.style.display = "flex");
        console.log('checked');
        Monthly.forEach(price => price.style.display = "none");
        console.log('checked');
    }

})