import React from 'react'
import personService from '../services/Persons'

const Numbers = ({persons, setPersons, filter}) => {
    const regexp = new RegExp(`${filter}`, 'i')
    const deletePerson = id => {
        const deletedPerson = persons.find(person => person.id === id)
        if (window.confirm(`Delete ${deletedPerson.name}?`)){
          const result = persons.filter(person => person !== deletedPerson) 
          personService.remove(id)
    
        setPersons(result)
        }
      }
    return (
        <div>
        {
        persons
            .filter(person => regexp.test(person.name))
            .map(
            person => 
                <div key = {person.id}>
                {person.name} {person.number}
                <button onClick = {() => deletePerson(person.id)}
                    >delete
                </button>
                </div>
            )
        }
        </div>)
}



export default Numbers