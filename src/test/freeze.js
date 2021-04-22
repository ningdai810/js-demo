const obj = {
    a: 1,
};
let descs = Object.getOwnPropertyDescriptors(obj);
console.log(descs);
Object.freeze(obj);
descs = Object.getOwnPropertyDescriptors(obj);
console.log(descs);
// console.log(Object.isFrozen(obj));
// Object.seal(obj);
// console.log(Object.isSealed(obj));
// obj.a = 2;
// console.log(obj);
