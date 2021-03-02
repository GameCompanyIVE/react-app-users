import React, {Component} from 'react';
import axios from 'axios';

class Show extends Component {

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
            <div className="show-wrap">
                { this.state.persons.map(person =>
                    <div className="show-element">
                        <p>Full name: {person.name} (id {person.id})</p>
                        <p>City: {person.city}</p>
                        <p>Zip-code: {person.zipcode}</p>
                        <p>Address: {person.address}</p>
                    </div>)}
            </div>
        )
    }
}

export default Show;