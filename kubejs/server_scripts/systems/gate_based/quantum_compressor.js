// ServerEvents.recipes(event => {

//     const id = global.id;

//     /*
//     **   Singularities
//     **   =====================
//     **   Properties must satisfy:
//     **   - Total: Intangibility + Paradoxicity + Causality = 15
//     **   - Range: Each property must be between 1-10
//     **   - Balance: Average of all properties in the set must be 5±1
//     */
//     [
//         { number: 0, name: 'nebular', intangibility: 1, paradoxicity: 5, causality: 9 },
//         { number: 1, name: 'zenith', intangibility: 2, paradoxicity: 8, causality: 5 },
//         { number: 2, name: 'hyperion', intangibility: 8, paradoxicity: 2, causality: 5 },
//         { number: 3, name: 'spectral', intangibility: 9, paradoxicity: 4, causality: 2 },
//         { number: 4, name: 'astral', intangibility: 5, paradoxicity: 9, causality: 1 },
//     ].forEach(singularity => {
//         const { number, name, intangibility, paradoxicity, causality } = singularity;
//         event.recipes.gtceu.quantum_compressor_infusion(id(`${name}_singularity`))
//             .itemInputs('gtceu:gravi_star')
//             .inputFluids(`gtceu:intangibility_infusion ${intangibility}000`, `gtceu:paradoxicity_infusion ${paradoxicity}000`, `gtceu:causality_infusion ${causality}000`)
//             .itemOutputs(`kubejs:singularity_${name}`)
//             .duration(1200)
//             .EUt(GTValues.VA[GTValues.LuV])
//             .circuit(number);
//     });

//     /*
//     ** Infusion materials
//     ** =====================
//     ** Ingot mode:
//     ** 1 Ingot = 1 mB infusion of specific type
//     ** Block mode:
//     ** 1 Block = 6 mB inusion of speicific type + 3 mB of secondary infusion type //changed to 8,4 to reduce bloat of cost, time adjusted consequently
//     ** =====================
//     ** Infusion types:
//     ** Intangibility - common trait (easily produced as main type)
//     ** Paradoxicity - balanced trait (can be produced equaly from main and secondary types)
//     ** Causality - expensive trait (not viable to be gotten as main trait)
//     */
//    [
//     { mat: 'gtceu:beryllium', typeA: 'intangibility', typeB: 'paradoxicity' },
//     { mat: 'gtceu:bismuth', typeA: 'intangibility', typeB: 'causality' },
//     { mat: 'gtceu:tantalum', typeA: 'paradoxicity', typeB: 'causality' },
//     { mat: 'gtceu:uranium', typeA: 'paradoxicity', typeB: 'intangibility' },
//     { mat: 'gtceu:ruthenium', typeA: 'causality', typeB: 'intangibility' },
//     { mat: 'gtceu:rhodium', typeA: 'causality', typeB: 'paradoxicity' },
//    ].forEach(material => {
//         const { mat, typeA, typeB } = material;
//         const name = mat.split(':')[1];
//         // event.recipes.gtceu.quantum_compressor_extraction(id(`${name}_ingot_extraction`))
//         //     .itemInputs(`${mat}_ingot`)
//         //     .outputFluids(`gtceu:${typeA}_infusion 1`)
//         //     .duration(40)
//         //     .EUt(GTValues.VHA[GTValues.LuV]);

//         event.recipes.gtceu.quantum_compressor_extraction(id(`${name}_block_extraction`))
//             .itemInputs(`${mat}_block`)
//             .outputFluids(`gtceu:${typeA}_infusion 18`, `gtceu:${typeB}_infusion 6`)
//             .duration(90 * 9)
//             .EUt(GTValues.VHA[GTValues.LuV]);
//    });

// });
