const form = document.querySelector("#form");

const sendTask = task => {
    const url = 'http://localhost8080.api/v1/tasks';
    const header = {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(task)
    }
    fetch(url,header)
    .then(response => response.json)
    .then(data => response);
    const resp = data;
    console.log(resp);
}
promessa();

form.addEventListener('submit', e => {
    e.preventDefault();

    const task = Object.create(null);
    task.nameTask = e.target.NameTask.value;
    console.log(task);

    sendTask(task);
})