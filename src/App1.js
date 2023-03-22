import React from 'react';
import "./App.css";

const App = () => {

  // const arr = [1,2,3,4,5];
  const arr = [
  {    id:1,
    name:'A',
  },
  {
    id:2,
    name:"b"
  }
  ];



  return (
    <div className='App'>
     {/* {arr.map((num)=>(
       <div>{num} ,</div>
     ))} */}
     {/* {arr.filter((num)=>(num!==3))}  filter as function then give condition mtl ussko hta dega*/}

     {arr.map((num)=>(
       <div key={id}>
         {num.name}
       </div>
     ))}
    </div>
  )
}

export default App;
