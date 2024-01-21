import { Button, Grid, Container } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { todoList, deletetodo } from "./components/reducer/reducer";
import { useState } from "react";
import { EditComp } from "./EditItem";
import "./App.css";

export function ToItem() {
  const data = useSelector((state) => state.todo);
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  const [index, setIndex] = useState();

  const handleDelete = (id) => {
    var newData = data.filter((d, i) => i !== id);
    dispatch(todoList(newData));
  };

  const handleEdit = (i, user) => {
    setFlag(!flag);
    setUser(user);
    setIndex(i);
  };

  const modelClose = () => {
    setFlag(!flag);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "20px" }}>
      {data.map((user, index) => (
        <div className="row" key={index}>
          <div className="col-md-1">{index + 1}</div>
          <div className="col-md-6" id="k">
            {user}
          </div>
          <div className="col-md-2" id="button">
            <button className="btn btn-light" onClick={() => handleEdit(index, user)}>
              EDIT
            </button>
          </div>
          <div className="col-md-2" id="button">
            <button className="btn btn-info" onClick={() => handleDelete(index)}>
              DELETE
            </button>
          </div>
          <EditComp flag={flag} modelClose={modelClose} user={user} index={index} />
        </div>
      ))}
    </Container>
  );
}
