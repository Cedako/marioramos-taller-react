import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);



  const plusGood = () => setGood(good+1);
  const plusBad = () => setBad(bad+1);
  const plusNeutral = () => setNeutral(neutral+1);
  return(
    <div>
    <h1>Give feedback</h1>
    <button onClick={plusGood}>Good</button>
    <button onClick={plusBad}>Bad</button>
    <button onClick={plusNeutral}>Neutral</button>
    <h1>Stadistics</h1>
    <p>Good: {good}</p>
    <p>Bad: {bad}</p>
    <p>Neutral: {neutral}</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
