import React from 'react'
import './UserItem.css'
import Avatar from '../../shared/components/UIElements/Avatar'
import { Link } from 'react-router-dom';

const UserItem = props => {

  return (
    <div className='task-wrapper'>
      <div className='user-item__content'>
        <Link to={`/${props.id}/places`}>

        <div className='user-item__image'>
          <Avatar image={props.image}/>
        </div>
        <div >
          <p className='user-item__info'>{props.name}</p>
          <p className='user-item__info'>{props.placeCount}</p>
        </div>
        </Link>
      </div>
    
    </div>  
  
  
  )
}

export default UserItem
