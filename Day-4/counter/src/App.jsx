import { useState } from "react"

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 0

  const addValue = () => {
    if(counter < 20){
      counter++
      setCounter(counter)
    }

    console.log("Value Added", counter)
  }

  const reduceValue = () => {

    if(counter > 0){
      counter--;
      setCounter(counter);
    }
    console.log("Value reduced: ", counter)
  }

  return (
    <>
      <h1>App CSS</h1>
      <h2>Counter: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={reduceValue}>Reduce Value {counter}</button>

      <p>Count: {counter}</p>
    </>
  )
}

export default App
