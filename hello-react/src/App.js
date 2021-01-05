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

import ValidationSample from './ValidationSample';

// class App extends Component {
//   render() {
//     return <ValidationSample />;
//   }
// }

// import ScrollBox from './ScrollBox';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ScrollBox ref={(ref) => (this.scrollBox = ref)}></ScrollBox>
//         <button onClick={() => this.scrollBox.scrollToBottom()}>
//           맨 밑으로
//         </button>
//       </div>
//     );
//   }
// }

import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color}></LifeCycleSample>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
