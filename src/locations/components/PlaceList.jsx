import React from 'react';
import PlaceItem from './PlaceItem';
import './PlaceList.css'

const PlaceList = (props) => {
     if ( props.items.length === 0 ) {
    return (
    <div>
      <h1>No users available</h1>
      <button>share places</button>
    </div>
    )
  }
  return (

    <div>
    
      <ul className="place-list">
      {props.items.map(place => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.name}
        />
      ))}
    </ul>

    </div>
  )
}

export default PlaceList