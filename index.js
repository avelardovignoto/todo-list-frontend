const form = document.querySelector("#form");

form.addEventListener('submit', e => {
    e.preventDefault();

    const tasks = Object.create(null);
    tasks.task = e.target.task.value;
    console.log(tasks);

    tasks(sendTask);
})