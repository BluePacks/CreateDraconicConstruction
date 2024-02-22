onEvent('recipes', event => {


    event.recipes.createCompacting('thermal:rubber', Fluid.of('thermal:resin', 100))
    event.smithing('thermal:device_rock_gen', 'thermal:machine_frame', 'minecraft:piston')
    event.smithing('thermal:device_potion_diffuser', 'thermal:machine_frame', 'minecraft:glass_bottle')
    event.smithing('thermal:device_nullifier', 'thermal:machine_frame', 'minecraft:lava_bucket')
    event.smithing('thermal:device_collector', 'thermal:machine_frame', 'minecraft:hopper')
    event.smithing('thermal:device_water_gen', 'thermal:machine_frame', 'minecraft:water_bucket')
    event.smithing('thermal:device_composter', 'thermal:machine_frame', 'minecraft:composter')
    event.smithing('thermal:device_tree_extractor', 'kubejs:rotational_matrix', 'minecraft:bucket')
    event.smithing('thermal:device_fisher', 'kubejs:rotational_matrix', 'minecraft:fishing_rod')
    event.shaped('thermal:machine_frame', ['IGI','GSG','IGI'], {I: '#forge:ingots/invar',G: '#forge:glass',S: 'thermal:redstone_servo'})
    event.shaped('thermal:fluid_cell', [
      'RGR',
      'ITI',
      'RSR'
    ], {
      R: 'thermal:cured_rubber',
      G: '#thermal:glass/hardened',
      I: '#forge:ingots/iron',
      T: 'create:fluid_tank',
      S: 'thermal:redstone_servo'
    })

    event.recipes.createCrushing(['4x minecraft:redstone',Item.of('minecraft:redstone').withChance(0.5)], 'thermal:cinnabar')
    event.recipes.createMilling(['3x minecraft:redstone',Item.of('minecraft:redstone').withChance(0.5)], 'thermal:cinnabar')
    event.recipes.createCrushing(['thermal:apatite_dust',Item.of('minecraft:diamond').withChance(0.012)], 'thermal:apatite')
    event.recipes.createMilling(['thermal:apatite_dust'], 'thermal:apatite')
  
    event.recipes.createMixing(Fluid.of('thermal:redstone', 100), ['minecraft:redstone']).heated()
    event.recipes.createMixing(Fluid.of('thermal:redstone', 900), ['minecraft:redstone_block']).heated()

    event.custom(
        {
            "type": "thermal:rock_gen",
            "adjacent": "minecraft:water",
            "below": "minecraft:andesite",
            "result": {
              "item": "minecraft:andesite"
            }
        })

    event.custom(
        {
            "type": "thermal:rock_gen",
            "adjacent": "minecraft:water",
            "below": "minecraft:granite",
            "result": {
              "item": "minecraft:granite"
            }
        })

    event.custom(
        {
            "type": "thermal:rock_gen",
            "adjacent": "minecraft:water",
            "below": "minecraft:diorite",
            "result": {
              "item": "minecraft:diorite"
            }
        })

    event.custom(
        {
            "type": "thermal:rock_gen",
            "adjacent": "minecraft:water",
            "below": "minecraft:tuff",
            "result": {
              "item": "minecraft:tuff"
            }
        })

    event.custom(
        {
            "type": "thermal:tree_extractor",
            "trunk": "biomesoplenty:hellbark_log",
            "leaves": "biomesoplenty:hellbark_leaves",
            "result": {
              "fluid": "minecraft:lava",
              "amount": 50
            }
          })
    event.custom(
          {
            "type": "thermal:tree_extractor",
            "trunk": "biomesoplenty:magic_log",
            "leaves": "biomesoplenty:magic_leaves",
            "result": {
              "fluid": "kubejs:mystical_sap",
              "amount": 25
            }
          })

    event.custom(
        {
          "type": "thermal:magmatic_fuel",
          "ingredient": {
            "fluid": "tconstruct:blazing_blood",
            "amount": 1000
          },
          "energy": 1500000
        })

    event.custom({
        "type": "thermal:lapidary_fuel",
        "ingredient": {
          "item": "kubejs:rotational_matrix"
        },
        "energy": 40000
      })
    event.custom({
        "type": "thermal:lapidary_fuel",
        "ingredient": {
          "item": "kubejs:fluid_matrix"
        },
        "energy": 50000
      })
    event.custom({
        "type": "thermal:lapidary_fuel",
        "ingredient": {
          "item": "kubejs:motion_matrix"
        },
        "energy": 70000
      })
    event.custom({
        "type": "thermal:lapidary_fuel",
        "ingredient": {
          "item": "kubejs:smart_rotational_matrix"
        },
        "energy": 90000
      })
    event.custom({
        "type": "thermal:lapidary_fuel",
        "ingredient": {
          "item": "kubejs:mekanikal_matrix"
        },
        "energy": 110000
      })
    event.custom({
        "type": "thermal:lapidary_fuel",
        "ingredient": {
          "item": "kubejs:advanced_mekanikal_matrix"
        },
        "energy": 130000
      })
    event.custom({
        "type": "thermal:lapidary_fuel",
        "ingredient": {
          "item": "kubejs:crude_storage_matrix"
        },
        "energy": 50000
      })


})