import React from 'react'

export default function Customize() {
  return (
    <div style= {{ display: "flex"}}>
      <div style={{ border: "2px solid black", flex: 1 }}>Image</div>
      <div style={{ border: "2px solid black", flex: 1 }}>Checkbox</div>
    </div>
  )
}