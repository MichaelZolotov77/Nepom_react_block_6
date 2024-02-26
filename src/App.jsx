import React, { useState } from "react"
import Clicker from "./Clicker"
import WithRef from "./Ref"

function App() {
  const [isClicker, setClicker] = useState(false)

  return (
    <div className="App">
      <WithRef />
    </div>
  )
}

export default App
