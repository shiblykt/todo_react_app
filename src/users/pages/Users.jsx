import React from 'react'
import UserList from '../components/UserList'
const Users = () => {
    const USERS = [
        {
            name : 'shibly',
            id: 1,
            places: 3,
            image:'src/assets/react.svg'
        },
          {
            name : 'shibly',
            id: 2,
            places: 3,
            image:'src/assets/react.svg'
        },
        {
          name : 'shibly',
          id: 3,
          places: 3,
          image:'src/assets/react.svg'
      },
        {
          name : 'shibly',
          id: 4,
          places: 3,
          image:'src/assets/react.svg'
      },{
        name : 'shibly',
        id: 5,
        places: 3,
        image:'src/assets/react.svg'
    }

    ]

  return (
    
    <UserList items = {USERS} />
  
  )
}

export default Users
