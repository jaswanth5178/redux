import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {increment,decrement} from './features/Counter/CounterSlice'


const App = () => {
  const Count = useSelector((state)=>state.Counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{Count}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default App