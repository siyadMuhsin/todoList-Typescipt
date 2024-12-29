import { Request,Response } from "express";
import {Todo} from '../models/Todo';
import { TodoList } from "../models/TodoList";
import { todo } from "node:test";

const todoList=new TodoList();


export const allTodos=(req:Request,res:Response)=>{
    const todos=todoList.allTodos();

    res.render('index',{todos:todos})
}
export const addTodo = (req: Request, res: Response) => {
    try {
        const { title } = req.body;
        todoList.addTodo(title); 
        res.redirect('/')
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
};
export const updateTodo=(req:Request,res:Response)=>{
    try {
        const id=parseInt(req.params.id);
        const {title}=req.body;
        todoList.updateTodo(id,title);
        res.redirect('/')
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
}
export const deleteTodo=(req:Request,res:Response)=>{
    try {
        const id=parseInt(req.params.id);
        todoList.deleteTodo(id);
        res.redirect('/')
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
}
export const markAsComplete=(req:Request,res:Response)=>{
    try {
        const id=parseInt(req.params.id);
        todoList.markAsComplete(id);
        // res.status(200).json({ success: true, message: 'marked as complete' });
        res.redirect('/')
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
}
export const getUpdateTodo=(req:Request,res:Response)=>{
    try {
        const id=parseInt(req.params.id);
        

        res.render('update',{id:id})
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
}