import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <Navbar />
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <p>{count}</p>
    </>
  )
}

export default App
