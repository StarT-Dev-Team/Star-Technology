GTCEuStartupEvents.registry('gtceu:element', () => {
    /**
     * @param {string} name
     * @param {number} protons
     * @param {number} neutrons
     */
    const setCounts = (name, protons, neutrons) => {
        let elem = GTElements.get(name);
        elem.protons(protons);
        elem.neutrons(neutrons);
    };

    [
        { name: 'Tritanium', protons: 125, neutrons: 198 },
        { name: 'Trinium', protons: 150, neutrons: 251 },
        { name: 'Naquadah', protons: 154, neutrons: 252 },
        { name: 'Naquadria', protons: 154, neutrons: 248 },
        { name: 'NaquadahEnriched', protons: 154, neutrons: 254 },
        { name: 'Duranium', protons: 123, neutrons: 112 },
    ].forEach((e) => setCounts(e.name, e.protons, e.neutrons));
});
