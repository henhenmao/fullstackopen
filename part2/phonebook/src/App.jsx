import {useState, useEffect} from 'react'
import Filter from "./components/Filter"
import PersonForm from './components/PersonForm'
import People from './components/People'
import personService from "./services/persons"
import Alert from "./components/Alert"

const App = () => {
  const [persons, setPersons] = useState([])

  // getting the inital state of persons from the backend
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])


  // newName state is meant for controlling the form input element
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")
  const [filter, setNewFilter] = useState("")
  const [alertMessage, setAlertMessage] = useState("testing")
  const [alertType, setAlertType] = useState("good")


  const addPerson = (event) => {
    event.preventDefault()
    if (!persons.some((person) => person.name == newName)) {
      const personObject = {
        name: newName,
        number: newNumber
      }
      
      // creating persons when new person is added
      personService
        .create(personObject)
        .then(newPerson => {
          setPersons(persons.concat(newPerson))

          setAlertType("good")
          setAlertMessage(
            `Added ${newName}!`
          )
          setTimeout(() => {
            setAlertMessage(null)
          }, 5000)

          setNewName("")
          setNewNumber("")
        })

    } else {
      // alert(`${newName} already exists in the phonebook!`)
      const person = persons.find(n => n.name === newName)
      const newPerson =  {...person, number : newNumber} // creates new copy of person and changes the number

      personService
        .change(person.id, newPerson)
        .then(newPerson => {
          setPersons(persons.map(person => person.id === newPerson.id ? newPerson : person))

          setAlertType("good")
          setAlertMessage(
            `Changed ${newName}'s number!`
          )
          setTimeout(() => {
            setAlertMessage(null)
          }, 5000)

          setNewName("")
          setNewNumber("")
        })
        .catch(error => {
          console.log(`${person.name} does not exist anymore! fail!`)
          setAlertType("bad")
          setAlertMessage(
            `Person ${person.name} was already deleted from the server!`
          )
          setTimeout(() => {
            setAlertMessage(null)
          }, 5000)
        })
    // console.log(`${newName}'s number has been updated`) 
    }
  }

  const deletePerson = (id) => {
    const person = persons.find(n => n.id === id) 

    if (window.confirm(`do you want to delete ${person.name}?`)) {
      personService
      .del(id)
      .then(newPersons => {
        setPersons(persons.filter(n => n.id !== id))
      })
    } else {
      console.log(`${person.name} was not deleted`)
    }
  }


  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    // console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const filterPersons = filter === ""
    ? persons 
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Alert message={alertMessage} type={alertType}/>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <People filterPersons={filterPersons} delPerson={deletePerson}/>
    </div>
  )
}

export default App