let list = document.getElementById("list");
let button = document.getElementById("button");
let input = document.getElementById('input');
let i = document.getElementById('item')

let check = "fa fa-check-circle-o";
let unCheck = "fa fa-circle-o"
let line = "linethrough"

let LIST = [];
let id = 0;

function atToDoList(atToDo, id, done, trash) {

    if (trash) {
        return;
}

    let DONE = done ? check : unCheck;
    let LINE = done ? line : "";

    const item = `
<li class="item" id="item">
<i class='${DONE}' aria-hidden="true" id="${id}"></i>
<p class="info${LINE}" id="info">${atToDo}</p>
<i class="fa fa-trash-o" aria-hidden="true" id="${id}"></i>
</li>
`
    const position ="beforeend";

    list.insertAdjacentHTML(position, item);
}

document.addEventListener('keyup', function (even) {

    if (event.keyCode == 13) {
        const toDo = input.value;

        if (toDo) {
            atToDoList(toDo, id, false, false);

            LIST.push({
                name: toDo,
                id: id,
                done: false,
                trash: false 
            });
            id++;  
        }
     input.value = "";
    }   
});







// function completeToDo(element) {
//     element.classList.toggle(check);
//     element.classList.toggle(unCheck);
//     element.perentNode.querySelector('.text').classList.toggle(line);

//     LIST[element.id].done = LIST[element.id].done ? false : true;
// }



// function removeToDo(element) {
//     element.parentNode.parentNode.removeChild(element.parentNode)

//     LIST[element.id].trash = true ;
// }


// list.addEventListener("click", function(event) {
//     const element = event.target;

//      const elementJob = element.attributes.job.value;

//     if (elementJob == "complete") {
//         completeToDo(element);
//     } else if (elementJob == "remove") {
//         removeToDo(element);
//     } 
// });



