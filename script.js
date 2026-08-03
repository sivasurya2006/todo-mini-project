
var taskInput = document.getElementById("taskInput");
var addBtn = document.getElementById("addBtn");
var warning = document.getElementById("warning");
var count = document.getElementById("count");
var taskList = document.getElementById("taskList");

function updateCount(){
    count.textContent="Total task:" + taskList.children.length;
}
addBtn.addEventListener("click",function(){
    if(taskInput.value === ""){
        warning.textContent="please Enter the Task"
        return;
    }
    var newele=document.createElement("li")
    newele.innerHTML=taskInput.value +'<button class="done">Done</button>' + '<button class="delete">Delete</button>' 

    taskList.appendChild(newele)
    taskInput.value="";
    warning.textContent="";
    updateCount();
});
taskList.addEventListener("click",function(e){
    if(e.target.matches(".delete")){
        e.target.parentElement.remove();
        updateCount();
    }
    else if(e.target.matches(".done")){
        e.target.parentElement.style.textDecoration = "line-through"
        updateCount();
    }
})


