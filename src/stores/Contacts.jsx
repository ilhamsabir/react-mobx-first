"use strict";
import { autorun, observable } from "mobx";
// const contacts = observable([ {id: 1, name: "joni", email: "jon"},
//     {id: 2, name: "Kiki", email: "kiki"},
//     {id: 3, name: "andre", email: "andre"}
// ]);
class Contacts {
    all = observable([ {id: 1, name: "joni", email: "jon"},
        {id: 2, name: "Kiki", email: "kiki"},
        {id: 3, name: "andre", email: "andre"}
    ])
};
const contacts = window.contacts = new Contacts;

export default contacts;
 
autorun(() => {
  console.log(contacts.all)  
})