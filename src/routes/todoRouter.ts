
import { Router } from "express";
import { allTodos,addTodo,updateTodo,deleteTodo,markAsComplete,getUpdateTodo } from "../controllers/todoController";
const router=Router();

router.get('/',allTodos)
router.post('/addTodo',addTodo)
router.patch('/updateTodo/:id',updateTodo)
router.delete('/deleteTodo/:id',deleteTodo)
router.patch('/markComplete/:id',markAsComplete)
router.get('/updateTodo/:id',getUpdateTodo)
export default router;


