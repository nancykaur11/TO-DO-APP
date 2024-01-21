
import './App.css';
import { Delete } from './DeleteAll';
import { ToItem } from './ToDoItems';
 import { Checkboxes } from './Checkbox';
 import { CheckFlag } from './CheckboxwithFlag';

import { ToDoList } from './ToDoList';
import { Checkbox } from '@mui/material';

function App() {
  return (
    <div className="App">
  <ToDoList/>
  <ToItem/>
  <Delete/>
  {/* <CheckFlag/>
  <Checkboxes/> */}
    </div>
  );
}

export default App;
