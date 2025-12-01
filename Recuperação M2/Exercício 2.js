function explainEqual(a, b) {
    const typeA = typeof a, typeB = typeof b;
    let exp = `Comparando ${a} (${typeA}) == ${b} (${typeB}):\n`;
    if (typeA === typeB) exp += `- Sem conversão. Resultado: ${a == b}\n`;
    else if ((typeA === 'string' && typeB === 'number') || (typeA === 'number' && typeB === 'string')) exp += `- Para número: ${Number(a)} == ${Number(b)}. Resultado: ${a == b}\n`;
    else exp += `- Outros: conversão. Resultado: ${a == b}\n`;
    exp += `Justificativa: Coerção implícita prioriza números.`;
    return exp;
}
function inspectValue(x) {
    return { string: String(x), number: Number(x), boolean: Boolean(x), isBigInt: typeof x === 'bigint' };
}
function compareAll(a, b) {
    return { looseEqual: a == b, strictEqual: a === b, objectIs: Object.is(a, b) };
}
