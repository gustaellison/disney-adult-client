
const People = ({ people }) => {
    return (
        <div>
            <h1>People</h1>
            {people.map((person)=> (
                <>
                <p>{person.name}</p>
                </>
            ))}

        </div>
    )
}

export default People