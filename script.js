let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function showTasks() {
  let list = document.getElementById('taskList');
  list.innerHTML = '';
  tasks.forEach((task, index) => {
    list.innerHTML += `<li>
      <span class="${task.done? 'done' : ''}" onclick="toggleTask(${index})">${task.text}</span>
      <button class="delete-btn" onclick="deleteTask(${index})">X</button>
    </li>`;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
  let input = document.getElementById('taskInput');
  if (input.value === '') return;
  tasks.push({ text: input.value, done: false });
  input.value = '';
  showTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  showTasks();
}

function toggleTask(index) {
  tasks[index].done =!tasks[index].done;
  showTasks();
}

showTasks();
