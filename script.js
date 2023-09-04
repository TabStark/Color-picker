// let hexcode = document.getElementById("hexcode").value;
// let textarea=document.getElementById("textareas")
// let notepad =document.getElementsByClassName("notepad")



// .addEventListener("input", colors);
// function colors(){
//     var colors = document.getElementById("colors").value;
//     textarea.style.backgroundColor=colors
//     notepad.style.backgroundColor=colors
//     hexcode.value=colors

// }

let textarea =document.getElementById("textareas")

document
.addEventListener("input", selectColor);
function selectColor() {
var selectedColor = document.getElementById("colors").value;
textarea.style.color = selectedColor;
document.getElementById("hexcode").value = selectedColor;


}

let button=document.getElementById("btn")
button.addEventListener("click", function(){
    localStorage.setItem("data", textarea.value)
    alert("Your Date is Saved")
})

let reset=document.getElementById("reset")
reset.addEventListener("click", function(){
    localStorage.clear("data")
    alert("Your Date is removed from storage")
})

function showList(){
textarea.innerHTML=localStorage.getItem("data");



}
showList()

// let x = function savedata(){
//     localStorage.setItem(data, textarea.innerHTML)
// }



