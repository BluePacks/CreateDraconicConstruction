onEvent('recipes', event => {

  function castingTableRecipe(outputItem, inputFluid, fluidAmount, castType) {
      event.recipes.tconstruct.casting_table(outputItem, inputFluid, fluidAmount).cast('#tconstruct:casts/multi_use/' + castType)
      event.recipes.tconstruct.casting_table(outputItem, inputFluid, fluidAmount).cast('#tconstruct:casts/single_use/' + castType).consumeCast()
  }

  function tinkersMeltingRecipe(inputItem, outputFluid, outputFluidAmount, temperature, time) {
      event.custom({
          "type": "tconstruct:melting",
          "ingredient": {
              "item": inputItem
          },
          "result": {
              "fluid": outputFluid,
              "amount": outputFluidAmount
          },
          "temperature": temperature,
          "time": time,
      })
  }

  event.recipes.tconstruct.casting_basin('create:andesite_alloy_block', 'kubejs:molten_andesite_alloy', 810).noCast()
  event.recipes.tconstruct.casting_basin('refinedstorage:quartz_enriched_iron_block', 'kubejs:molten_quartz_enriched_iron', 810)
  event.recipes.tconstruct.casting_basin('kubejs:budding_rose_quartz', 'kubejs:molten_rose_quartz', 1200).cast('#cdc:budding_blocks').consumeCast().coolingTime(600)

  castingTableRecipe('create:andesite_alloy', 'kubejs:molten_andesite_alloy', 90, 'ingot')
  castingTableRecipe('refinedstorage:quartz_enriched_iron', 'kubejs:molten_quartz_enriched_iron', 90, 'ingot')
  castingTableRecipe('kubejs:chromium_ingot', 'kubejs:molten_chromium', 90, 'ingot')
  castingTableRecipe('biomesoplenty:rose_quartz_shard', 'kubejs:molten_rose_quartz', 100, 'gem')
  castingTableRecipe('kubejs:recycled_metal_gear', 'kubejs:molten_mekanikal_parts', 360, 'gear')
  castingTableRecipe('kubejs:recycled_metal_rod', 'kubejs:molten_mekanikal_parts', 45, 'rod')
  castingTableRecipe('kubejs:recycled_metal_plate', 'kubejs:molten_mekanikal_parts', 90, 'plate')
  castingTableRecipe('kubejs:recycled_metal_wire', 'kubejs:molten_mekanikal_parts', 45, 'wire')

  tinkersMeltingRecipe('create:andesite_alloy', 'kubejs:molten_andesite_alloy', 90, 300, 20)
  tinkersMeltingRecipe('kubejs:unrefined_metal_scrap', 'kubejs:refined_metal_scrap', 180, 400, 20)
  tinkersMeltingRecipe('refinedstorage:quartz_enriched_iron', 'kubejs:molten_quartz_enriched_iron', 90, 800, 20)
  tinkersMeltingRecipe('create:andesite_alloy_block', 'kubejs:molten_andesite_alloy', 810, 300, 50)
  tinkersMeltingRecipe('refinedstorage:quartz_enriched_iron_block', 'kubejs:molten_quartz_enriched_iron', 810, 300, 50)
  tinkersMeltingRecipe('kubejs:chromium_ore', 'kubejs:molten_chromium', 180, 900, 20)
  tinkersMeltingRecipe('kubejs:deepslate_chromium_ore', 'kubejs:molten_chromium', 240, 900, 20)
  tinkersMeltingRecipe('kubejs:raw_chromium', 'kubejs:molten_chromium', 120, 900, 20)
  tinkersMeltingRecipe('biomesoplenty:rose_quartz_shard', 'kubejs:molten_rose_quartz', 100, 180, 10)
  tinkersMeltingRecipe('biomesoplenty:rose_quartz_cluster', 'kubejs:molten_rose_quartz', 400, 180, 60)



  event.custom({
      "type": "tconstruct:alloy",
      "inputs": [{
              "tag": "tconstruct:molten_quartz",
              "amount": 100
          },
          {
              "tag": "forge:molten_iron",
              "amount": 10
          }
      ],
      "result": {
          "fluid": "kubejs:molten_andesite_alloy",
          "amount": 90
      },
      "temperature": 600
  })

  event.custom({
      "type": "tconstruct:alloy",
      "inputs": [{
              "tag": "tconstruct:molten_quartz",
              "amount": 100
          },
          {
              "tag": "forge:molten_zinc",
              "amount": 10
          }
      ],
      "result": {
          "fluid": "kubejs:molten_andesite_alloy",
          "amount": 90
      },
      "temperature": 600
  })

  event.custom({
      "type": "tconstruct:alloy",
      "inputs": [{
              "tag": "tconstruct:molten_osmium",
              "amount": 2
          },
          {
              "tag": "cdc:metal_scrap",
              "amount": 1
          }
      ],
      "result": {
          "fluid": "kubejs:molten_mekanikal_parts",
          "amount": 3
      },
      "temperature": 100
  })


})