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
            </div>

          ))
        ) : (
          <p>No items available</p>
        )}

      </ul>
      <h2>Park: {person.park}</h2>
      <img src={person.image} alt={person.name} />
      <NewItem id={id} />

      </div>
    </div>
  );
        }

export default PeopleDetails
