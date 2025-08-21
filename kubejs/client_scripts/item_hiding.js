JEIEvents.hideItems(event => {

    event.hide(/vintage:.*_sheet/);
    event.hide(/vintage:.*_rod/);
    event.hide(/vintage:.*_wire/);
    event.hide(/vintage:.*_spring/);
    event.hide(/vintage:.*_small_spring/);

    event.hide('vintage:amethyst_bronze_sheet'); // Doesn't work

});