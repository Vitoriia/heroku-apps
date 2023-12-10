import express from 'express';

const app = express();

app.use(express.json());

const users = [{
    id: '123',
    name: 'John Doe',
}, {
    id: '234',
    name: 'Mary Smith',
}
];

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const user = users.find(u => u.id === userId);
    res.send(user);
});

app.get('/hello', (req, res) => {
    console.log('Received a get request on the path /hello');
    res.send('Hello from express!');
});

app.post('/users', (req, res) => {
    console.log(req.body);
    const newUser = req.body;
    users.push(newUser);
    res.send(users);
});

app.listen(3000, () => {
   console.log("Express server is listening on port 3000"); 
});