// priority: 10000

// T - test namespace
// eslint-disable-next-line no-unused-vars
const T = {
    /** @type {(items: string[]) => string[]} */
    testItems: function (items) {
        items.forEach((item) => {
            let itemStack = Item.of(item);
            if (itemStack.isEmpty()) {
                console.log(`[TEST FAILED] Item does not exists: ${item}`);
            }
        });
        return items;
    },
    /** @type {(fluids: string[]) => string[]} */
    testFluids: (fluids) => {
        fluids.forEach((fluid) => {
            let fluidStack = Fluid.of(fluid);
            if (fluidStack.isEmpty()) {
                console.log(`[TEST FAILED] Fluid does not exists: ${fluid}`);
            }
        });
        return fluids;
    },
};
