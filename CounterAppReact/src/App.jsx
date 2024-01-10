import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setcounter] = useState(0)
  
  
  const addvalue=()=>{
    if(counter>=0&&counter<20){
      setcounter(counter+1);
    }
  }

  const removevalue=()=>{
    if(counter>0){
      setcounter(counter-1)
    }    
  }
  return (
    <>
    <h1>Counter App</h1>
    <br />
    <h2>Counter value:{counter}</h2>
    <br />
    <button onClick={addvalue}>Add value</button>
    <br />
    <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
