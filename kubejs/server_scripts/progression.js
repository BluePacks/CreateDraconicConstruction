onEvent('recipes', event => {

    
    // ROTATIONAL
    event.shaped('kubejs:rotational_matrix_part', ['ANA','CJC','ANA'], {A: 'create:andesite_alloy',N: '#forge:nuggets/iron',C: 'create:cogwheel',J: 'create:andesite_casing'})
    event.shaped('kubejs:rotational_matrix', ['III','I I','III'], {I: 'kubejs:rotational_matrix_part'})
    event.recipes.createMixing('kubejs:rotational_matrix', '8x kubejs:rotational_matrix_part')

    event.recipes.createSequencedAssembly(['kubejs:rotational_matrix_part' // have this item be a guaranteed output
        ], 'create:andesite_casing', [ // 'create:brass_ingot' is the input.
        // the transitional item set by "transitionalItem('create:incomplete_large_cogwheel')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
        event.recipes.createDeploying('create:andesite_casing', ['create:andesite_casing', 'create:cogwheel']),
        event.recipes.createDeploying('create:andesite_casing', ['create:andesite_casing', '#forge:nuggets/iron']),
        event.recipes.createPressing('create:andesite_casing', ['create:andesite_casing']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
        event.recipes.createDeploying('create:andesite_casing', ['create:andesite_casing', 'create:andesite_alloy']) // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
        ]).transitionalItem('create:andesite_casing').loops(1) // set the transitional item and the loops (amount of repetitions)

    // FLUID
    event.shaped('kubejs:fluid_matrix', ['ANA','CJC','ANA'], {A: '#forge:plates/copper',N: '#forge:ingots/copper',C: 'thermal:cured_rubber',J: 'create:copper_casing'})

    event.recipes.createSequencedAssembly(['kubejs:fluid_matrix' // have this item be a guaranteed output
        ], 'kubejs:rotational_matrix', [ // 'create:brass_ingot' is the input.
        // the transitional item set by "transitionalItem('create:incomplete_large_cogwheel')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
        event.recipes.createDeploying('kubejs:rotational_matrix', ['kubejs:rotational_matrix', '#forge:plates/copper']),
        event.recipes.createDeploying('kubejs:rotational_matrix', ['kubejs:rotational_matrix', 'thermal:cured_rubber']),
        ]).transitionalItem('kubejs:rotational_matrix').loops(1) // set the transitional item and the loops (amount of repetitions)

    
    // SMART
    event.shaped('kubejs:smart_rotational_matrix', ['III','I I','III'], {I: 'kubejs:smart_rotational_matrix_part'})
    event.recipes.createMixing('kubejs:smart_rotational_matrix', '8x kubejs:smart_rotational_matrix_part')
    event.replaceInput({}, 'create:precision_mechanism', 'kubejs:smart_rotational_matrix')

    event.recipes.createSequencedAssembly('kubejs:smart_rotational_matrix_part', 'kubejs:rotational_matrix_part', [
      event.recipes.createDeploying('kubejs:rotational_matrix_part', ['kubejs:rotational_matrix_part', 'create:electron_tube']),
      event.recipes.createDeploying('kubejs:rotational_matrix_part', ['kubejs:rotational_matrix_part', 'create:large_cogwheel']),
      event.recipes.createFilling('kubejs:rotational_matrix_part', ['kubejs:rotational_matrix_part', Fluid.of('tconstruct:molten_brass', 90)]),
    ]).transitionalItem('kubejs:smart_rotational_matrix').loops(2)

    // MOTION
    event.replaceInput({}, 'create:sturdy_sheet', 'kubejs:brass_plated_cast_iron')
    event.recipes.createMixing('2x kubejs:brass_plated_cast_iron', ['#forge:ingots/cast_iron', '#forge:nuggets/brass']).heated()
    event.recipes.createMixing('kubejs:brass_plated_cast_iron', ['#forge:ingots/cast_iron', '#forge:nuggets/brass'])

    event.recipes.createDeploying('kubejs:motion_matrix', ['create:railway_casing', 'createdeco:cast_iron_ingot'])

    event.custom({
		"type": "create:item_application",
		"ingredients": [
		  {
			"tag": "forge:stripped_logs"
		  },
		  {
			"item": "kubejs:brass_plated_cast_iron"
		  }
		],
		"results": [
		  {
			"item": "create:railway_casing"
		  }
		]
	  })
	  
	event.custom({
		"type": "create:item_application",
		"ingredients": [
		  {
			"tag": "forge:stripped_wood"	
		  },
		  {
			"item": "kubejs:brass_plated_cast_iron"
		  }
		],
		"results": [
		  {
			"item": "create:railway_casing"
		  }
		]
	  })

    // MEKANIKAL
    event.recipes.createCrushing(['kubejs:unrefined_metal_scrap',Item.of('kubejs:unrefined_metal_scrap').withChance(0.5)], 'kubejs:smart_rotational_matrix')

    // ADVANCED MEKANIKAL

    // STORAGE
    event.shaped('kubejs:storage_matrix', ['III','I I','III'], {I: 'kubejs:storage_matrix_part'})
    event.recipes.createMixing('kubejs:storage_matrix', '8x kubejs:storage_matrix_part')

    event.recipes.createSequencedAssembly(['kubejs:storage_matrix_part' // have this item be a guaranteed output
        ], 'refinedstorage:machine_casing', [ // 'create:brass_ingot' is the input.
        // the transitional item set by "transitionalItem('create:incomplete_large_cogwheel')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
        event.recipes.createDeploying('refinedstorage:machine_casing', ['refinedstorage:machine_casing', 'refinedstorage:improved_processor']),
        event.recipes.createDeploying('refinedstorage:machine_casing', ['refinedstorage:machine_casing', 'refinedstorage:processor_binding']),
        event.recipes.createFilling('refinedstorage:machine_casing', ['refinedstorage:machine_casing', Fluid.of('kubejs:molten_quartz_enriched_iron', 90)]), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
        event.recipes.createDeploying('refinedstorage:machine_casing', ['refinedstorage:machine_casing', 'refinedstorage:wrench']).keepHeldItem() // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
        ]).transitionalItem('refinedstorage:machine_casing').loops(1) // set the transitional item and the loops (amount of repetitions)

})