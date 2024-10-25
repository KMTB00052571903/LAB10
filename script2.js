function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value;
    if (taskText === '') return;

    const task = document.createElement('li');
    task.innerHTML = `
        ${taskText}
        <button onclick="moveTask(this, -1)">⬅️</button>
        <button onclick="moveTask(this, 1)">➡️</button>
    `;
    document.getElementById('pendiente-tasks').appendChild(task);
    taskInput.value = '';
}

function moveTask(button, direction) {
    const task = button.parentElement;
    const currentColumn = task.parentElement;
    let targetColumn;

    if (direction === 1) {
        if (currentColumn.id === 'pendiente-tasks') {
            targetColumn = document.getElementById('haciendo-tasks');
        } else if (currentColumn.id === 'haciendo-tasks') {
            targetColumn = document.getElementById('completada-tasks');
        }
    } else if (direction === -1) {
        if (currentColumn.id === 'completada-tasks') {
            targetColumn = document.getElementById('haciendo-tasks');
        } else if (currentColumn.id === 'haciendo-tasks') {
            targetColumn = document.getElementById('pendiente-tasks');
        }
    }

    if (targetColumn) {
        targetColumn.appendChild(task);
    }
}