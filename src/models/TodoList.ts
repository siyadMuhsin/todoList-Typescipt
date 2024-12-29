import {Todo} from './Todo';

export class TodoList {
    todos:Todo[]=[];
    counter:number=1;

    addTodo(title:string):void{
        const newTodo =new Todo(this.counter++,title)
        this.todos.push(newTodo);
        console.log(this.todos)
    }
    allTodos():object{
        return this.todos;
    }
    updateTodo(id:number,title:string):boolean{
        const todo=this.todos.find(todo=>todo.id===id);
        if(todo){
            todo.title=title;
            return true;
        }else{
            console.log('Todo not found');
            return false;
        }
    }
    deleteTodo(id:number):boolean{
        let beforeLen=this.todos.length;
        this.todos=this.todos.filter(todo=>todo.id!==id);
        if(this.todos.length<beforeLen){
            return true;
        }else{
            return false;
        }
    }
    markAsComplete(id:number):boolean{
        const todo = this.todos.find(todo => todo.id === id);
        if(todo){
            todo.isCompleted=!todo.isCompleted;
            return true;
        }
        return false;
        
    }

}