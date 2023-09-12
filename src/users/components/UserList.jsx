import React from 'react'
import './UserList.css'
import UserItem from './UserItem'

const UserList = props => {
  if ( props === 0 ) {
    return (<h1>No users available</h1>)
  }

  return (<ul>
    {props.items.map( user => 
    <UserItem 
    key={user.id} 
    id={user.id} 
    name = {user.name}
    placeCount = {user.places}
    />
    )}
  </ul>)
}

export default UserList
