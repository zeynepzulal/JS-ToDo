let addToDoButton = document.getElementById("addToDo");
let inputField = document.getElementById("inputField");
let toDoContainer = document.getElementById("toDoContainer");

//addEventListener() parantezin icindeki birinci event ,ikinci fonksiyon
//asagidaki iki fonksiyon tanimlama yolu da dogru , sonuc ayni olur zaten



/*
//1.yol
addToDoButton.addEventListener("click",addButton)
function addButton(){
}
*/


//2.yol
addToDoButton.addEventListener("click", function () {

    console.log("Tiklandi");
    let paragraph = document.createElement("p"); // p yazdik yani element adi yazilan bir parantez.
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = inputField.value;

    toDoContainer.appendChild(paragraph);  // div in içine ekler.
    inputField.value =""; // yazdiktan sonra input un içini temizlemek için yazdik.

    paragraph.addEventListener("click", function () {
        paragraph.style.textDecoration = "line-through"; //js de inline css böyle verilir, üzerine tiklaninca üstünü çizme fonksiyonunu ekledik.
    })

    paragraph.addEventListener("dblclick", function () {
        toDoContainer.removeChild(paragraph);
    })

    // enter a basma fonksiyonu eklemeyi dene classchatten attilar???



})