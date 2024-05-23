// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem('tasks'));
let nextId = JSON.parse(localStorage.getItem('nextId'));

// Generate a unique task id
function generateTaskId() {
  return nextId++;
}

// Todo: Create a task card
function createTaskCard(task) {
  const dueDate = dayjs(task.deadline);
  const now = dayjs();
  let carcClass = 'bg-white';

  if (dueDate.isBefore(now, 'day')) {
    carcClass = 'bg-danger text-white';
  } else if (dueDate.diff(now, 'day') <= 3) {
    carcClass = 'bg-warning text-dark';
  }
  const cardHtml = `
  <div class= "card mb-3 task-card ${cardClass}" data-id="${task.id}">
  <div class="card=body">
  <h5 class="card-title>${task.title}</h5>
  <p class="card-text">${task.description}</p>
  <p class="card-text"><small>Due: ${dueDate.format('YYYY-MM-DD')}</small></p>
  <button class="btn btn-danger btn-sm delete-task">Delete</button>
  </div>
  </div>`;
  return $(cardHtml);
}

// Todo: Render the task list and make cards draggable
function renderTaskList() {
  $('#todo-cards').empty();
  $('#in-progress-cards').empty();
  $('#done-cards').empty();

  taskList.forEach((task) => {
    const taskCard = createtaskCard(task);
    $(`#${task.status}-cards`).append(taskCard);
  });
  $('.task-card').draggable({
    revert: 'invalid',
    stack: '.task-card',
    cursor: 'move',
    containment: 'document',
  });
  $('.delete-task').click(handleDeleteTask);
}

// Handle adding a new task
function handleAddTask(event) {
  event.preventDefault();
  const title = $('#task-title').val();
  const description = $('#task-desc').val();
  const deadline = $('#task-deadline').val();

  if (!title || !deadline) {
    alert('Please fill in all required fields.');
    return;
  }

  const newTask = {
    id: generateTaskId(),
    title,
    description,
    deadline,
    status: 'todo',
  };

  taskList.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(taskList));
  localStorage.setItem('nextId', nextId);

  renderTaskList();
  $('#formModal').modal('hide');
}

// Handle deleting a task
function handleDeleteTask(event) {
  const taskId = $(event.target).closest('.task-card').data('id');
  taskList = taskList.filter((task) => task.id !== taskId);
  localStorage.setItem('tasks', JSON.stringify(taskList));
  renderTaskList();
}

// Handle dropping a task into a new status lane
function handleDrop(event, ui) {
  const taskId = ui.helper.data('id');
  const newStatus = $(event.target).closest('.lane').attr('id').replace('-cards', '');

  taskList = taskList.map((task) => {
    if (task.id === taskId) {
      return { ...task, status: newStatus };
    }
    return task;
  });

  localStorage.setItem('task', JSON.stringify(taskList));
  renderTaskList();
}

// Render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
  renderTaskList();

  $('.lane').droppable({
    accept: '.task-card',
    drop: handleDrop,
  });

  $('#task-deadline').datepicker({ dateFormat: 'yy-mm-dd' });

  $('#task-form').submit(handleAddTask);
});
