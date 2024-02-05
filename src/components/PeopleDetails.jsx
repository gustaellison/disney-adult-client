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

    // Function to calculate total price
    const calculateTotalPrice = () => {
      if (!person.items || person.items.length === 0) {
        return 0;
      }
  
      return person.items.reduce((total, item) => total + item.price, 0);
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
      <h1>{person.name}</h1>
      <h3>Park: {person.park}</h3>
      <h2>Disney Accessories:</h2>
      <div className='item-container'>
        {person.items ? (
          person.items.map((item) => (
            <div key={item._id} className='item'>
              <p>{item.title}</p>
              <p>{item.description}</p>
              <p> $ {item.price}</p>
              <img className='item-image' src={item.image} alt={item.description} />
              <button className="delete" onClick={() => (handleDelete(item._id))}>remove</button>
            </div>
          ))
        ) : (
          <p>No items available</p>
        )}
      </div>
      <div className='total-price'>
        <p>Your Total Price: ${calculateTotalPrice()}</p>
        <p>Add more Disney Accessories to become the ultimate Disney Adult</p>
        </div>
      <NewItem id={id} />
    </div>
  );
};

export default PeopleDetails;
