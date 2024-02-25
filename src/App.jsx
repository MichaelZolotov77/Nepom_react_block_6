import React, { useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <button onClick={increment}>{count}</button>
      <button onClick={() => setLoading(true)}>{loading.toString()}</button>
    </div>
  )
}

export default App
