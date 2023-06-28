const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const pendingTasks = document.getElementById('pending-tasks');
const completedTasks = document.getElementById('completed-tasks');

taskForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const task = taskInput.value.trim();
  if (task !== '') {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        listItem.classList.add('completed');
        completedTasks.appendChild(listItem);
      } else {
        listItem.classList.remove('completed');
        pendingTasks.appendChild(listItem);
      }
    });
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      listItem.remove();
    });
    listItem.textContent = task;
    listItem.appendChild(checkbox);
    listItem.appendChild(deleteButton);
    pendingTasks.appendChild(listItem);
    taskInput.value = '';
  }
});
