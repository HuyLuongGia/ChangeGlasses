import React, { Component } from "react";

export default class ItemKinh extends Component {
    render() {
        // console.log(this.props);
        const { glassItem } = this.props;
        console.log(glassItem);
        return (
            <div>
                <img className="w-100" src={glassItem.url} alt="g1" />
            </div>
        );
    }
}
