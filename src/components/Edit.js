import React, {Component} from 'react';
import axios from 'axios';

let clear = React.createRef();

class Edit extends Component {

    state = {
        persons: [],
        name: ''
    }

    componentDidMount() {
        axios.get(`https://603d77d348171b0017b2d4ff.mockapi.io/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    handleChange = event => {
        this.setState({name: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();


        axios.put(`https://603d77d348171b0017b2d4ff.mockapi.io/users/ID`)
            .then(res => {
                clear.current.value = '';
                alert('Post created successfully.')
            })
    }

    render() {
        return (
            <div className="form">
                <h2>Post Request</h2>
                <div className="delete-block">
                    {this.state.persons.map((persons) => (
                        <div className="delete-element">
                            <p>{persons.name}</p>
                            {/*<button onClick={(e) => this.deleteRow(persons.id, e)}>Delete</button>*/}
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                    Person Name:
                                    <input type="text" ref={clear} name="name" required onChange={this.handleChange}/>
                                </label>
                                <button type="submit">Add</button>
                            </form>
                        </div>
                    ))}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person Name:
                        <input type="text" ref={clear} name="name" required onChange={this.handleChange}/>
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default Edit;