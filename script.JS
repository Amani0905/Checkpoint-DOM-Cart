var removeCartItemButtons = document.getElementsByClassName('button2')
console.log(removeCartItemButtons);
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function (event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        Total()
    })
}
let counterDisplayElem = document.querySelectorAll('.numberPlace');
let counterMinusElem = document.querySelectorAll('.minus');
let counterPlusElem = document.querySelectorAll('.plus');


for (let i = 0; i < counterPlusElem.length; i++)
counterPlusElem[i].addEventListener("click",()=>{
    counterPlusElem[i].previousElementSibling.innerHTML++;
    Total();
}) ;

for (let u=0; u < counterMinusElem.length;u++)
counterMinusElem[u].addEventListener("click",function(){
    if(counterMinusElem[u].nextElementSibling.innerHTML>0)
        counterMinusElem[u].nextElementSibling.innerHTML--;
        Total();
    });

    var tot=document.getElementById('tot')
function Total (){
    let z=0
    var x = document.querySelectorAll(".amount");
    var y = document.querySelectorAll(".numberPlace");
    for (let i=0; i<x.length;i++){
     z = z+ x[i].innerHTML * y[i].innerHTML
    console.log( z )
    tot.innerHTML=z + "" +"DT"
}}

// Wish Heart//

const nodeList=document.querySelectorAll(".far")
for (let i = 0; i < nodeList.length; i++)
nodeList[i].addEventListener('click',()=>{
    nodeList[i].classList.toggle('red')
    })
