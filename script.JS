var removeCartItemButtons = document.getElementsByClassName('button2')
console.log(removeCartItemButtons);
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function (event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('CartContainer')[0]
    var cartRows = cartItemContainer.getElementsByClassName('Cart-Items')
    var total = 0

    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('amount')[0]
        var quantityElement = cartRow.getElementsByClassName('numberPlace')[0]
        var price = priceElement.innerText.replace('DT','')
        var quantity = quantityElement.innerText
        total+=price*quantity
    }
    document.getElementsByClassName('total-amount')[0].innerText=total+'DT'

  
}
let counterDisplayElem = document.querySelector('.numberPlace');
let counterMinusElem = document.querySelector('.minus');
let counterPlusElem = document.querySelector('.plus');

let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};

