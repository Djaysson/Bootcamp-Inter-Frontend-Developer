const form = document.getElementById("form");
const tasks = document.getElementById("tasks");

form.onsubmit = (e) => {
  e.preventDefault();
  const inputField = document.getElementById("input");
  addTask(inputField.value);
  form.reset();
};

const addTask = (description) => {
  if (description === "") {
    return "";
  } else {
    const listContainer = document.createElement("div");
    const nextTask = document.createElement("input");
    const taskText = document.createElement("label");
    const taskDescription = document.createTextNode(description);

    nextTask.setAttribute("type", "checkbox");
    nextTask.setAttribute("name", description);
    nextTask.setAttribute("id", description);
    taskText.setAttribute("for", description);

    listContainer.classList.add("listItems");
    taskText.appendChild(taskDescription);
    listContainer.appendChild(nextTask);
    listContainer.appendChild(taskText);

    tasks.appendChild(listContainer);
  }
};
