const messages1 = document.getElementById("messages1");
const textbox1 = document.getElementById("textbox1");
const button1 = document.getElementById("button1");


button1.addEventListener("click", function(){
    const newMessage1 = document.createElement("li");
    newMessage1.innerHTML = textbox1.value;
    messages1.appendChild(newMessage1);
    textbox.value = "";
});

const messages2 = document.getElementById("messages2");
const textbox2 = document.getElementById("textbox2");
const button2 = document.getElementById("button2");


button2.addEventListener("click", function(){
    const newMessage2 = document.createElement("li");
    newMessage2.innerHTML = textbox2.value;
    messages2.appendChild(newMessage2);
    textbox.value = "";
});