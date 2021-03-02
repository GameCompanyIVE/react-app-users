import React from 'react';
import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import Delete from "./components/Delete";
import Show from "./components/Show";
import Edit from "./components/Edit";


const App = () => {
    return(
        <Router>
        <div className="user-wrap">
            <ul className="user-menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/create">Create</Link>
                </li>
                <li>
                    <Link to="/delete">Delete</Link>
                </li>
                <li>
                    <Link to="/show">Show</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/create">
                    <Create />
                </Route>
                <Route path="/delete">
                    <Delete />
                </Route>
                <Route path="/show">
                    <Show />
                </Route>
            </Switch>
        </div>
    </Router>
    )
}

export default App;
