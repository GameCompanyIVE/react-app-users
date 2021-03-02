import React, {Component} from 'react';
import axios from 'axios';


class Delete extends Component {

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

    deleteRow(id, e){
        axios.delete(`https://603d77d348171b0017b2d4ff.mockapi.io/users/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);

                const persons = this.state.persons.filter(item => item.id !== id);
                this.setState({ persons });
            })

    }

    render() {
        return (
            <div className="delete-wrap">
                <h2>Delete Request</h2>

                <div className="delete-block">
                    {this.state.persons.map((persons) => (
                        <div className="delete-element">
                            <p>{persons.name}</p>
                            <button onClick={(e) => this.deleteRow(persons.id, e)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Delete;
