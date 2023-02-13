const inputEl = document.querySelector(".todo__input");
const todoTasksEl = document.querySelectorAll(".todo__task");
const todoTasksList = document.querySelector(".todo__tasks");
const tasks = [];
inputEl.addEventListener("keydown", (event) => {
    if (event.key === "Enter"){
        event.preventDefault();
        const task = inputEl.value;
        

        tasks.push(task);

        inputEl.value = "";
        
        renderToDoTasks(tasks);
    }
});

const renderToDoTasks = (tasks) => {
    todoTasksList.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskEl = document.createElement("div");
        taskEl.className = "todo__task";
        taskEl.innerText = `${index + 1}. ${task}`;
        todoTasksList.appendChild(taskEl);
    });
}
/* todoTasksEl.forEach((x) => x.addEventListener
    ("click", (event) => {
        console.log(event.target.innerText);
})
); */

