"use strict";
function removeAttribute(obj) {
    let newObj = {};
    for (let key in obj) {
        if (obj[key]) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
let inputObj = {
    a: null,
    b: false,
    c: true,
    d: 0,
    e: 1,
    f: '',
    g: 'a',
};
let result = removeAttribute(inputObj);
console.log(result);
