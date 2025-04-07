import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
  todos:[
    {
      id:1,
      text:"hellow World"
    }
  ]
}
export const todoSlice=createSlice({
  name:'todo',
  initialState,
  reducers:{
    addTodo:(state,action)=>{
      const todo={
        id:nanoid(),
          text:action.payload,
      }
        state.todos.push(todo)  
    },
     removeTodo: (state,action)=>{
       state.todos=state.todos.filter((todo)=>
         todo.id!==action.payload)
     },
    updateTodo: (state, action) => {
         state.todos.forEach((todo)=>{
        if(todo.id===action.payload){
         // todo.text=action.payload
          todo.text=Math.floor(Math.random()*100000000)
        } 
      })
    },
  }
})

 export const {addTodo,removeTodo,updateTodo,deletetodo}=
   todoSlice.actions;

export default todoSlice.reducer