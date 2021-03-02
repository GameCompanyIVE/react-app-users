import React, {Component} from 'react';
import axios from 'axios';


let clear = React.createRef();

class Create extends Component {


    state = {
        name: '',
    }


    handleChange = event => {
        this.setState({name: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        const name = this.state.name;

        axios.post(`https://603d77d348171b0017b2d4ff.mockapi.io/users`, {name})
            .then(res => {
                clear.current.value = '';
                alert('Post created successfully.')
            })
    }

    render() {
        return (
            <div className="form">
                <h2>Post Request</h2>
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

export default Create;