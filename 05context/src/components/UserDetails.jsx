import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../context/Context';

function UserDetails() {
  const { id } = useParams();
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>I am userDetails</h1>
      {user.map((item) => {
        if (item.id === parseInt(id)) {
          return (
            <div key={item.id}>
              <h1>{item.name}</h1>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default UserDetails;
