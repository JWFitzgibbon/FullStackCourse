// Using purely function declarations for this one
import { useState } from 'react'
import Person from './components/Person'

function App(props) {
  const [persons, setPersons] = useState(props.persons)
  const [newName, setNewName] = useState('')

  function handleNewName(event) {
    setNewName(event.target.value)
  }

  function addName(event) {
    event.preventDefault()
    const nameObject = {
      id: persons.length + 1,
      name: newName
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  return(
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          Name: <input 
          value={newName}
          onChange={handleNewName}/>
        </div>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Person key={person.id} person={person}/>  
        )}
      </ul>
    </div>
  )
}

export default App;
