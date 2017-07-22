
import React, { Component } from 'react';
import ListUser from "./components/ListUser.jsx";
import ListContacts from "./components/ListContacts.jsx";

class Main extends React.Component {

  render() {   
    return (
      <div>
       <h2>Hai .. ..</h2>
         <ListUser />
         <ListContacts />
      </div>
    );
  }
}

export default Main;
