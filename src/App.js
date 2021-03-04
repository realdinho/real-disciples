import React, { Component } from 'react'
import CardList from './components/card-list/card-list.component'

class App extends Component {
  constructor() {
    super();

    this.state = {
      disciples: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ disciples: users }))
  }

  render() {
    const { disciples, searchField} = this.state
    const filteredDisciples = disciples.filter(disciple => 
      disciple.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <input 
          type='search' 
          placeholder='search disciples'
          onChange={e => this.setState({ searchField: e.target.value })} 
        />
        <CardList disciples={filteredDisciples} />
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
