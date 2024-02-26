import React, { useEffect, useRef } from "react"

const WithRef = () => {
  const inputEl = useRef(null)
  console.log(inputEl)

  useEffect(() => console.log(inputEl))
  return (
    <div>
      <h1>React app</h1>
      <input placeholder="name" ref={inputEl} />
    </div>
  )
}

export default WithRef
