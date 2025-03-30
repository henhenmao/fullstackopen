
import Person from "./Person"

const People = ({filterPersons, delPerson}) => {
    return (
        <ul>
            {filterPersons.map(person => 
            <Person key={person.id} person={person} deletePerson={() => delPerson(person.id)}/>
            )}
        </ul> 
    )
}

export default People