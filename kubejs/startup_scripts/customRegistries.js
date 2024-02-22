// priority: 0

console.info('Custom Blocks/Items loaded')

onEvent('client.logged_in', event =>{
    console.log(Text.translate("jade.modName.kubejs").string)
})

onEvent('item.registry', event => {

	event.create("osmium_drill")
		.displayName("Osmium Drill")

	event.create("silicon_wafer")
		.displayName("Silicon Wafer")

	event.create("incomplete_silicon_wafer")
		.displayName("Incomplete Silicon Wafer")

	event.create("crushed_tuff")
		.displayName("Crushed Tuff")

	event.create("brass_plated_cast_iron")
		.displayName("Brass Plated Cast Iron")

	event.create("unrefined_metal_scrap")
		.displayName("Unrefined Metal Scrap")

	event.create("recycled_metal_gear")

	event.create("recycled_metal_rod")

	event.create("recycled_metal_plate")

	event.create("recycled_metal_wire")

	event.create("copper_alloy_wire")

	event.create("installer_base")

	event.create("chromium_ingot")
		.displayName("Chromium Ingot")
		.tag('forge:ingots/chromium')
		.tag('forge:ingots')
		.tag('minecraft:beacon_payment_items')

	event.create("raw_chromium")
		.displayName("Raw Chromium")
		.tag('forge:raw_materials')
		.tag('forge:raw_materials/chromium')

	event.create("crystal_collector", 'pickaxe')
		.displayName("Crystal Collector")
		.tag('cdc:tools/crystal_collector')
		.tier('crystal')

})

onEvent('item.registry.tool_tiers', event => {
	event.add('crystal', tier => { //custom tier for flint items
		tier.uses = 1024
		tier.speed = 3
		tier.attackDamageBonus = 2.0
		tier.level = 0
		tier.enchantmentValue = 40
		tier.repairIngredient = '#cdc:crystal_from_budding'
	})
})


onEvent('block.registry', event => {

	// MATRIXES
	event.create("storage_matrix")
		.displayName("Storage Matrix")
		.material('lantern')
		.hardness(1.0)
		.defaultCutout()

	event.create("crude_storage_matrix")
		.displayName("Crude Storage Matrix")
		.material('wood')
		.hardness(1.0)
		.defaultCutout()

	event.create("rotational_matrix")
		.displayName("Rotational Matrix")
		.material('wood')
		.hardness(1.0)
		.defaultCutout()

	event.create("mekanikal_matrix")
		.displayName("Mekanikal Matrix")
		.material('lantern')
		.hardness(1.0)
		.defaultCutout()

	event.create("advanced_mekanikal_matrix")
		.displayName("Advanced Mekanikal Matrix")
		.material('lantern')
		.hardness(1.0)
		.defaultCutout()
		.model('kubejs:block/advanced_mekanikal_matrix')

	event.create("fluid_matrix")
		.displayName("Fluid Matrix")
		.material('lantern')
		.hardness(1.0)
		.defaultCutout()

	event.create("smart_rotational_matrix")
		.displayName("Smart Rotational Matrix")
		.material('lantern')
		.hardness(1.0)
		.renderType('translucent')

	event.create("smart_rotational_matrix_part")
		.displayName("Smart Rotational Matrix Part")
		.material('lantern')
		.hardness(1.0)
		.renderType('translucent')

	event.create("motion_matrix")
		.displayName("Motion Matrix")
		.material('lantern')
		.hardness(1.0)
		.defaultCutout()

	event.create("rotational_matrix_part")
		.displayName("Rotational Matrix Part")
		.hardness(1.0)
		.defaultCutout()
		.box(0, 0, 0, 16, 14, 16, true)

	event.create("storage_matrix_part")
		.displayName("Storage Matrix Part")
		.material('lantern')
		.hardness(1.0)
		.defaultCutout()

	event.create("mekanikal_matrix_part")
		.displayName("Mekanikal Matrix Part")
		.material('lantern')
		.hardness(1.0)
		.defaultCutout()
		.box(0, 0, 0, 16, 8, 16, true)



	// ORES
	event.create('chromium_ore')
		.hardness(3)
		.tag('forge:ores') //makes this block an ore
		.tag('forge:ores/chromium') //makes this block(tag of item) an platinum ore
		.tagBlock('forge:ores/chromium')//makes this block(tag of block) an platinum ore
		.tagBlock('minecraft:mineable/pickaxe')//makes mineable with pickaxe
		.tagBlock('minecraft:mineable/paxel')//makes mineable with paxel
		.tagBlock('minecraft:mineable/mattock')//makes mineable with mattock
		.tagBlock('minecraft:needs_iron_tool')//you need at least diamond tool for break it
		.tagBlock('forge:ores_in_ground/stone')//makes this block ore what spawns it deepslate (if you need make forge:ores_in_ground/stone)
		.tag('forge:ore_rates/singular')//I don't know seriously:\
		.material('stone')

	event.create('deepslate_chromium_ore')
		.hardness(3)
		.tag('forge:ores') //makes this block an ore
		.tag('forge:ores/chromium') //makes this block(tag of item) an platinum ore
		.tagBlock('forge:ores/chromium')//makes this block(tag of block) an platinum ore
		.tagBlock('minecraft:mineable/pickaxe')//makes mineable with pickaxe
		.tagBlock('minecraft:mineable/paxel')//makes mineable with paxel
		.tagBlock('minecraft:mineable/mattock')//makes mineable with mattock
		.tagBlock('minecraft:needs_iron_tool')//you need at least diamond tool for break it
		.tagBlock('forge:ores_in_ground/deepslate')//makes this block ore what spawns it deepslate (if you need make forge:ores_in_ground/stone)
		.tag('forge:ore_rates/singular')//I don't know seriously:\
		.material('deepslate')

})

