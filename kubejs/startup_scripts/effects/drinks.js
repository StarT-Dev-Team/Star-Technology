StartupEvents.registry('mob_effect', event => {

    event.create('reach')
        .color(0x000000)
        .beneficial()
        .modifyAttribute('forge:block_reach', 'f88c30a3-5478-4000-a056-933f8d57fc99', 1, "multiply_base"); // Calculates with base*(1+value) (base is 4.5)

});