let addFunction = function(){
    let text = document.getElementById("input").value;
    let liNode = document.createElement("li");
    let textNode = document.createTextNode(text);
    liNode.appendChild(textNode);





    document.getElementById("list").appendChild(liNode);
    document.getElementById("input").value = "";
    alert ("This addFunction function works!");
};

console.log("Hello! your html and scripts are linked!");

document.getElementById("add").addEventListener("click", addFunction);

