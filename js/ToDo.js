function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value;

  if (taskText === "") {
    return; // ei tyhjää tehtävää
  }

  const li = document.createElement("li");
  li.innerText = taskText;

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}