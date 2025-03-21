const App = () => {

  const course = {
    name:'Half Stack application development',
    parts:[
      {
        part:'Fundamentals of React',
        exercises: 10
      },
      {
        part:'Using props to pass data',
        exercises:7
      },
      {
        part:'State of a component',
        exercises: 14
      }
    ]
  }

  const Part = (props) => {
    return (
      <div>
        <p>{props.part} {props.exercises}</p>
      </div>
    )
  }

  const Header = (props) => {
    console.log(props)
    return (
      <div>
        <p>{props.course}</p>
      </div>
    )
  }

  const Content = () => {
    return (
      <div>
        <Part part={course.parts[0].part} exercises={course.parts[0].exercises}/>
        <Part part={course.parts[1].part} exercises={course.parts[1].exercises}/>
        <Part part={course.parts[2].part} exercises={course.parts[2].exercises}/>
      </div>
    )
  }

  const Total = () => {
    return (
      <div>
        <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
      </div>
    )
  }


  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App