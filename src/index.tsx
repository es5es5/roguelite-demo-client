import React from 'react'
import ReactDOM from 'react-dom'

function Welcome(props: any) {
  return <h1>Hello, {props.name} {props.age}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
);
