import React, { Component } from 'react'
import { Cart, Details, ProceedOrder } from '../Container Components/Cart'
import { Front, Header, Logo } from '../Container Components/Front'

export class ShoppingCart extends Component {
    render() {
        return (
            <Cart>
                <Front>
                    <Header>
                        <Logo></Logo>
                    </Header>
                    <div id="shop-cart" className="container card">
                        <div id="cart-title" className="row">
                            <h3> Your Order </h3>
                        </div>
                        <br/>
                        <div id="shop-detials" className="row">
                            <Cart>
                                <Details subTotal={4 + '.00 €'} shippingCost="2.00 €" totalCost={6 + '.00 €'} />
                            </Cart>
                        </div>
                        <br/>
                        <div id="shop-btn" className="row">
                            <ProceedOrder></ProceedOrder>
                        </div>
                    </div>
                </Front>
            </Cart>
        )
    }
}
