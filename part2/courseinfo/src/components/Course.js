const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
  const Part = ({ name, exercises }) => {
    return (
      <li>{name} {exercises}</li>
    )
  }
  
  const Content = ({ parts }) => {
    return (
      <ul>
        {parts.map(part =>
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        )}
      </ul>
    )
  }
  
  const Total = ({ exercises }) => {
    const total = exercises.reduce((a, b) => a + b)
    return (
      <p><b>Total of {total} exercises</b></p>
    )
  }
  
  const Course = ({ course }) => {
    const exercises = course.parts.map(part => part.exercises)
    return (
      <div>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total exercises={exercises} />
      </div>
    )
  }

  export default Course