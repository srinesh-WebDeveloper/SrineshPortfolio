document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        // Create task item (li)
        const li = document.createElement("li");

        // Create checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function () {
            taskTextElement.classList.toggle("completed");
        });

        // Create task text
        const taskTextElement = document.createElement("span");
        taskTextElement.classList.add("task-text");
        taskTextElement.textContent = taskText;

        // Create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'; // FontAwesome trash icon
        deleteBtn.classList.add("delete");
        deleteBtn.addEventListener("click", function () {
            li.remove();
        });

        // Append elements
        li.appendChild(checkbox);
        li.appendChild(taskTextElement);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Add task on button click
    addTaskBtn.addEventListener("click", addTask);

    // Add task on pressing Enter key
    taskInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addTask();
        }
    });
});