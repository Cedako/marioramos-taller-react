import React from 'react'
import ReactDOM from 'react-dom/client'
const Header = ({ title }) => (
    <div>
      <h1>{title}</h1>
    </div>
)
const Content = ({t1, e1, t2, e2, t3, e3}) => (
  <>
    <p>{t1} {e1}</p>
    <p>{t2} {e2}</p>
    <p>{t3} {e3}</p>
  </>
)
const Total = ({e1,e2,e3}) => (
  <>
    <p>Number of exercises = {e1+e2+e3}</p>
  </>
)
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10;
  const part2 = 'Using props to pass data'
  const exercises2 = 7;
  const part3 = 'State of a component'
  const exercises3 = 14;

  return (
    <div>
      <Header title={course} />
      <Content t1={part1} e1={exercises1} t2={part2} e2={exercises2} t3={part3} e3={exercises3}/>
      <Total e1={exercises1} e2={exercises2} e3={exercises3}/>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)