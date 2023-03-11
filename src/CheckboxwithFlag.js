import React, { useState } from "react";
//import ReactDOM from "react-dom";

export const CheckFlag = () => {
  

  const Catalogues = [
    {id: "01",name: "Chicken", flag:false },
    {id: "02",name: "loll" ,flag:false},
    {id: "03",name: "snack",flag:false },
    {id: "04",name: "chow",flag:false },
    {id: "05",name: "finsy" ,flag:false},
    {id: "06",name: "Chilly",flag:false }];

  const [data, setData] = useState(Catalogues);
 const [select, setSelect] = useState(false);


  const Checkbox = ({ id, type, name, handleClick, isChecked,flag }) => {
    return (
      <input
        id={id}
        name={name}
        type={type}
        onChange={handleClick}
        checked={isChecked}
        
      />
    );
  };
  const handleCheck = (e) => {
   setSelect(!select)
   let list = [...data];
   let filteredData = list.map((item) => {
      item.flag = !select;
     return item;
 });
   console.log(data,"kjidj",select)
   setData(filteredData)

  }
 
  const handleClick = (e) => {
   const { id } = e.target;
  let listCopy = [...data];
  let filteredDataSource = listCopy.filter((item) => {
         if (item.id === id) {
             item.flag = !item.flag;
          }
          return item;
      });
setData(filteredDataSource)

var flag_check= filteredDataSource.filter((d)=> d.flag == false)
flag_check.length ? setSelect(false) : setSelect(true)
};

  

  const catalog = data.map(({ id, name, flag }) => {
    return (
      <>
        <Checkbox
          key={id}
          type="checkbox"
          name={name}
          id={id}
          handleClick={handleClick}
         isChecked={flag}
        />
        {name}
      </>
    );
  });

  return (
    <div>
      <input type="checkbox" id= "select" 
  checked={select} onClick={()=>{handleCheck()}}/>SelectAll
      {catalog}
    </div>
  );
}
