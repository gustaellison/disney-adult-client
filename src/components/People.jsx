const People = ({ people }) => {
    return (
        <div>
            <h1>People</h1>
            <div className="people">
                {people.map((person) => (
                    <div className="card" key={person.id}>
                        {person.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default People;
