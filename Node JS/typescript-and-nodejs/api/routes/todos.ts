import { Router } from "express";

import { Todo } from "../models/todo";

type RequestBody={text:string};
type RequestParams={todoId:string}

const router=Router();

let todos: Array<Todo>=[];


router.get('/',(req,res,next)=>{
    res.status(200).json({
        todos:todos
    })
})

router.post('/todo',(req,res,next)=>{
    const newTodo:Todo={
        id:new Date().toISOString(),
        text:req.body.text
    };

    todos.push(newTodo);

    res.status(201).json({
        message:'Added Todo',
        todo:newTodo,
        todos:todos
    })
})

router.put('/todo/:todoId',(req,res,next)=>{
    const params=req.params as RequestParams;

    const tid=params.todoId;
    const todoIndex=todos.findIndex(e=>e.id===tid);

    if( todoIndex >=0){
        todos[todoIndex]={
            id:todos[todoIndex].id,
            text:req.body.text
        }

        return res.status(404).json({
            message:"updated todo",
            todods:todos
        })
    }
    return res.status(200).json({
        message:"could not find todo with this id"
    })
})


router.delete('/todo/:todoId',(req,res,next)=>{
    todos=todos.filter(todoItem=>todoItem.id!==req.params.todoId);
    res.status(200).json({
        message:'Delted todo',
        todos:todos
    })
})
export default router;