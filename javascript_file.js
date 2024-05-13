const timeSlots = document.querySelector('.time-slots');
const addTimeSlotBtn = document.getElementById('add-time-slot');

addTimeSlotBtn.addEventListener('click', addTimeSlot);

function addTimeSlot() {
    const startTime = document.getElementById('start-time').value;
    const startMeridiem = document.getElementById('start-meridiem').value;
    const endTime = document.getElementById('end-time').value;
    const endMeridiem = document.getElementById('end-meridiem').value;

    if (startTime && endTime) {
        const timeSlot = document.createElement('div');
        timeSlot.classList.add('time-slot');

        const timeRange = document.createElement('h3');
        timeRange.textContent = `${startTime} ${startMeridiem} - ${endTime} ${endMeridiem}`;

        const taskList = document.createElement('ul');
        taskList.classList.add('task-list');

        const addTaskInput = document.createElement('input');
        addTaskInput.type = 'text';
        addTaskInput.placeholder = 'Add Task';

        const addTaskBtn = document.createElement('button');
        addTaskBtn.textContent = '+';
        addTaskBtn.addEventListener('click', () => {
            const task = addTaskInput.value.trim();
            if (task) {
                const taskItem = document.createElement('li');
                const taskText = document.createElement('span');
                taskText.textContent = task;
                const editBtn = document.createElement('button');
                editBtn.textContent = '✏️';
                editBtn.title = 'Edit';
                editBtn.addEventListener('click', () => {
                    editTask(taskText);
                });
                taskItem.appendChild(taskText);
                taskItem.appendChild(editBtn);
                taskList.appendChild(taskItem);
                addTaskInput.value = '';
            }
        });

        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('details');

        const detailsLabel = document.createElement('label');
        detailsLabel.textContent = 'Details:';

        const detailsTextarea = document.createElement('textarea');

        detailsDiv.appendChild(detailsLabel);
        detailsDiv.appendChild(detailsTextarea);

        const settingsDiv = document.createElement('div');
        settingsDiv.classList.add('settings');

        const colorInput = document.createElement('input');
        colorInput.type = 'color';
        colorInput.addEventListener('change', () => {
            timeSlot.style.backgroundColor = colorInput.value;
        });

        settingsDiv.appendChild(colorInput);

        timeSlot.appendChild(timeRange);
        timeSlot.appendChild(taskList);
        timeSlot.appendChild(addTaskInput);
        timeSlot.appendChild(addTaskBtn);
        timeSlot.appendChild(detailsDiv);
        timeSlot.appendChild(settingsDiv);

        timeSlots.appendChild(timeSlot);
    }
}

function editTask(taskText) {
    const newTask = prompt('Edit task:', taskText.textContent);
    if (newTask !== null) {
        taskText.textContent = newTask;
    }
}