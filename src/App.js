import React, { Component } from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

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

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { disciples, searchField} = this.state
    const filteredDisciples = disciples.filter(disciple => 
      disciple.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <SearchBox 
          placeholder="search disciples" 
          handleChange={this.handleChange}
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
