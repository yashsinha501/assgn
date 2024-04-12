import { useState } from 'react'
import OuterTable from './OuterTable'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='all'>
      <OuterTable/>
    </div>
  )
}

export default App
