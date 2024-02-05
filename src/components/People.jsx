import { Link } from 'react-router-dom'

const People = ({ people }) => {
    return (
        <div>
            <h1>People</h1>
            <div className="people">
                {people.map((person) => (
                    // eslint-disable-next-line react/jsx-key
                    <Link to={`/${person._id}`}>
                    <div className="card" key={person._id}>
                        <img src={person.image} alt={person.name} height="200px" />
                        {person.name}
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default People;
