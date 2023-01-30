import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, text}) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({ label, stat }) => <p>{label} {stat}</p>

const Statistics = ({ results }) => {
  if (results.reduce((a, b) => a + b) === 0)
    return (
        <p><b>No feedback given</b></p>
  )
  return (
    <>
      <StatisticLine label='Good' stat={results[0]}/>
      <StatisticLine label='Neutral' stat={results[1]}/>
      <StatisticLine label='Bad' stat={results[2]}/>
    </>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const allResults = [good, neutral, bad]


  console.log('Rendering with good', good)
  console.log('Rendering with neutral', neutral)
  console.log('Rendering with bad', bad)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  const getPositive = () => (100 * good) / (good + neutral + bad) || 0
  const getAverage = () => allResults.reduce((a, b) => a + b) / allResults.length

  return (
    <div>
      <Header text='Give Feedback'/>
      <Button handleClick={handleGood} text='Good'/>
      <Button handleClick={handleNeutral} text='Neutral'/>
      <Button handleClick={handleBad} text='Bad'/>

      <Header text='Statistics'/>
      <Statistics results={allResults} />
      <StatisticLine label='Average' stat={getAverage()}/>
      <StatisticLine label='Positive' stat={getPositive() + '%'}/>
    </div>
  )
}

export default App