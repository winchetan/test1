import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  render() {
      return (
          <h2>Hello World !!!</h2>
      );
  }
}

ReactDom.render(
  <MyComponent/>,document.getElementById('content')
);
