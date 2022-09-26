import React from 'react'

export function Cart(props) { // Cart main component
    return (
        <div>
            {props.children}
        </div>
    )
}

export function Details(props: ICart) { // shows your order list
    return(
        <div className="container">
            <div className="row">
                <div className="col-md">
                    <label> Subtotal </label>
                </div>
                <div className="col-md detail-space">
                    <label> {props.subTotal} </label>
                </div>
            </div>
            <div className="row">
                <div className="col-md">
                    <label> Shipping Cost </label>
                </div>
                <div className="col-md detail-space">
                    <label> {props.shippingCost} </label>
                </div>
            </div>
            <div className="row">
                <div className="col-md">
                    <label> Total </label>
                </div>
                <div className="col-md detail-space">
                    <label> {props.totalCost} </label>
                </div>
            </div>
        </div>
    )
}

export function ProceedOrder(){ // confirm your order (Order button)
    return(
        <form action="/ProceedPayment">
            <input className="btn btn-primary" id="order" type="submit" value="Order" />
        </form>
    )
}

interface ICart{
    subTotal: number | string,
    shippingCost: number | string,
    totalCost: number | string
}