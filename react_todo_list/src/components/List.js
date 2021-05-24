import React from 'react';


// jsx
const List = (props) => {
  return (
    <>
      <div className="todo">
       
        <ul>
          
          <li>{props.order}) {props.tasktodo}</li>
        </ul>
       
      </div>
    </>
  );
};

export default List