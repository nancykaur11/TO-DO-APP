import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoslice",
  initialState: [],
  reducers: {
    addtodos(state, action) {
      return [...state, action.payload];
    },  
    todoList(state, action){
     // console.log(action.payload,"actionnn")
      return action.payload
    },
    deleteAll(state, action) {
      return state=[];
    },
   
  },
});
// console.log(todoSlice.actions.addtodos())
export const {todoList, addtodos, deleteAll,editIt } = todoSlice.actions;
export default todoSlice.reducer;
