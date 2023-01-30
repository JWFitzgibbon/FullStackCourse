import { useState } from "react";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>Start by pressing the buttons</div>
    )
  }
  return (
    <div>{props.allClicks.join(' ')}</div>
  )
}

const Button = ({ handleClick, text }) => {
  return(
    <button onClick={handleClick}>{text}</button>
  )
  
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  console.log('Rendering with new all array', allClicks)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
    console.log('concatenating L with current all array ', allClicks)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
    console.log('concatenating R with current all array ', allClicks)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='Left'/>
      <Button handleClick={handleRightClick} text={'Right'}/>
      {right}
      <History allClicks={allClicks}/>
    </div>
  )
}

export default App










/*
const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>



const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log('Rendering with counter value', counter)

  const increaseByOne = () => {
    setCounter(counter + 1)
    console.log('Increasing, value before', counter)
  }
  const decreaseByOne = () => {
    setCounter(counter - 1)
    console.log('decreasing, value before', counter)
  }  
  const resetCounter = () => {
    setCounter(0)
    console.log('Resetting to zero, value before', counter)
  }
  
  
  return (
    <div>
      <Display counter={counter}/>
      <Button handleClick={increaseByOne} text='Increase'/>

      <Button
        handleClick={decreaseByOne}
        text='Decrease'
      />

      <Button 
        handleClick={resetCounter} 
        text='Reset'
      />
    </div>
  )
}
*/

