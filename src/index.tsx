import React from 'react'
import ReactDOM from 'react-dom'



const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

function formatName(user: any) {
  return user.firstName + ' ' + user.lastName;
}

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
