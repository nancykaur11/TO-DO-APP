import { modalClasses } from "@mui/material";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useSelector,useDispatch } from "react-redux";
import { editIt, todoList } from "./components/reducer/reducer";

export function EditComp({flag, user,modelClose,index}) {
  const [editIndex, setEditIndex] = useState();
  const [editInput, setEditInput] = useState();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todo);
  const handleDone= () => {
    var newD =  [...data]
    newD[1] = editInput
     console.log(editInput,index,newD,"new")
      dispatch(todoList(newD));
      modelClose()
 
  };

  return (
    <div>
        {/* {console.log(editIndex,editInput,'flag')} */}
      <Modal show={flag}>
        <Modal.Header>EDIT TO BE</Modal.Header>
        <Modal.Body>
          <input
            type="text"
            value={editInput}
            onChange={(value) => setEditInput(value.target.value)}
            className="form-control"
          />
        </Modal.Body>
        <Modal.Footer>
           <button className="btn btn-light" onClick={()=>modelClose() }>CANCEL</button> 
    <button className="btn btn-success"onClick={()=>{handleDone()}}>DONE</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
