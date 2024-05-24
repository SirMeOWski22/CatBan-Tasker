# KatBan-Tasker
## Overview
This project is a simple task management application that allows users to organize tasks in a Kanban-style board. Tasks can be added, moved between different states (Not Yet Started, In Progress, Completed), and deleted. The task board persists data using localStorage, ensuring tasks are saved across page refreshes.

## Features
- Task States: Tasks are displayed in columns representing their progress state: Not Yet Started, In Progress, Completed.
- Color Coding: Tasks are color-coded based on their deadline:
- Yellow: Task is nearing its deadline (within 3 days).
- Red: Task is overdue.
- Add Task: Users can add new tasks with a title, description, and deadline via a modal dialog.
- Drag and Drop: Tasks can be dragged and dropped between columns, updating their progress state.
- Delete Task: Tasks can be deleted and will not reappear after refreshing the page.
- Persistent Storage: Tasks are saved in localStorage, ensuring they persist across page reloads.
  
## Getting Started
### Prerequisites
- Web browser with JavaScript enabled.
### Installation
1. Clone the repository to your local machine:
git clone [https://github.com/SirMeOWski22/KanBan-Tasker.git]
2.   Navigate to the project directory:
cd task-board
3. Open `index.html` in your preferred web browser.

## Usage
1. Open the Task Board: Open `index.html` in your browser to view the task board.
2. Add a New Task: Click the "Add Task" button to open the modal dialog. Fill in the task title, description, and deadline, then click "Save".
3. Move Tasks: Drag tasks between columns to update their progress state.
4. Delete a Task: Click the "Delete" button on a task to remove it from the board.
5. Refresh the Page: Tasks will persist in their respective states across page reloads.
   
## File Structure
- index.html: The main HTML file.
- assets/css/style.css: CSS for styling the task board.
- assets/js/script.js: JavaScript code to handle task operations and interactions.
  
## External Libraries
- Bootstrap: For styling and responsive design.
- jQuery: For DOM manipulation and event handling.
- jQuery UI: For draggable and droppable functionality.
- Day.js: For date manipulation and formatting.
  
## Screenshots
![Screenshot 2024-05-23 214945](https://github.com/SirMeOWski22/KanBan-Tasker/assets/160355750/fa6945f4-d7a6-49b5-aa78-f59d48313d31)
![Screenshot 2024-05-23 215022](https://github.com/SirMeOWski22/KanBan-Tasker/assets/160355750/23e55dfc-83a1-4571-812d-fb7035005595)

## Credit
Ashley Morgan created this application with internet research guidance, and the starter code provided by SMU Coding Bootcamp. 
