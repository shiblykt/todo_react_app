import React from 'react'
import Card from '../../shared/components/UIElements/Card'
import './PlaceItem.css'
const PlaceItem = (props) => {
   console.log(props.name,'gfgfdgdf')
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="place-item__info">
          {/* <h2>{props.id}</h2> */}
          <h3>{props.title}</h3>
        </div>
        <div className="place-item__actions">
          <button>VIEW ON MAP</button>
          <button>EDIT</button>
          <button>DELETE</button>
        </div>
      </Card>
    </li>
  )
}

export default PlaceItem