import React, { Component } from 'react'
import { Front, Header, Logo, MenuItem, MenuItemWithKG } from '../Container Components/Front'
import { Products } from '../packages/helper/PHelper'
import { Items } from '../packages/helper/Data'
import '../main.css'

export class Index extends Component {
    render() {
        const Döner = Items[0].Döner.map((arr, i) => {
            return(
                <MenuItem Id={Items[0].Döner[i].Id}
                          category={Items[0].Döner[i].Flavor}
                          family={Items[0].Döner[i].Dressing}
                          price={Items[0].Döner[i].Price} />
            )
        })
        const Pizzas = Items[0].Pizza.map((arr, i) => {
            return(
                <MenuItem Id={Items[0].Pizza[i].Id}
                          category={Items[0].Pizza[i].Flaour}
                          family={Items[0].Pizza[i].Dressing}
                          price={Items[0].Pizza[i].Price} />
            )
        })
        const Aufläufle = Items[0].Aufläufle.map((arr, i) => {
            return(
                <MenuItem Id={Items[0].Aufläufle[i].Id}
                          category={Items[0].Aufläufle[i].Flavor}
                          family={Items[0].Aufläufle[i].Dressing}
                          price={Items[0].Aufläufle[i].Price} />
            )
        })
        const Indische = Items[0].Indische.map((arr, i) => {
            return(
                <MenuItem Id={Items[0].Indische[i].Id}
                          category={Items[0].Indische[i].Flavor}
                          family={Items[0].Indische[i].Dressing}
                          price={Items[0].Indische[i].Price} />
            )
        })
        const Salate = Items[0].Salate.map((arr, i) => {
            return(
                <MenuItemWithKG Id={Items[0].Salate[i].Id}
                          category={Items[0].Salate[i].Flavor}
                          family={Items[0].Salate[i].Dressing}
                          größPrice={Items[0].Salate[i]["Groß Price"]}
                          kleinPrice={Items[0].Salate[i]["Klein Price"]} />
            )
        })
        // const Dessert = Products.Desserts.map((arr, i) => {
        //     return(
        //         <MenuItem Id={Products.Desserts[i].Id}
        //                   category={Products.Desserts[i].category}
        //                   family={Products.Desserts[i].family}
        //                   price={parseInt(Products.Desserts[i].price)} />
        //     )
        // })
        // const IceCream = Products["Drinks/Ice Cream"].map((arr, i) => {
        //     return(
        //         <MenuItem Id={Products["Drinks/Ice Cream"][i].Id}
        //                   category={Products["Drinks/Ice Cream"][i].category}
        //                   family={Products["Drinks/Ice Cream"][i].family}
        //                   price={parseInt(Products["Drinks/Ice Cream"][i].price)} />
        //     )
        // })
        return (
            <Front>
                <div className="container-fuild">
                    <Header>
                        <Logo></Logo>
                    </Header>
                    <div className="section">
                        <div className="container">
                            <div className="row pack">
                                <div className="Cat-Image img1"></div>
                                <h1 className="centered"> Döner </h1>
                            </div>
                            <div className="row">
                                {Döner}
                            </div>
                            <hr/>
                        </div>
                    </div>
                    <div className="section">
                        <div className="container">
                            <div className="row pack">
                                <div className="Cat-Image img2"></div>
                                <h1 className="centered"> Pizzas </h1>
                            </div>
                            <div className="row">
                                {Pizzas}
                            </div>
                            <hr/>
                        </div>
                    </div>
                    <div className="section">
                        <div className="container">
                            <div className="row pack">
                                <div className="Cat-Image img3"></div>
                                <h1 className="centered"> Aufläufle </h1>
                            </div>
                            <div className="row">
                                {Aufläufle}
                            </div>
                            <hr/>
                        </div>
                    </div>
                    <div className="section">
                        <div className="container">
                            <div className="row pack">
                                <div className="Cat-Image img4"></div>
                                <h2 className="centered"> Indische </h2>
                            </div>
                            <div className="row">
                                {Indische}
                            </div>
                            <hr/>
                        </div>
                    </div>
                    <div className="section">
                        <div className="container">
                            <div className="row pack">
                                <div className="Cat-Image img5"></div>
                                <h2 className="centered"> Salate </h2>
                            </div>
                            <div className="row">
                                {Salate}
                            </div>
                            <hr/>
                        </div>
                    </div>
                </div>
            </Front>
        )
    }
}


