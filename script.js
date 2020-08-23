/* var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function() {
// button.addEventListener("mouseenter", function() {
button.addEventListener("mouseleave", function() {
    console.log("CLICK!!!");
})  */

// input.addEventListener("keypress", function (event) {
//     console.log(event);
// })

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    // li.appendChild(document.createTextNode("testing"));
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    // console.log(input.value);
    if (inputLength() > 0) {
        createListElement();
    }
}

// button.addEventListener("click", function () {
// })

function addListAfterKeypress(event) {

    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);