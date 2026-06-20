import { useState } from 'react'
import './App.css'

function App() {
  const color_set = ["#780000","#c1121f","#fdf0d5","#003049","#669bbc"]
  const [color, setColor] = useState("Olive")

  return (
    <div className='w-screen h-screen duration-200'
      style={{ backgroundColor: color }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

        
          {
            color_set.map((c) => {
              return(
                <button key={c} onClick={() => { setColor(c) }} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: c }}>{c}</button>
              )
            })
          }


        </div>
      </div>
    </div>
  )
}

export default App
