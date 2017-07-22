
import React, { Component } from 'react';
import { observer } from "mobx-react";

@observer
class ListUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: user.all
        }
    }
    _onClick(name) {
        console.log(name);
    }        
    render() {
        const listUser = this.state.user.map((item, index) =>
                <li key={index} onClick={this._onClick.bind(this, item.name)}>{item.name}, {item.age}</li>
            );
        return (     
         <ul>{listUser}</ul>
        );
    }
}

export default ListUser;
