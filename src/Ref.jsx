import React, { useEffect, useRef, useState } from "react"

const WithRef = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div>
      <h1>React app</h1>
      <button onClick={handleClick}>{count}</button>
    </div>
  )
}

export default WithRef
