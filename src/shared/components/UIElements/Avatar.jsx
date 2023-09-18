import React from 'react';

import './Avatar.css';

const Avatar = props => {
  return (
    <div className='avatar'>
      <img
        src={props.image}
        alt='image'
        style={{ width: '100px', height: '100px' }}
      />
    </div>
  );
};

export default Avatar;