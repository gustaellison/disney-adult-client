import { Link } from 'react-router-dom'

const People = ({ people }) => {
    return (
      <div>
        <h1>Disney Adults</h1>
        <div className="people">
          {people.map((person) => (
            // eslint-disable-next-line react/jsx-key
            <Link to={`/${person._id}`} key={person._id}>
              <div className="card">
                <img src={person.image} alt={person.name} />
                <div className="card-content">
                  <h2>{person.name}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  };

export default People;
