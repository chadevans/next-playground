'use client'
 
import { useState } from 'react'
 
export default function Counter() {
  const [count, setCount] = useState(0)
 
  return (
    <div>
      <p>You clicked {count} times</p>
      <button className="underline active:no-underline" onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
