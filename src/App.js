import React, { Component } from 'react'
import CardList from './components/card-list/card-list.component'

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
        <CardList disciples={this.state.disciples} />
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
