import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export const Checkboxes = () => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  



  const Checkbox = ({ id, type, name, handleClick, isChecked }) => {
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

  const Catalogues = [
    {id: "01",name: "Chicken" },
    {id: "02",name: "loll" },
    {id: "03",name: "snack" },
    {id: "04",name: "chow" },
    {id: "05",name: "finsy" },
    {id: "06",name: "Chilly" }];


  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(Catalogues.map((li) => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  console.log(isCheck);

  const catalog = Catalogues.map(({ id, name }) => {
    return (
      <>
        <Checkbox
          key={id}
          type="checkbox"
          name={name}
          id={id}
          handleClick={handleClick}
          isChecked={isCheck.includes(id)}
        />
        {name}
      </>
    );
  });

  return (
    <div>
      <Checkbox
        type="checkbox"
        name="selectAll"
        id="selectAll"
        handleClick={handleSelectAll}
        isChecked={isCheckAll}
      />
      Select All
      {catalog}
    </div>
  );
};
