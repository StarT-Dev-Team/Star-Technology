// priority 1000

global.elementFunction = (event) => {
    return (name, p, n, sym) => {
        event.create(name).protons(p).neutrons(n).symbol(sym);
    };
};
