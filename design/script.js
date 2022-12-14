// const socket = io();

// socket.on("message", message => {
//     console.log(message);
// })

// main resize on arrival of sidebar
const sideBar = document.getElementById("side-bar")
const main = document.getElementById("main")

function wideMain(){
    sideBar.classList.remove("hidden");
    main.classList.remove("wide");
}

// multi line msg iput
var msg = "";
const msgInput = document.getElementById("msgContainer");
document.getElementById("concept").addEventListener("keypress", submitOnEnter);

// 
document.getElementById("concept").addEventListener("input", () => {
    msgInput.setAttribute("data-value",event.target.value + ".");
});

function submitOnEnter(event){
    if(event.which === 13){
        if(!event.shiftKey){
            msg = event.target.value.trim();
            event.target.value = "";
            event.target.form.dispatchEvent(new Event("submit", {cancelable: true}));
            event.preventDefault(); // Prevents the addition of a new line in the text field (not needed in a lot of cases)
        }
    }
}

document.getElementById("chat-form").addEventListener("submit", (event) => {
    event.preventDefault();
    if(msg != ""){
        console.log(msg);
    }
});