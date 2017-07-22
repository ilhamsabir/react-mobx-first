import React, { Component } from 'react';
import { observer } from "mobx-react";

// @observer(['contacts'])
@observer
class ListContacts extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const ListContacs = contacts.all.map((item, index) =>
            <li key={index}>{item.name}, {item.email}</li>
        );
        return (
            <ul>
             {ListContacs}   
            </ul>        
        );
  }
}

export default ListContacts;