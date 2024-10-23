function objectToString(obj) {
    return JSON.stringify(obj);
}
console.log(objectToString({a: 1, b: 2}));
console.log(objectToString([1, 2, 3]));