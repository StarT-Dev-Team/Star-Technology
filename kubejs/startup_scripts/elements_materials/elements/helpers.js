// priority 1000

/**
 * @param {internal.kjs.gtceu.ElementEventContext} event
 * @returns {(name: string, protons: number, neutrons: number, symbol: string) => void}
 */
global.elementFunction = (event) => {
    return (name, p, n, sym) => {
        event.create(name).protons(p).neutrons(n).symbol(sym);
    };
};
