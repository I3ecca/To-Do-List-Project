
console.log("Hello! your html and scripts are linked!");

document.getElementById("add").addEventListener("click", addFunction);

function addFunction(){
    let text = document.getElementById("input").value;
    console.log(text);
    let listItem = "<li>" + text + "</li>";
    console.log(listItem);
    console.log(typeof listItem);
    document.getElementById("list").appendChild(listItem);
    document.getElementById("input").value = "";
    alert ("This addFunction function works!");
};