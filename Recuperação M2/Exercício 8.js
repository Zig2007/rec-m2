const input = process.argv[2] || "10";
console.log(`Para "${input}": Tipo: ${typeof input}, String: ${String(input)}, Number: ${Number(input)}, Boolean: ${Boolean(input)}`);
try { console.log("BigInt:", BigInt(input)); } catch (e) { console.log("BigInt erro:", e.message); }
console.log("+x:", +input, "x+\"\":", input + "", "x*1:", input * 1, "!x:", !input);
