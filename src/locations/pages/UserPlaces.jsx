import React from 'react'
import PlaceList from '../components/PlaceList'

const UserPlaces = () => {
  const dummy_places = [
        {
            name : 'calicut',
            id: 1,
            places: 3,
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg'
        },
          {
            name : 'kannur',
            id: 2,
            places: 3,
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg'
        },
        {
          name : 'tvm',
          id: 3,
          places: 3,
          image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg'
      },
        {
          name : 'banglore',
          id: 4,
          places: 3,
          image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg'
      },{
        name : 'cochin',
        id: 5,
        places: 3,
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg'
    }
  ]
  return (
    <PlaceList items = {dummy_places} />
  )
}

export default UserPlaces