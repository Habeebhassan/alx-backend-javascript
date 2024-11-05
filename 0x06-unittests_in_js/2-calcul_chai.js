function calculateNumber(type, a, b) {
    const ant = Math.round(a);
    const bat = Math.round(b);
    let c = 0;
    switch (type) {
    case 'SUM':
	    c = ant + bat;
	    break;
    case 'SUBTRACT':
	    c = ant - bat;
	    break;
    case 'DIVIDE':
        if (bat === 0) {
            c = "Error";
        } else {
            c = ant / bat;
        }
        break;
    }
    return c;
}

module.exports = calculateNumber;