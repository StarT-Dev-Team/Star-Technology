// priority: 10000

/**
 * Test Namespace.
 * Contains utility functions for testing.
 * Must not be using in a production environment.
 */
const T = {
    /** @type {(item: string) => void} */
    testItem: (item) => {
        let itemStack = Item.of(item);
        if (itemStack.isEmpty()) {
            console.error(`[TEST FAILED] Item does not exists: ${item}`);
        }
    },
    /** @type {(items: string[]) => string[]} */
    testItems: (items) => {
        items.forEach((item) => {
            T.testItem(item);
        });
        return items;
    },
    /** @type {(items: string[]) => string[]} */
    ti: (items) => T.testItems(items),
    /** @type {(fluid: string) => void} */
    testFluid: (fluid) => {
        let fluidStack = Fluid.of(fluid);
        if (fluidStack.isEmpty()) {
            console.error(`[TEST FAILED] Fluid does not exists: ${fluid}`);
        }
    },
    /** @type {(fluids: string[]) => string[]} */
    testFluids: (fluids) => {
        fluids.forEach((fluid) => {
            T.testFluid(fluid);
        });
        return fluids;
    },
    /** @type {(fluids: string[]) => string[]} */
    tf: (fluids) => T.testFluids(fluids),
};
