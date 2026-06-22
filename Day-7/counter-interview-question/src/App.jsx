import { useState } from 'react'

function App() {
  let [count, setCount] = useState(0)

  function addValue(){

    console.log("count: ", count)
    
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
  }

  function reduceValue(){
    count--
    console.log("count: ", count)
    setCount(count)
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Count: {count}</h2>

      <button onClick={addValue}> +1 </button>
      <button onClick={reduceValue}> -1 </button>
    </>
  )
}

export default App
