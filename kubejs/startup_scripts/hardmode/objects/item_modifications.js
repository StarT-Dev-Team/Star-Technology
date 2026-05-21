// packmode: hard

ItemEvents.modification(event => {

	/*event.modify('minecraft:cocoa_beans', item => {
		item.foodProperties = food => {
			food.hunger(1)
			food.saturation(1)
			food.effect('minecraft:slowness', 80, 2, 1)
			food.effect('minecraft:hunger', 80, 1, .1)
			food.effect('minecraft:blindness', 20, 1, .05)
			food.fastToEat(true)
		}
	})*/
    
	event.modify('minecraft:cocoa_beans', item => {
    	item.setFoodProperties(food => {
    	    food.hunger(1)
			food.saturation(1)
			food.effect('minecraft:slowness', 80, 2, 1)
			food.effect('minecraft:hunger', 80, 1, .1)
			food.effect('minecraft:blindness', 20, 1, .05)
    	    food.fastToEat()
    	})
  	})
});
