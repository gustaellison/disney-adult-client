import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Client from '../assets/services/api';
import NewItem from './NewItem';

const PeopleDetails = () => {
  let { id } = useParams();
  const [person, setPerson] = useState({});

  const fetchPerson = async () => {
    let res = await Client.get(`/${id}`);
    setPerson(res.data);
  };

  useEffect(() => {
    fetchPerson();
  }, [id]);


  const handleDelete = async (itemId) => {
    try {
        await Client.delete(`/${id}/${itemId}`);
        fetchPerson();
    } catch (error) {
        console.log(error);
    }
}


  return (
    <div className='detail'>
      <img className='person-image' src={person.image} alt={person.name} />
      <h2>{person.name}</h2>
      <h2>Park: {person.park}</h2>
      <h2>Disney Accessories:</h2>
      <div className='item-container'>
        {person.items ? (
          person.items.map((item) => (
            <div key={item._id} className='item'>
              <p>{item.description}</p>
              <p>{item.price}</p>
              <img className='item-image' src={item.image} alt={item.description} />
              <button onClick={() => (handleDelete(item._id))}>X</button>
            </div>
          ))
        ) : (
          <p>No items available</p>
        )}
      </div>
      <NewItem id={id} />
    </div>
  );
};

export default PeopleDetails;
