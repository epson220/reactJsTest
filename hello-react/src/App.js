import React, { Component } from 'react';
//import MyComponent from './MyComponent';
//import Counter from './Counter';
//import Say from './Say';
import EventPractice from './EventPractice';
import IterationSample from './IterationSample';

// class App extends Component {
//   render(){
//     const name = 'react';
//     return <div className="react">{name}</div>;
//   }
// }

// const App = () => {
//   return (
//     <MyComponent name="React" favoriteNumber={1}>
//       리액트
//     </MyComponent>
//   );
// };

// const App = () => {
//   return <Counter />;
// };

// const App = () => {
//   return <Say />;
// };

// const App = () => {
//   return <EventPractice />;
// };

class App extends Component {
  render() {
    return <IterationSample />;
  }
}

export default App;
