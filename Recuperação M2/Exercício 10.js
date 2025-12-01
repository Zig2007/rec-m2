function simulateTDZ(instructions) {
    const variables = {};
    instructions.forEach(({type, name, value}, line) => {
        console.log(`Linha ${line + 1}: ${type} ${name}`);
        if (type === 'declare' && !variables[name]) variables[name] = { stage: 'tdz' };
        else if (type === 'assign' && variables[name]?.stage !== 'none') variables[name].stage = 'initialized';
        else if (type === 'read' && variables[name]?.stage === 'initialized') console.log(`${name} lido.`);
        else console.log(`Erro TDZ: ${name}.`);
    });
}
simulateTDZ([
    { type: 'read', name: 'x' },
    { type: 'declare', name: 'x' },
    { type: 'assign', name: 'x', value: 10 },
    { type: 'declare', name: 'y' },
    { type: 'assign', name: 'y', value: 20 },
    { type: 'read', name: 'y' }
]);