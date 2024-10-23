function stringToBoolean(value) {
    return (value === 'true' || value === '1') ? true : false;
}
console.log(stringToBoolean("true"));
console.log(stringToBoolean("false"));
console.log(stringToBoolean("1"));
console.log(stringToBoolean("0"));
console.log(stringToBoolean([]));
console.log(stringToBoolean({}));
console.log(stringToBoolean(1));