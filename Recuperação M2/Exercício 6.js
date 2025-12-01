const { cloneShallow, cloneDeep, setImmutable } = require('./immutable-lite');
const original = { a: { b: { c: 1 } }, d: [2, 3] };

const mutated = original; mutated.a.b.c = 999;
const shallow = cloneShallow(original); shallow.a.b.c = 888;
const deep = cloneDeep(original); deep.a.b.c = 777;
const immutableSet = setImmutable(original, "a.b.c", 555);
console.log({ original, mutated, shallow, deep, immutableSet });

