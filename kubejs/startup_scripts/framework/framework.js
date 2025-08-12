// priority: 100000

const controller = {
    w_layers: [],
    elements: [],
    materials: [],
    items: [],
    blocks: [],
    r_types: [],
    machines: [],
    sort_by_priority: () => {
        controller.w_layers.sort((a, b) => b.p - a.p);
        controller.elements.sort((a, b) => b.p - a.p);
        controller.materials.sort((a, b) => b.p - a.p);
        controller.items.sort((a, b) => b.p - a.p);
        controller.blocks.sort((a, b) => b.p - a.p);
        controller.r_types.sort((a, b) => b.p - a.p);
        controller.machines.sort((a, b) => b.p - a.p);
    },
    register: () => {
        controller.sort_by_priority();

        GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
            for (let i = 0; i < controller.w_layers.length; i++) {
                controller.w_layers[i].f(event);
            }
        });

        GTCEuStartupEvents.registry('gtceu:element', event => {
            for (let i = 0; i < controller.elements.length; i++) {
                controller.elements[i].f(event);
            }
        });

        GTCEuStartupEvents.registry('gtceu:material', event => {
            for (let i = 0; i < controller.materials.length; i++) {
                controller.materials[i].f(event);
            }
        });

        StartupEvents.registry('item', event => {
            for (let i = 0; i < controller.items.length; i++) {
                controller.items[i].f(event);
            }
        });

        StartupEvents.registry('block', event => {
            for (let i = 0; i < controller.blocks.length; i++) {
                controller.blocks[i].f(event);
            }
        });

        GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
            for (let i = 0; i < controller.r_types.length; i++) {
                controller.r_types[i].f(event);
            }
        });

        GTCEuStartupEvents.registry('gtceu:machine', event => {
            for (let i = 0; i < controller.machines.length; i++) {
                controller.machines[i].f(event);
            }
        });
    },
    add: (type, func, priority) => {
        switch (type) {
            case 'world_gen_layer': 
                controller.w_layers.push({f: func, p: priority});
                break;
            case 'element': 
                controller.elements.push({f: func, p: priority});
                break;
            case 'material': 
                controller.materials.push({f: func, p: priority});
                break;
            case 'item': 
                controller.items.push({f: func, p: priority});
                break;
            case 'block': 
                controller.blocks.push({f: func, p: priority});
                break;
            case 'recipe_type': 
                controller.r_types.push({f: func, p: priority});
                break;
            case 'machine': 
                controller.machines.push({f: func, p: priority});
                break;
        }
    },
    add: (type, func) => {
        switch (type) {
            case 'world_gen_layer': {
                let priority = controller.w_layers.reduce((previous, current) => (current.p > previous.p) ? current.p : previous.p, 0) + 1;
                controller.w_layers.elements.push({f: func, p: priority});
                break;
            }
            case 'element': {
                let priority = controller.elements.reduce((previous, current) => (current.p > previous.p) ? current.p : previous.p, 0) + 1;
                controller.elements.push({f: func, p: priority});
                break;
            }
            case 'material': {
                let priority = controller.materials.reduce((previous, current) => (current.p > previous.p) ? current.p : previous.p, 0) + 1;
                controller.materials.push({f: func, p: priority});
                break;
            }
            case 'item': {
                let priority = controller.items.reduce((previous, current) => (current.p > previous.p) ? current.p : previous.p, 0) + 1;
                controller.items.push({f: func, p: priority});
                break;
            }
            case 'block': {
                let priority = controller.blocks.reduce((previous, current) => (current.p > previous.p) ? current.p : previous.p, 0) + 1;
                controller.blocks.push({f: func, p: priority});
                break;
            }
            case 'recipe_type': {
                let priority = controller.r_types.reduce((previous, current) => (current.p > previous.p) ? current.p : previous.p, 0) + 1;
                controller.r_types.push({f: func, p: priority});
                break;
            }
            case 'machine': {
                let priority = controller.machines.reduce((previous, current) => (current.p > previous.p) ? current.p : previous.p, 0) + 1;
                controller.machines.push({f: func, p: priority});
                break;
            }
        }
    }
}

global.f_add = (type, func, priority) => {controller.add(type, func, priority)};
global.f_add = (type, func) => {controller.add(type, func)};

global.world_layers = (func) => {
    controller.add('world_gen_layer', func);
}

global.p_world_layers = (func, priority) => {
    controller.add('world_gen_layer', func, priority);
}

global.elements = (func) => {
    controller.add('element', func);
}

global.p_elements = (func, priority) => {
    controller.add('elements', func, priority);
}

global.materials = (func) => {
    controller.add('material', func);
}

global.p_materials = (func, priority) => {
    controller.add('material', func, priority);
}

global.items = (func) => {
    controller.add('item', func);
}

global.p_items = (func, priority) => {
    controller.add('item', func, priority);
}

global.blocks = (func) => {
    controller.add('block', func);
}

global.p_blocks = (func, priority) => {
    controller.add('block', func, priority);
}

global.recipe_types = (func) => {
    controller.add('recipe_type', func);
}

global.p_recipe_types = (func, priority) => {
    controller.add('recipe_type', func, priority);
}

global.machines = (func) => {
    controller.add('machine', func);
}

global.p_machines = (func, priority) => {
    controller.add('machine', func, priority);
}

global.finalize = () => {controller.register()}