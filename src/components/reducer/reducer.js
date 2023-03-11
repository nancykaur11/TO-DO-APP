import { createSlice } from "@reduxjs/toolkit";


  const todoSlice=createSlice({
    name:"todoslice",
    initalState:[],
reducers:{
  addtodos(state,action){
    state.todos.push(action.payload)  }
}
   }  )
  // console.log(todoSlice.actions.addtodos())
    export const {addtodos}=todoSlice.actions;
    export default todoSlice.reducer;
  