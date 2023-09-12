import React from 'react'
import './UserItem.css'
const UserItem = props => {

  return (<>
    <div>
      
    <p>{props.id}</p>  
    <p>{props.name}</p>
    <p>{props.placeCount}</p>
    </div>  
  
  
  </>)
}

export default UserItem
