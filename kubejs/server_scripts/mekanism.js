onEvent('recipes', event => {
    event.smelting('kubejs:chromium_ingot', 'kubejs:raw_chromium')
    event.blasting('kubejs:chromium_ingot', 'kubejs:raw_chromium')
    event.recipes.createCrushing(['kubejs:raw_chromium', Item.of('kubejs:raw_chromium').withChance(0.75)], 'kubejs:chromium_ore')
    event.recipes.createCrushing(['2x kubejs:raw_chromium', Item.of('kubejs:raw_chromium').withChance(0.75)], 'kubejs:deepslate_chromium_ore')
    event.shapeless('kubejs:copper_alloy_wire', ['thermal:cured_rubber', '2x #forge:ingots/copper', 'kubejs:recycled_metal_wire'])
    event.recipes.createCompacting(Fluid.of('kubejs:machine_lubricant', 250), [Fluid.of('thermal:crude_oil', 1000), '2x #forge:crops'])
    event.recipes.createMixing(Fluid.of('kubejs:molten_mekanikal_parts', 3), [Fluid.of('kubejs:refined_metal_scrap', 1), Fluid.of('tconstruct:molten_osmium', 2)])
    event.shapeless('mekanism:steel_casing', ['2x kubejs:smart_rotational_matrix', '2x #forge:ingots/iron', '2x #forge:ingots/osmium', '3x #minecraft:coals'])

    event.recipes.mekanism.metallurgic_infusing('mekanism:basic_control_circuit', 'kubejs:silicon_wafer', '20x kubejs:osmium_infuse')
    event.custom({
        "type": "mekanism:infusion_conversion",
        "input": { "ingredient": { "item": "mekanism:dust_osmium" }},
        "output": { "infuse_type": "kubejs:osmium_infuse", "amount": 40 }
    })

    event.replaceInput({}, 'mekanism:steel_casing', 'kubejs:mekanikal_matrix')
    event.stonecutting('2x mekanism:steel_casing', 'kubejs:mekanikal_matrix')

    event.smithing('mekanism:crusher', 'kubejs:mekanikal_matrix', 'create:crushing_wheel')
    event.smithing('mekanism:energized_smelter', 'kubejs:mekanikal_matrix', 'minecraft:blast_furnace')
    event.smithing('mekanism:fuelwood_heater', 'kubejs:mekanikal_matrix', 'thermal:dynamo_stirling')
    event.smithing('mekanism:enrichment_chamber', 'kubejs:mekanikal_matrix', 'create:mechanical_mixer')
    event.smithing('mekanism:combiner', 'kubejs:mekanikal_matrix', 'create:mechanical_press')
    event.smithing('mekanism:metallurgic_infuser', 'kubejs:mekanikal_matrix', 'minecraft:furnace')
    event.smithing('mekanism:formulaic_assemblicator', 'kubejs:mekanikal_matrix', 'create:mechanical_crafter')
    event.smithing('mekanism:precision_sawmill', 'kubejs:mekanikal_matrix', 'thermal:saw_blade')
    event.smithing('mekanism:oredictionificator', 'kubejs:mekanikal_matrix', 'mekanism:dictionary')
    event.smithing('mekanism:personal_chest', 'kubejs:mekanikal_matrix', '#forge:chests')
    event.smithing('mekanism:personal_barrel', 'kubejs:mekanikal_matrix', '#forge:barrels')


    event.shaped('kubejs:installer_base', ['RCR','IMI','RCR'], {R: 'minecraft:redstone',C: 'mekanism:basic_control_circuit',I: '#forge:ingots/iron',M: 'kubejs:mekanikal_matrix'})
    event.recipes.createMixing('mekanism:basic_tier_installer', ['kubejs:installer_base', 'mekanism:basic_control_circuit'])
    event.recipes.createMixing('mekanism:advanced_tier_installer', ['mekanism:basic_tier_installer', 'mekanism:advanced_control_circuit']).heated()
    event.recipes.createMixing('mekanism:elite_tier_installer', ['mekanism:advanced_tier_installer', 'mekanism:elite_control_circuit']).heated()
    event.recipes.createMixing('mekanism:ultimate_tier_installer', ['mekanism:elite_tier_installer', 'mekanism:ultimate_control_circuit']).superheated()

    event.recipes.mekanism.combining('mekanism:advanced_control_circuit', 'mekanism:basic_control_circuit', '2x mekanism:alloy_infused')
    event.recipes.mekanism.combining('mekanism:elite_control_circuit', 'mekanism:advanced_control_circuit', '2x mekanism:alloy_reinforced')
    event.recipes.mekanism.combining('mekanism:ultimate_control_circuit', 'mekanism:elite_control_circuit', '2x mekanism:alloy_atomic')

})
