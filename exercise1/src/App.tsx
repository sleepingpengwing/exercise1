import { Content, Header, Total } from "./components"


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercise1 = 10
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  const part3 = 'State of a component'
  const exercise3 = 14
  

  return(
    <div>
      <Header course={course} />
      <Content parts={ [part1, part2, part3] } exercises={ [exercise1, exercise2, exercise3] } />
      <Total total={exercise1 + exercise2 + exercise3}/>
    </div>
  )
}

export default App