document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    if (!taskInput || !addTaskBtn || !taskList) return;

    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    saved.forEach(t => addTaskElement(t));

    addTaskBtn.addEventListener("click", () => {
        const text = taskInput.value.trim();
        if (text !== "") {
            addTaskElement(text);
            saveTask(text);
            taskInput.value = "";
        }
    });

    taskInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            addTaskBtn.click();
        }
    });

    function addTaskElement(text) {
        const li = document.createElement("li");
        const spanText = document.createElement("span");
        spanText.textContent = text;

        const del = document.createElement("span");
        del.textContent = "✖";
        del.className = "delete";

        del.addEventListener("click", () => {
            li.remove();
            removeTask(text);
        });

        li.appendChild(spanText);
        li.appendChild(del);
        taskList.appendChild(li);
    }

    function saveTask(text) {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(text);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function removeTask(text) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks = tasks.filter(t => t !== text);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
});
