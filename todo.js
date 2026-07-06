const btn = document.getElementById("btn");
const task = document.getElementById("in"); 
const container = document.querySelector(".container");
btn.addEventListener("click", addTask);

function addTask(){
    const taskText = task.value.trim();
    if (taskText == "") return;

    const todoItem = document.createElement("div");
    todoItem.className = "todo-item";

    const label = document.createElement("label");
    label.className = "checkbox-content";

    const checkbox = document.createElement("input");
    checkbox.className = "check";
    checkbox.type = "checkbox";

    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.className = "list";
    li.textContent = taskText;

    ul.appendChild(li);
    label.appendChild(checkbox);
    label.appendChild(ul);

    const deletebtn = document.createElement("button");
    deletebtn.className = "delete-btn";
    deletebtn.innerHTML = "&times;";

    deletebtn.addEventListener("click", function () {
        todoItem.remove();
    });
    
    todoItem.appendChild(label);
    todoItem.appendChild(deletebtn)
    container.appendChild(todoItem);

    task.value = "";
}