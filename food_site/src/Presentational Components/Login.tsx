import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { Front, Header, Logo } from '../Container Components/Front'
import { Signin, Signup, LoginForm, Form, FormInput } from '../Container Components/Form'

export class Login extends Component<{}, {initial: boolean}> {
    constructor(props){
        super(props)
        this.handleSignin = this.handleSignin.bind(this)
        this.handleSignup = this.handleSignup.bind(this)
        this.state = {
            initial: true      
        }
    }
    handleSignin(e){
        this.setState({
            initial: false
        })
        e.preventDefault()
    }
    handleSignup(){
        this.setState({
            initial: true
        })
    }
    render() {
        if(this.state.initial){
            return(
                <Signup>
                    <Front>
                        <Header>
                            <Logo></Logo>
                        </Header>
                        <LoginForm>
                            <Form>
                                <h4> Register </h4> <br/>
                                <FormInput type="text" btnClicked={null} Id="txt1" valueInside="First Name"></FormInput>
                                <FormInput type="text" btnClicked={null} Id="txt1" valueInside="Last Name"></FormInput>
                                <FormInput type="email" btnClicked={null} Id="em1" valueInside="Enter Email"></FormInput>
                                <FormInput type="email" btnClicked={null} Id="em2" valueInside="Re-Enter Email"></FormInput>
                                <FormInput type="text" btnClicked={null} Id="txt2" valueInside="Password"></FormInput>
                                <FormInput type="text" btnClicked={null} Id="txt3" valueInside="Confirm Password"></FormInput>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md pb-2">
                                            <FormInput btnClicked={null} type="btn" Id="btn1" valueInside="Create Account"></FormInput>
                                        </div>
                                        <div className="col-md">
                                            <Link to="/Signin">
                                                <FormInput btnClicked={this.handleSignin} type="btn" Id="btn2" valueInside="Already have an account"></FormInput>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </LoginForm>
                    </Front>
                </Signup>
            )
        }else{
            return(
                <Signin>
                    <Front>
                        <Header>
                            <Logo></Logo>
                        </Header>
                        <LoginForm>
                            <Form>
                                <h4> Login </h4> <br/>
                                <FormInput btnClicked={null} type="text" Id="txt1" valueInside="User Name"></FormInput>
                                <FormInput btnClicked={null} type="text" Id="txt2" valueInside="Password"></FormInput>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md pb-2">
                                            <FormInput btnClicked={null} type="btn" Id="btn1" valueInside="Login"></FormInput>
                                        </div>
                                        <div className="col-md">
                                            <Link to="/Signup">
                                                <FormInput btnClicked={this.handleSignup} type="btn" Id="btn2" valueInside="Signup"></FormInput>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </LoginForm>
                    </Front>
                </Signin>
            )
        }
    }
}


