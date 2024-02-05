import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Client from '../assets/services/api'
import NewItem from './NewItem';


const PeopleDetails = () => {

  let { id } = useParams();
  const [person, setPerson] = useState({});

  const fetchPerson = async ( ) => {
    let res = await Client.get(`/${id}`)
    setPerson(res.data)
  }

  useEffect(() => {
    fetchPerson()
  }, [id]);

  return (
    <div className='detail'>
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
      <NewItem id={id} />
    </div>
  );
};

export default PeopleDetails;
