function foo(obj) {
    obj.name = 'foo';
    obj = {};
}

const obj = {};
foo(obj);
console.log(obj); // { name: 'foo' }
