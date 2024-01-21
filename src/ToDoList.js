import { Button, Input, Container } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodos } from "./components/reducer/reducer";

export function ToDoList() {
  const [text, setText] = useState("");
  const list = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    if (text !== "") {
      dispatch(addtodos(text));
      setText("");
    }
  };

  return (
    <Container maxWidth="md" style={{ backgroundColor: "skyblue", padding: "20px", borderRadius: "10px", marginTop: "20px" }}>
      <div>
        <b style={{ fontSize: "1.5rem" }}>TO DO LIST</b>
      </div>
      <Input
        type="text"
        variant="outlined"
        style={{ width: "75%", margin: "10px 0" }}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <Button variant="contained" size="small" onClick={handleSubmit}>
        ADD
      </Button>
    </Container>
  );
}
