import React from 'react';
import list from './components/List';

// jsx
const App = () => {
  const todo=[{todo: "wake up", id: 1}, {todo: "breakfast", id: 2}, {todo: "study", id: 3}]
  return <div><h1>hallo worlde</h1></div>;
  const todo1 = todo.map((elem, i) => {
   
    return <list key={i} order={i} todotask={elem} />;
    const handleClick=()=>{
    console.log('click');
  }
  });
  const handleClick=()=>{
    console.log('todo');
  }
};

export default App