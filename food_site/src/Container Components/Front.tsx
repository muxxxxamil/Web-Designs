import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../main.css'

export function Front(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}

export function Header(props) {
    return (
            <div className="card fixed-top">
                <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                    <Link to="/">
                        <Navbar.Brand>
                            {props.children}
                        </Navbar.Brand>
                    </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    
                    <Nav className="mr-auto services">
                    <Link to="/"> Döner </Link>
                    <Link to="/"> Finger Food </Link>
                    <Link to="/"> Schnitzel </Link>
                    <Link to="/"> Pizza </Link>
                    <Link to="/"> Pasta </Link>
                    <Link to="/"> Salate </Link>
                    <Link to="/"> Aufläufle </Link>
                    <Link to="/"> Burger </Link>
                    <Link to="/"> Indisch </Link>
                    <Link to="/"> Asiatisch </Link>
                    <Link to="/"> Getränke </Link>
                    <Link to="/"> Vegetarischche Falafel </Link>

                    </Nav>
                    <Nav>
                        <Link to="/Signin">
                            <li className="navBar-last">Login</li>
                        </Link>
                        <Link to="/ShoppingCart">
                            <li className="navBar-last">Show Order</li>
                        </Link>
                        <Link to="/">
                            <li className="navBar-last">ENG</li>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
    )
}

export function Logo() {
    return (
        <div className="rest-logo">
            <div className="rest-logo-container">
                <div className="rest-logo-inner card">
                    <div className="logo"></div>
                </div>
            </div>      
        </div>
    )
}

export function MenuItem(props: IMenuItems) {
    return (
        <div id={props.Id} className="meal-menu container card">
                <div className="row p-4">
                    <div className="col-lg-10 pt-4">
                        <div className="row pb-4">
                            <h5> {props.category}</h5>
                        </div>
                        <div className="row">
                            <label className="Description"> {props.family}</label>
                        </div>
                        <div className="row">
                            <label> {props.price} €</label>
                        </div>
                    </div>
                    <div className="col-lg-2 btn-container">
                        <input className="btn btn-primary addbtn" type="button" value="Add"/>
                    </div>
                </div>
        </div>
    )
}

export function MenuItemWithKG(props: IMenuItemsWithKG) {
    return (
        <div id={props.Id} className="meal-menu container card">
                <div className="row p-4">
                    <div className="col-lg-10 pt-4">
                        <div className="row pb-4">
                            <h5> {props.category}</h5>
                        </div>
                        <div className="row">
                            <label className="Description"> {props.family}</label>
                        </div>
                        <div className="row">
                            <p><span> klein : {props.kleinPrice} €, Größ : {props.größPrice} €</span></p>
                        </div>
                    </div>
                    <div className="col-lg-2 btn-container">
                        <input className="btn btn-primary addbtn" type="button" value="Add"/>
                    </div>
                </div>
        </div>
    )
}

export interface IMenuItems{
    category: string,
    family: string,
    price: number,
    Id: string
}
export interface IMenuItemsWithKG{
    category: string,
    family: string,
    kleinPrice: number,
    größPrice: number,
    Id: string
}


