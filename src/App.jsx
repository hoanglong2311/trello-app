import { useState } from 'react'
import Button from '@mui/material/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello Vite + React!</h1>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  )
}

export default App
