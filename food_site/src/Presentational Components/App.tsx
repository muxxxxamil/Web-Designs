import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Index } from '../Presentational Components/index';
import { Login } from '../Presentational Components/Login';
import { ShoppingCart } from '../Presentational Components/ShoppingCart'
import { ProceedPayment } from '../Presentational Components/ProceedPayment'



class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/Signup" exact component={Login} />
                <Route path="/Signin" exact component={Login} />
                <Route path="/ShoppingCart" exact component={ShoppingCart} />
                <Route path="/ProceedPayment" exact component={ProceedPayment} />
                </Switch>
            </Router>
        )
    }
}

const app = document.getElementById("home")
ReactDOM.render(<App />, app)

 