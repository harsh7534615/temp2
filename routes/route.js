import express, { Router } from 'express';

import { registerUser, loginUser } from '../controller/auth-controller.js';
import { addTodo, getAllTodos, toggleTodoDone, updateTodo, deleteTodo } from '../controller/todo-controller.js';

const route = express.Router();


route.post('/todos', addTodo)
route.get('/todos', getAllTodos);
route.get('/todos/:id', toggleTodoDone);
route.put('/todos/:id', updateTodo);
route.delete('/todos/:id', deleteTodo);

route.post('/register', registerUser);
route.post('/login', loginUser);

// route.get('/user/email', (req, res) => {
//     if (!req.user) {
//         return res.status(401).json({ error: 'User not authenticated' });
//     }
//     const userEmail = req.user.email;
//     return res.status(200).json({ email: userEmail });
// });


export default route;