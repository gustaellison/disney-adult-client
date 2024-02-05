import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PeopleDetails = (props) => {
  let { id } = useParams();

  const [person, setPerson] = useState({});

  useEffect(() => {
    if (props.people) {
      let person = props.people.find((person) => person.id === parseInt(id));
      setPerson(person || {});
    }
  }, [props.people, id]);

  return (
    <div className='people-detail'>
      <h2>{person.name}</h2>
      <h2>Items:</h2>
      <ul>
        {person.items ? (
          person.items.map((item) => (
            <li key={item._id}>{item.title}</li>
          ))
        ) : (
          <li>No items available</li>
        )}
      </ul>
      <h2>Park: {person.park}</h2>
      <img src={person.image} alt={person.name} />
    </div>
  );
};

export default PeopleDetails;
