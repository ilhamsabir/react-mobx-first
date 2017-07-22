import { autorun, observable } from "mobx";

class User {
    all = observable([ {id: 1, name: "joni", age: 12},
        {id: 2, name: "Kiki", age: 12},
        {id: 3, name: "andre", age: 11}
    ])
};
const user  = window.user = new User;

export default user;