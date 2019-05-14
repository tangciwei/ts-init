"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const R = require("ramda");
const l = console.log;
var articles = [
    {
        title: "Everything Sucks",
        url: "http://do.wn/sucks.html",
        author: {
            name: "Debbie Downer",
            email: "debbie@do.wn"
        }
    },
    {
        title: "If You Please",
        url: "http://www.geocities.com/milq",
        author: {
            name: "Caspar Milquetoast",
            email: "hello@me.com"
        }
    }
];
// var isAuthor = R.identity; // change this
// assertEqual(false, isAuthor("New Guy", articles));
// assertEqual(true, isAuthor("Debbie Downer", articles));
function isAuthor(name, arr) {
    return !!R.find(item => item === name)(arr.map(R.path(['author', 'name'])));
}
l(1111, isAuthor("Debbie Downer", articles));
//# sourceMappingURL=index.js.map