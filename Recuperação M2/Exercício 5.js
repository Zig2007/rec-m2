function describeNumber(x) {
    const num = Number(x);
    return { originalType: typeof x, asNumber: num, isNaN: isNaN(num), isInfinite: !isFinite(num), isSafeInteger: Number.isSafeInteger(num) };
}
function toBigIntSafe(x) {
    try { return { success: true, value: BigInt(x) }; } catch (e) { return { success: false, reason: e.message }; }
}
function compareNumeric(a, b) {
    const numA = Number(a), numB = Number(b);
    if (isNaN(numA) || isNaN(numB)) return { possible: false, reason: "Não numéricos" };
    return { possible: true, result: numA > numB ? 1 : numA < numB ? -1 : 0 };
}