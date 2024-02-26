import React, { useEffect, useRef } from "react"

const WithRef = () => {
  const numRef = useRef(0)

  const handleClick = () => {
    numRef.current = 1
  }

  useEffect(() => console.log(numRef.current))
  return (
    <div>
      <h1>React app</h1>
      <button onClick={handleClick}>{numRef.current}</button>
    </div>
  )
}

export default WithRef
