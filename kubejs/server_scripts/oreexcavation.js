onEvent('recipes', event => {
	
	event.shaped('kubejs:osmium_drill', ['AO ','ODO',' OO'], {A: 'mekanism:block_osmium',O: '#forge:ingots/osmium',D: 'createoreexcavation:drill'})

    // ITEMS
    event.recipes.createoreexcavation.drilling('mekanism:raw_osmium', '{"text": "Raw Osmium"}', 100, 3000).id("raw_osmium").alwaysInfinite().biomeWhitelist('forge:is_overworld').drill('kubejs:osmium_drill');
	event.recipes.createoreexcavation.drilling('mekanism:raw_uranium', '{"text": "Raw Uranium"}', 100, 3000).id("raw_uranium").alwaysInfinite().biomeWhitelist('forge:is_overworld').drill('kubejs:osmium_drill');
	event.recipes.createoreexcavation.drilling('thermal:raw_lead', '{"text": "Raw Lead"}', 100, 3000).id("raw_lead").alwaysInfinite().biomeWhitelist('forge:is_overworld').drill('kubejs:osmium_drill');
	event.recipes.createoreexcavation.drilling('thermal:raw_tin', '{"text": "Raw Tin"}', 100, 3000).id("raw_tin").alwaysInfinite().biomeWhitelist('forge:is_overworld').drill('kubejs:osmium_drill');
	event.recipes.createoreexcavation.drilling('thermal:raw_nickel', '{"text": "Raw Nickel"}', 100, 3000).id("raw_nickel").alwaysInfinite().biomeWhitelist('forge:is_overworld').drill('kubejs:osmium_drill');
	event.recipes.createoreexcavation.drilling('create:raw_zinc', '{"text": "Raw Zinc"}', 100, 3000).id("raw_zinc").alwaysInfinite().biomeWhitelist('forge:is_overworld').drill('kubejs:osmium_drill');

	event.recipes.createoreexcavation.drilling('createoreexcavation:raw_redstone', '{"text": "Raw Redstone"}', 100, 3000).id("raw_redstone").alwaysInfinite().biomeWhitelist('forge:is_overworld').drill('#createoreexcavation:drills');
	event.recipes.createoreexcavation.drilling('minecraft:raw_gold', '{"text": "Raw Gold"}', 100, 3000).id("raw_gold").alwaysInfinite().biomeWhitelist('forge:is_overworld').drill('#createoreexcavation:drills');
	event.recipes.createoreexcavation.drilling('createoreexcavation:raw_diamond', '{"text": "Raw Diamond"}', 100, 3000).id("raw_diamond").alwaysInfinite().biomeWhitelist('forge:is_overworld').drill(['createoreexcavation:diamond_drill', 'createoreexcavation:netherite_drill']);
	event.recipes.createoreexcavation.drilling('createoreexcavation:raw_emerald', '{"text": "Raw Emerald"}', 100, 3000).id("raw_emerald").alwaysInfinite().biomeWhitelist('forge:is_overworld').drill(['createoreexcavation:diamond_drill', 'createoreexcavation:netherite_drill']);
	event.recipes.createoreexcavation.drilling('minecraft:raw_iron', '{"text": "Raw Iron"}', 100, 2000).id("raw_iron").alwaysInfinite().biomeWhitelist('forge:is_overworld').drill('#createoreexcavation:drills');
	event.recipes.createoreexcavation.drilling('kubejs:raw_chromium', '{"text": "Raw Chromium"}', 100, 5000).id("raw_chromium").alwaysInfinite().biomeWhitelist('forge:is_overworld').drill(['createoreexcavation:diamond_drill', 'createoreexcavation:netherite_drill', 'kubejs:osmium_drill']);
	//event.recipes.createoreexcavation.drilling('draconicevolution:overworld_draconium_ore', '{"text": "overworld draconium Ore"}', 100, 1500).id("overworld_draconium").alwaysInfinite().biomeWhitelist('forge:is_overworld').drill('createoreexcavation:netherite_drill');
	//event.recipes.createoreexcavation.drilling('draconicevolution:end_draconium_ore', '{"text": "ender draconium Ore"}', 100, 1200).id("ender_draconium").alwaysInfinite().biomeWhitelist('forge:is_end').drill('createoreexcavation:netherite_drill');
	
    // FLUIDS
    event.recipes.createoreexcavation.extracting(Fluid.of('minecraft:lava', 500), '{"text": "Lava"}', 10, 400).alwaysInfinite().id("lava_well").biomeBlacklist('forge:is_end').drill(['createoreexcavation:diamond_drill', 'createoreexcavation:netherite_drill']);
	//event.recipes.createoreexcavation.extracting(Fluid.of('industrialforegoing:ether_gas', 500), '{"text": "Ether Gas"}', 10, 5000).alwaysInfinite().id("ether_gas_well").biomeWhitelist('forge:is_end').drill(['createoreexcavation:netherite_drill', 'kubejs:osmium_drill']);
	event.recipes.createoreexcavation.extracting(Fluid.of('thermal:crude_oil', 500), '{"text": "Crude Oil"}', 10, 3000).alwaysInfinite().id("crude_oil_well_overworld").biomeWhitelist('forge:is_overworld').drill('#createoreexcavation:drills');
	event.recipes.createoreexcavation.extracting(Fluid.of('thermal:crude_oil', 500), '{"text": "Crude Oil Nether"}', 10, 2000).alwaysInfinite().id("crude_oil_well_nether").biomeWhitelist('minecraft:is_nether').drill('#createoreexcavation:drills');
	


}) 