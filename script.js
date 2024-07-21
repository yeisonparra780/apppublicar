function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Por favor, ingresa una tarea.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskInput.value;
    taskList.appendChild(li);

    taskInput.value = '';
}
