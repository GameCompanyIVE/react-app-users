import React, {Component} from 'react';
import axios from 'axios';

class Home extends Component {

  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://603d77d348171b0017b2d4ff.mockapi.io/users`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
  }

  render() {
    return (
        <ul className="user-list">
          { this.state.persons.map(person => <li>{person.name} (id {person.id})</li>)}
        </ul>
    )
  }

}

export default Home;
