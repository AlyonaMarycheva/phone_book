import React from 'react'
import Filter from './Filter'

const PersonForm = ({newName, newNumber, setNewName, setNewNumber, addPerson}) => {
    return (
      <form onSubmit = {addPerson}>
          <Filter value = {newName} setValue = {setNewName} text = "name:"/>
          <Filter value = {newNumber} setValue = {setNewNumber} text = "number:"/>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
  }
export default PersonForm