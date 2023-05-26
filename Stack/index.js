"use strict";
var user = {
    data: [
        {name: "wood", age: 37},
        {name: "sandeep", age:33}
    ],
    clickHandler: function(event) {
        console.log(event.data[0].name + " " + event.data[0].age);
    }
}

function userClicked(handler) {
    handler(user);
}
userClicked(user.clickHandler)

var person = {
    firstName: 'first',
    lastName: 'last',
    showFullName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
}

person.showFullName();