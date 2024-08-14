const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

let tasks = [];

app.get('/', (req, res) => {
    res.render('layout', { tasks: tasks });
});

app.post('/addtask', (req, res) => {
    const newTask = req.body.newtask;
    tasks.push(newTask);
    res.redirect('/');
});

app.post('/removetask', (req, res) => {
    const removeTask = req.body.task;
    tasks = tasks.filter(task => task !== removeTask);
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
