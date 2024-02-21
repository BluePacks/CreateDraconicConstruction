// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = false
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('item.tags', event => {
	event.add('createoreexcavation:drills', 'kubejs:osmium_drill')
	event.add('create:blaze_burner_fuel/special', 'thermal:refined_fuel_bucket')

	let crystals = ['tconstruct:earth_slime_crystal',
					'tconstruct:sky_slime_crystal',
					'tconstruct:ichor_slime_crystal',
					'tconstruct:ender_slime_crystal',
					'minecraft:amethyst_shard',
					'biomesoplenty:rose_quartz_shard']
	crystals.forEach(Type => {
		event.add('cdc:crystals_from_budding', Type)})

	let crystalBlocks = ['tconstruct:budding_earth_slime_crystal',
					'tconstruct:budding_sky_slime_crystal',
					'tconstruct:budding_ichor_slime_crystal',
					'tconstruct:budding_ender_slime_crystal',
					'minecraft:budding_amethyst',
					'kubejs:budding_rose_quartz']
	crystalBlocks.forEach(Type => {
		event.add('cdc:budding_blocks', Type)})

})
onEvent('fluid.tags', event => {
	event.add('create:bottomless/allow', 'kubejs:molten_andesite_alloy')
})

onEvent('block.tags', event => {

	let crystalBlocks = ['tconstruct:budding_earth_slime_crystal',
					'tconstruct:budding_sky_slime_crystal',
					'tconstruct:budding_ichor_slime_crystal',
					'tconstruct:budding_ender_slime_crystal',
					'minecraft:budding_amethyst',
					'kubejs:budding_rose_quartz']
	crystalBlocks.forEach(Type => {
		event.add('cdc:budding_blocks', Type)})

	event.add('create:wrench_pickup', 'kubejs:storage_matrix')
	event.add('create:wrench_pickup', 'kubejs:rotational_matrix')
	event.add('create:wrench_pickup', 'kubejs:mekanikal_matrix')
	event.add('create:wrench_pickup', 'thermal:machine_frame')
	event.add('create:wrench_pickup', 'kubejs:fluid_matrix')
	event.add('create:wrench_pickup', 'kubejs:storage_matrix_part')
	event.add('create:wrench_pickup', 'kubejs:rotational_matrix_part')
	event.add('create:wrench_pickup', 'kubejs:mekanikal_matrix_part')
	event.add('create:wrench_pickup', 'kubejs:smart_rotational_matrix')
	event.add('create:wrench_pickup', 'kubejs:motion_matrix')
	event.add('create:wrench_pickup', 'refinedstorage:machine_casing')
	event.add('create:wrench_pickup', 'kubejs:crude_storage_matrix')




})