onEvent('fluid.registry', event => {

	event.create('molten_andesite_alloy')
		.displayName('Molten Andesite Alloy')
		.thickTexture(0x6b7570)
		.tag('tconstruct:tooltips/metal')

	event.create('molten_quartz_enriched_iron')
		.displayName('Molten Quartz Enriched Iron')
		.thickTexture(0xc0d1d1)
		.tag('tconstruct:tooltips/metal')

	event.create('molten_chromium')
		.displayName('Molten Chromium')
		.thickTexture(0xf3f3f3)
		.tag('tconstruct:tooltips/metal')

	event.create('molten_rose_quartz')
		.displayName('Molten Rose Quartz')
		.thickTexture(0xbe254d)
		.tag('tconstruct:tooltips/gem_small')

	event.create('refined_metal_scrap')
		.displayName('Refined Metal Scrap')
		.thickTexture(0x6e5d54)
		.tag('tconstruct:tooltips/metal')
		.tag('cdc:metal_scrap')

	event.create('mystical_sap')
		.displayName("Mystical Sap")
		.thinTexture(0x5692c2)
		.tag('tconstruct:tooltips/water')

	event.create('crystal_fertilizer')
		.displayName("Crystal Fertilizer")
		.thinTexture(0x5a2e7d)
		.tag('tconstruct:tooltips/water')

	event.create('machine_lubricant')
		.displayName('Machine Lubricant')
		.thinTexture(0xf1b904)

	event.create('molten_mekanikal_parts')
		.displayName('Molten Mekanikal Parts')
		.thickTexture(0x515151)
		.tag('tconstruct:tooltips/metal')

})


onEvent('mekanism.infuse_type.registry', event => {
	event.create('osmium_infuse')
		.displayName('Osmium')
})


onEvent('worldgen.add', event => {
	const { anchors } = event

	event.addOre(ore => {
		ore.id = 'kubejs:deepslate_chromium_ore_gen' // (optional, but recommended) custom id for the feature
		ore.biomes = {
			not: '^nether',
			not: '^the_end' // biome filter, see above (technically also optional)
		}

		// examples on how to use targets
		ore.addTarget('#minecraft:stone_ore_replaceables', 'kubejs:deepslate_chromium_ore') // replace anything in the vanilla stone_ore_replaceables tag with Glowstone

		ore.count([15, 20])             // generate between 15 and 50 veins (chosen at random), you could use a single number here for a fixed amount of blocks
			.squared()                    // randomly spreads the ores out across the chunk, instead of generating them in a column
			.triangleHeight(				      // generate the ore with a triangular distribution, this means it will be more likely to be placed closer to the center of the anchors
				anchors.aboveBottom(0),    // the lower bound should be 32 blocks above the bottom of the world, so in this case, Y = -32 since minY = -64
				anchors.absolute(0)
				// the upper bound, meanwhile is set to be just exactly at Y = 96
			)								              // in total, the ore can be found between Y levels -32 and 96, and will be most likely at Y = (96 + -32) / 2 = 32

		// more, optional parameters (default values are shown here)
		ore.size = 12                            // max. vein size
		ore.noSurface = 0.1                     // chance to discard if the ore would be exposed to air
		ore.worldgenLayer = 'underground_ores'  // what generation step the ores should be generated in (see below)
		ore.chance = 0							// if != 0 and count is unset, the ore has a 1/n chance to generate per chunk
	})
	event.addOre(ore => {
		ore.id = 'kubejs:chromium_ore_gen' // (optional, but recommended) custom id for the feature
		ore.biomes = {
			not: '^nether',
			not: '^the_end' // biome filter, see above (technically also optional)
		}

		// examples on how to use targets
		ore.addTarget('#minecraft:stone_ore_replaceables', 'kubejs:chromium_ore') // replace anything in the vanilla stone_ore_replaceables tag with Glowstone

		ore.count([15, 20])             // generate between 15 and 50 veins (chosen at random), you could use a single number here for a fixed amount of blocks
			.squared()                    // randomly spreads the ores out across the chunk, instead of generating them in a column
			.triangleHeight(				      // generate the ore with a triangular distribution, this means it will be more likely to be placed closer to the center of the anchors
				anchors.aboveBottom(64),    // the lower bound should be 32 blocks above the bottom of the world, so in this case, Y = -32 since minY = -64
				anchors.absolute(64)
				// the upper bound, meanwhile is set to be just exactly at Y = 96
			)								              // in total, the ore can be found between Y levels -32 and 96, and will be most likely at Y = (96 + -32) / 2 = 32

		// more, optional parameters (default values are shown here)
		ore.size = 10                            // max. vein size
		ore.noSurface = 0.1                     // chance to discard if the ore would be exposed to air
		ore.worldgenLayer = 'underground_ores'  // what generation step the ores should be generated in (see below)
		ore.chance = 0							// if != 0 and count is unset, the ore has a 1/n chance to generate per chunk
	})
})