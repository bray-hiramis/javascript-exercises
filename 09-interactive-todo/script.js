// DOM Manipulation

const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskCount = document.getElementById("task-count");
const taskList = document.getElementById("task-list");

let totalTasks = 0;

function getTask() {

   if (taskInput.value.trim() === "") {
      return;
   }

   const liTask = document.createElement("li");
   const deleteBtn = document.createElement("button");
   const deleteIcon = document.createElement("i");
   liTask.setAttribute("class", "task");
   deleteBtn.setAttribute("class", "delete-btn");
   deleteIcon.classList.add("fa-solid", "fa-trash-can")

   deleteBtn.addEventListener("click", () => deleteTask(liTask));

   liTask.append(taskInput.value);
   deleteBtn.appendChild(deleteIcon);
   liTask.appendChild(deleteBtn);
   taskList.append(liTask);
   taskInput.value = "";
   totalTasks++;
   taskCount.textContent = totalTasks;

}

function deleteTask(task) {
   task.remove();
   totalTasks--;
   taskCount.textContent = totalTasks;
}

addTaskBtn.addEventListener("click", function() {
   getTask();
});

document.addEventListener("keydown", function(e) {
   if (e.key === "Enter") {
      getTask();
   }
})