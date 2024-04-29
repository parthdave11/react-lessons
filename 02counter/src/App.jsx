import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)
  
  const addValue = () => {
    if (counter >= 20){
      setCounter(20)
    }
    else{
      // counter = counter + 1
      setCounter(counter + 1)
      console.log("value added", counter);
    }
  }
  

  
  const decreaseValue = () => {
    if (counter <= 0){
      setCounter(0)
    }
    else{
      setCounter(counter - 1)
      console.log("value decreased", counter);
    }
  }
  
  // let counter = 5

  return (
    <>
     <h1>Counter Project</h1>
     <h2>Counter Value: {counter}</h2>

     <button onClick={addValue}>Add value in {counter}</button>
     <br />
     <br />
     <button onClick={decreaseValue}>Decrease value in {counter}</button>
    </>
  )
}

export default App
