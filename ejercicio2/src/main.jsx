import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const[score, setScore] = useState(0);
  const[total, setTotal] = useState(0);

  const plusGood = () => {setGood(good+1); setScore(score+1); setTotal(total+1);};
  const plusBad = () => {setBad(bad+1); setScore(score-1); setTotal(total+1);};
  const plusNeutral = () => {setNeutral(neutral+1); setTotal(total+1);};
  return(
    <div>
    <h1>Give feedback</h1>
    <button onClick={plusGood}>Good</button>
    <button onClick={plusNeutral}>Neutral</button>
    <button onClick={plusBad}>Bad</button>
    <h1>Stadistics</h1>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <br/>
    <p>Total: {total}</p>
    <p>Average: {score/total | 0}</p>
    <p>Acceptance: {(good/total)*100 | 0}%</p>
    </div>
    /*Operador OR , parecido al operador ternario, ejecuta la instrucción de la izquierda, de no ser posible
    ejecuta la instrucción de la derecha*/
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
