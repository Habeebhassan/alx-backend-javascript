function calculateNumber(a, b) {
    const ant = Math.round(a);
    const bat = Math.round(b);
    const c = ant + bat;
    return c;
}

module.exports = calculateNumber;
