let addFunction = function(){
    let text = document.getElementById("input").value;
    let liNode = document.createElement("li");
    let textNode = document.createTextNode(text);
    liNode.appendChild(textNode);
    document.getElementById("list").appendChild(liNode);
    document.getElementById("input").value = "";
    
//create a delete button option as the li item is created//
    let deleteBtnNode = document.createElement("button");
    deleteBtnNode.innerHTML = "Delete";
    liNode.appendChild(deleteBtnNode);

    alert ("This addFunction function works!");
};

let deleteFunction = function(){
    let deleteBtn = 
    document.getElementsByTagName("li")
}

console.log("Hello! your html and scripts are linked!");

document.getElementById("add").addEventListener("click", addFunction);

