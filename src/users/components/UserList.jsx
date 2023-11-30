import React from 'react'
import './UserList.css'
import UserItem from './UserItem'

const UserList = props => {
  if ( props.items.length === 0 ) {
    return (
    <div>
      <h1>No users available</h1>
    </div>
    
    )
  }

  return (
  <div className='grid-container'>

    {props.items.map( user => 
    <UserItem 
    image={user.image}
    key={user.id} 
    id={user.id} 
    name = {user.name}
    placeCount = {user.places}
    />
    )}

  </div>
  )
  
}

export default UserList
