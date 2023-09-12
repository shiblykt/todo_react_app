import React from 'react'
import UserList from '../components/UserList'
const Users = () => {
    const USERS = [
        {
            name : 'shibly',
            id: 1,
            places: 3
        }
    ]

  return (
    <>
    <UserList items = {USERS} />
    </>
  )
}

export default Users
