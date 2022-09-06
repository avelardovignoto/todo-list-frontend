const form = document.querySelector("#form");

const tasks = sendTask => {
    fetch('api/v1/tasks',{
        method: 'POST',
        headers: {
            'Content-Type': 'application.js',
        },
        body: JSON.stringify()
    })
    .then(response => response.json())
    .then(data => response);
}

form.addEventListener('submit', e => {
    e.preventDefault();

    const tasks = Object.create(null);
    tasks.task = e.target.task.value;
    console.log(tasks);

    tasks(sendTask);
})