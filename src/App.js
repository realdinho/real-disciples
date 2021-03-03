import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      disciples: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ disciples: users }))
  }

  render() {
    return (
      <div className="App">
        {
          this.state.disciples.map(d => (
            <h1 key={ d.id }>{ d.name }</h1>
          ))
        }
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
