
import Person from "./Person"

const People = ({filterPersons}) => {
    return (
        <ul>
            {filterPersons.map(person => 
            <Person key={person.name} person={person}/>
            )}
        </ul> 
    )
}

export default People