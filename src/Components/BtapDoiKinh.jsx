import React, { Component } from "react";
import "./style.scss";
import ItemKinh from "./ItemKinh";

export default class BtapDoiKinh extends Component {
    state = {
        imgGlasses: "./glassesImage/v1.png",
        nameGlasses: "GUCCI G8850U",
        desGlasses:
            "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    };

    arrGlass = [
        {
            id: 1,
            price: 30,
            name: "GUCCI G8850U",
            url: "./glassesImage/v1.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
            id: 2,
            price: 50,
            name: "GUCCI G8759H",
            url: "./glassesImage/v2.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
            id: 3,
            price: 30,
            name: "DIOR D6700HQ",
            url: "./glassesImage/v3.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
            id: 4,
            price: 70,
            name: "DIOR D6005U",
            url: "./glassesImage/v4.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
            id: 5,
            price: 40,
            name: "PRADA P8750",
            url: "./glassesImage/v5.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
            id: 6,
            price: 60,
            name: "PRADA P9700",
            url: "./glassesImage/v6.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
            id: 7,
            price: 80,
            name: "FENDI F8750",
            url: "./glassesImage/v7.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
            id: 8,
            price: 100,
            name: "FENDI F8500",
            url: "./glassesImage/v8.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
            id: 9,
            price: 60,
            name: "FENDI F4300",
            url: "./glassesImage/v9.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
    ];

    render() {
        return (
            <div id="bgContainer">
                <h1>Bài tập đổi kính</h1>
                <div className="container">
                    <div className="row mt-5 modelContainer">
                        <div className="col-4">
                            <img
                                className="w-75"
                                src="./glassesImage/model.jpg"
                                alt="model"
                            />
                        </div>
                        <div className="col-4 modelSet">
                            <img
                                className="w-75"
                                src="./glassesImage/model.jpg"
                                alt="model"
                            />
                            <img
                                className="glassSet"
                                src={this.state.imgGlasses}
                                alt="glass"
                            />
                            <div className="glassSetDes">
                                <h2>{this.state.nameGlasses}</h2>
                                <p>{this.state.desGlasses}</p>
                            </div>
                        </div>
                    </div>
                    <div className="glassContainer">
                        <div className="row">
                            {this.arrGlass.map((item, index) => {
                                return (
                                    <div className="col-2 mt-5">
                                        <button
                                            className="btn"
                                            onClick={() => {
                                                this.setState({
                                                    imgGlasses: item.url,
                                                    nameGlasses: item.name,
                                                    desGlasses: item.desc,
                                                });
                                            }}
                                        >
                                            <ItemKinh glassItem={item} />
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
