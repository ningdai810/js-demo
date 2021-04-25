// 都表示字符Å
const a1 = String.fromCharCode(0x00c5);
const a2 = String.fromCharCode(0x212b);
const a3 = String.fromCharCode(0x0041, 0x030a);
console.log(a1, a2, a3);

console.log(a1 === a2); // false
console.log(a1.normalize('NFC') === a2.normalize('NFC')); // false
