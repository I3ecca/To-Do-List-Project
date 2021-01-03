let addFunction = function(event){
    console.log(event);
    let text = document.getElementById("input").value;
    let liNode = document.createElement("li");
    let textNode = document.createTextNode(text);
    liNode.appendChild(textNode);
    document.getElementById("list").appendChild(liNode);
    document.getElementById("input").value = "";
    
//create a delete button option as the li item is created//
    let deleteBtnNode = document.createElement("button");
    deleteBtnNode.innerHTML = "Delete";
    deleteBtnNode.addEventListener("click", deleteFunction);
    liNode.appendChild(deleteBtnNode);
//create a complete button option as il item is created//
    let completeBtnNode = document.createElement("button");
    completeBtnNode.innerHTML = "Complete";
    liNode.appendChild(completeBtnNode);

    alert ("This addFunction function works!");
};

let deleteFunction = function(event){
    console.log(event.target.parentNode);
    event.target.parentNode.remove();
    //console.log(this.parentNode);
   // console.log(this);
    //let deleteBtn = document.getElementsByTagName("button").this;
    //deleteBtn.remove();
    
}

//let completeFunction = function(){
    //console.log("Task Completed");
  //  document.getElementsByTagName.button.this.parentNode.style.textDecorationLine = "line-through";
//}


console.log("Hello! your html and scripts are linked!");

document.getElementById("add").addEventListener("click", addFunction);

