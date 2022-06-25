import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [isName, setIsName] = useState("");
  const [isNumber, setIsNumber] = useState("");
  const [isEmailcom, setEmail] = useState("");

  
  const addItem = (e) =>{
    if(e.key === "Enter" && isName !=="" && isNumber !=="" && isEmailcom !==""){
      const item = {
        id: new Date().getTime(),
        isName: isName,
        isNumber: isNumber,
        isEmailcom: isEmailcom,
      };

      setTodos([item, ...todos]);

      setIsName = ("");
      setIsNumber = ("");
      setEmail = ("");
    };
  }

  return (
    <>
    <div className="container">
      <div className="card w-50 mx-auto mt-5 p-3 bg-light">
        <h3 className='fw-bold text-primary text-center'>Add new contact.</h3>
        <form onKeyPress={addItem}>
          <input className="form-control my-3" type="text" placeholder='Enter name' value={isName} onChange={(e)=>setIsName(e.target.value)}/>
          <input className="form-control my-3" type="number" placeholder='Enter number' value={isNumber} onChange={(e)=>setIsNumber(e.target.value)}/>
          <input className="form-control my-3" type="email" placeholder='Enter email' value={isEmailcom} onChange={(e)=>setEmail(e.target.value)}/>
          <button className="btn btn-primary w-50 mx-auto" type='submit'>Add</button>
        </form>
      </div>

      <ul className="list-group">
        {todos.map((item) => {
          return(
            <li className='list-group-item list-group-item-info d-flex justify-content-between align-item-center'>
              <p className="text">{item.isName}</p>
              <p className="text">{item.isNumber}</p>
              <p className="text">{item.isEmailcom}</p>
              <button className="btn btn-info" onClick={() => setTodos(todos.filter((data) => data.id !== item.id))}>x</button>
            </li>
          );
          })}
      </ul>
    </div>
    </>
  )
}

export default App;