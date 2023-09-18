import React from 'react'
import './UserItem.css'
import Avatar from '../../shared/components/UIElements/Avatar'
const UserItem = props => {

  return (
    <div className='task-wrapper'>
      <div className='user-item__content'>
        <div className='user-item__image'>
          <Avatar image={props.image}/>
        </div>
        <div >
          <p className='user-item__info'>{props.name}</p>
          <p className='user-item__info'>{props.placeCount}</p>
        </div>
      </div>
    
    </div>  
  
  
  )
}

export default UserItem
