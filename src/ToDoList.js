import { Button, Input} from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodos } from "./components/reducer/reducer";


export function ToDoList() {
    const [text, setText] = useState("");
     const list=useSelector((state)=> state.todo)
    const dispatch = useDispatch()
const handleSubmit = event => {
    if (text !== "") {
      dispatch(addtodos(text));
      setText("");
    }}
    console.log("text",text)
    //console.log(list,"kk")
  return (
    <div>
      <Container maxWidth="md" style={{ backgroundColor: "skyblue" }} >
        <b>TO DO LIST</b>
      </Container>
      <Input type={Text} variant="outlined"  style={{ width: "75%" }} value={text}
            onChange={event => setText(event.target.value)} />
      <Button  variant="contained" size="small" onClick={handleSubmit}  >ADD</Button>
      
    </div>
  );
}
