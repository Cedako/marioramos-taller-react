import React from 'react'
import ReactDOM from 'react-dom/client'
const Header = ({ title }) => (
    <div>
      <h1>{title}</h1>
    </div>
)
const Content = ({topic, exercises}) => (
  <>
    <p>{topic} {exercises}</p>
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
      <Content topic={part1} exercises={exercises1}/>
      <Content topic={part2} exercises={exercises2}/>
      <Content topic={part3} exercises={exercises3}/>
      <Total e1={exercises1} e2={exercises2} e3={exercises3}/>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)