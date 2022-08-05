import React from 'react'
import Loading from "../assests/loading.gif"

export default function Spinner() {
  return (
    <div style={{textAlign:"center"}}>
        <img src={Loading} alt="spinner" />
    </div>
  )
}
