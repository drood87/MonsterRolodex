import React, { Component } from 'react'
import CardList from './components/card-list/card-list.component'
import './App.css'
import SearchBox from './components/search-box/search-box.component'

export default class App extends Component {
  state = {
    monsters: [],
    searchField: '',
  }

  async componentDidMount() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    this.setState({ monsters: users })
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Cats Rolodex</h1>
        <SearchBox placeholder="search cats" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}
