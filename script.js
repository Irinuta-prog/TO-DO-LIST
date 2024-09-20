document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');

            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', () => {  
                // Când se face click pe butonul de ștergere:
                 //Se aplică o animație de dispariție (fadeOut).
                //După ce animația s-a terminat, sarcina este eliminată din listă.
                listItem.style.animation = 'fadeOut 0.5s forwards'; 
                listItem.addEventListener('animationend', () => {
                    taskList.removeChild(listItem);
                });
            });
            taskSpan.addEventListener('click', () => {
                taskSpan.style.textDecoration = 'line-through'; // Adaugă linie peste text
                taskSpan.style.color = 'red'; // Schimbă culoarea în roșu
            });

            listItem.appendChild(taskSpan);
            listItem.appendChild(deleteBtn);
            taskList.appendChild(listItem);
            taskInput.value = '';
            taskInput.focus();
        }
    });
});
