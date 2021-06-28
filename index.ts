window.document.addEventListener("DOMContentLoaded", () => {
  const addTaskBtn = document.getElementById("addTaskBtn");
  const addTaskInput = document.getElementById("addTaskInput");
  const todoList = document.getElementById("todoList");

  if (addTaskBtn !== null) {
    addTaskBtn.addEventListener("click", addTask);
  }

  function addTask() {
    if (addTaskInput !== null) {
      const addTaskInputValue = (<HTMLInputElement>addTaskInput).value;
      renderList(addTaskInputValue);
    }
  }

  function createListItem(task: string) {
    const listItem = document.createElement("li");
    listItem.innerHTML = task;
    return listItem;
  }

  function renderList(task: string) {
    const listItem = createListItem(task);
    if (todoList !== null) {
      todoList.appendChild(listItem);
    }
  }
});
