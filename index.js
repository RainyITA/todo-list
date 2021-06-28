"use strict";
window.document.addEventListener("DOMContentLoaded", function () {
    var addTaskBtn = document.getElementById("addTaskBtn");
    var addTaskInput = document.getElementById("addTaskInput");
    var todoList = document.getElementById("todoList");
    // const tasks: string[] = [];
    if (addTaskBtn !== null) {
        addTaskBtn.addEventListener("click", addTask);
    }
    function addTask() {
        if (addTaskInput !== null) {
            var addTaskInputValue = addTaskInput.value;
            // tasks.push(addTaskInputValue);
            // console.log(tasks);
            renderList(addTaskInputValue);
        }
    }
    function createListItem(task) {
        var listItem = document.createElement("li");
        listItem.innerHTML = task;
        return listItem;
    }
    function renderList(task) {
        var listItem = createListItem(task);
        if (todoList !== null) {
            todoList.appendChild(listItem);
        }
        // const todoListItem = document.createElement("li");
    }
});
