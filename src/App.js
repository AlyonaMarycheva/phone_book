import React, { useState, useEffect } from 'react'
//import axios from 'axios'
import Filter from './components/Filter'
import Numbers from './components/Numbers'
import PersonForm from './components/PersonForm'
import personService from './services/Persons'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [errorMessage, setErrorMesage] = useState('')


  useEffect(() => {
    personService
      .getAll()
      .then(initialPerson => setPersons(initialPerson))
      }, [])

  const addPerson = event => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    
    const index = persons.findIndex(person => person.name === personObject.name)

    if (index === -1) 
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setErrorMesage(`Added ${returnedPerson.name}`)}
        )     

    else if(window.confirm(`${personObject.name} is already added to phonebook, replace the old number with a new one?`)) 
      personService
        .update(personObject, persons[index].id)
        .then(updatedPerson => {
          setPersons(persons.map(person => person.name !== personObject.name ? person : updatedPerson ))
          setErrorMesage(`Number of ${updatedPerson.name} changed`)}
          )

    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div className='error'>{errorMessage}</div>
      <Filter value = {filter} setValue = {setFilter} text = "filter shown with"/>
      
      <h2>add a new</h2>
      <PersonForm newName = {newName} newNumber = {newNumber} setNewName = {setNewName} setNewNumber = {setNewNumber} addPerson = {addPerson}/>

      <h2>Numbers</h2>
      <Numbers persons = {persons} setPersons={setPersons} filter={filter}/>
    </div>
  )
}

export default App