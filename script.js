let addFunction = function(event) {
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
    completeBtnNode.addEventListener("click", completeUndoFunction);
    //completeBtnNode.addEventListener("click", undoFunction);

    liNode.appendChild(completeBtnNode);

};

let deleteFunction = function(event) {
    event.target.parentNode.remove();

}
let completeUndoFunction = function(event) {
    if (event.target.innerHTML === "Complete") {
        event.target.parentNode.style.textDecorationLine = "line-through";
        let undoBtn = event.target;
        undoBtn.innerHTML = "Undo";
        undoBtn.addEventListener("click", completeUndoFunction);
        return;
    };

    if (event.target.innerHTML === "Undo") {
        event.target.parentNode.style.textDecorationLine = "none";
        let completeBtn = event.target;
        event.target.innerHTML = "Complete";
        completeBtn.addEventListener("click", completeUndoFunction);
        return;

    }



};





document.getElementById("add").addEventListener("click", addFunction);

