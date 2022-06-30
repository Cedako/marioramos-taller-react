import React from 'react'
import ReactDOM from 'react-dom/client'
const Header = ({ title }) => (
    <div>
      <h1>{title}</h1>
    </div>
)
const Content = ({o}) => (
  <>
    {o.map((object)=><p key={object.key}>{object.title} {object.excercises}</p>)}
  </>
)
const Total = ({e}) => {
  var total = 0;
  e.map((number)=>total+=number.excercises)
  return (<>
    <p>Number of exercises = {total}</p>
  </>)
}
const App = () => {
  const course = 'Half Stack application development'
  const body = [
    {key: 'fundamentals',title: 'Fundamentals of React',excercises:10},
    {key: 'props',title: 'Using props to pass data',excercises:7},
    {key: 'state',title: 'State of a component',excercises:14},
    {key: 'test',title: 'Test',excercises:9}
  ]
  return (
    <div>
      <Header title={course} />
      <Content o={body}/>
      <Total e={body}/>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)