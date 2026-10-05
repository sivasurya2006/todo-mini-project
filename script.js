var taskInput = document.getElementById("taskInput");
var addBtn = document.getElementById("addBtn");
var warning = document.getElementById("warning");
var count = document.getElementById("count");
var taskList = document.getElementById("taskList");

function updateCount() {
    count.textContent = "Total tasks: " + taskList.children.length;
}

function addTask() {
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        warning.textContent = "Please enter the task!";
        return;
    }

    var newele = document.createElement("li");
    newele.innerHTML = '<span>' + taskText + '</span>' +
                       '<button class="done">Done</button>' +
                       '<button class="delete">Delete</button>';

    taskList.appendChild(newele);
    taskInput.value = "";
    warning.textContent = "";
    updateCount();
    taskInput.focus();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

taskList.addEventListener("click", function (e) {
    if (e.target.matches(".delete")) {
        e.target.parentElement.remove();
        updateCount();
    } else if (e.target.matches(".done")) {
        e.target.parentElement.classList.toggle("completed");
    }
});
