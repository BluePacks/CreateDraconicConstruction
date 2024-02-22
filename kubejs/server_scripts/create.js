onEvent("client.logged_in", (event) => {
    console.log(Text.translate("jade.modName.kubejs").string);
});

onEvent("recipes", (event) => {
    // GENERAL
    event.shaped("kubejs:crystal_collector", [" IC", " SI", "S  "], {
        I: "#forge:ingots/iron",
        C: "#cdc:crystals_from_budding",
        S: "#forge:rods/wooden",
    });
    event.recipes.createSplashing(
        "create:rose_quartz",
        "biomesoplenty:rose_quartz_shard"
    );
    event.recipes.mekanismEnriching(
        "3x create:polished_rose_quartz",
        "create:rose_quartz"
    );
    event.shaped("create:electron_tube", ["R", "N"], {
        R: "create:polished_rose_quartz",
        N: "#forge:nuggets/iron",
    });
    event.recipes.createDeploying("create:electron_tube", [
        "create:polished_rose_quartz",
        "#forge:nuggets/iron",
    ]);
    event.recipes.createMilling("minecraft:sand", "minecraft:gravel");
    event.shaped("create:belt_connector", ["   ", "RRR", "RRR"], {
        R: "thermal:cured_rubber",
    });
    event.recipes.createMilling("minecraft:quartz", "minecraft:diorite");
    event.recipes.createMixing(Fluid.of("kubejs:molten_andesite_alloy", 270), [
        "minecraft:andesite",
        "#forge:nuggets/iron",
    ]);
    event.recipes.createMixing(Fluid.of("kubejs:molten_andesite_alloy", 270), [
        "minecraft:andesite",
        "#forge:nuggets/zinc",
    ]);
    event.recipes.createMilling("kubejs:crushed_tuff", "minecraft:tuff");
    event.recipes.createSplashing(
        Item.of("create:zinc_nugget").withChance(0.12),
        "kubejs:crushed_tuff"
    );
    event.recipes.createCompacting(Fluid.of("kubejs:crystal_fertilizer", 750), [
        Fluid.of("kubejs:mystical_sap", 1000),
        "2x #minecraft:flowers",
    ]);
    event.recipes.createCompacting(
        Fluid.of("kubejs:crystal_fertilizer", 1000),
        [
            Fluid.of("kubejs:mystical_sap", 1000),
            "2x biomesoplenty:blue_hydrangea",
        ]
    );
    event.shapeless(
        Item.of(
            "patchouli:guide_book",
            '{"patchouli:book":"patchouli:book_of_dragons"}'
        ),
        ["minecraft:book", "create:andesite_alloy"]
    );
    event.shapeless("create:rose_quartz", [
        "12x minecraft:redstone",
        "minecraft:quartz",
    ]);
    event.smithing(
        "autosmithingtable:auto_smithing_table",
        "kubejs:smart_rotational_matrix",
        "minecraft:smithing_table"
    );

    let conductorsCap = [
        "green",
        "light_gray",
        "magenta",
        "blue",
        "cyan",
        "brown",
        "red",
        "yellow",
        "white",
        "lime",
        "gray",
        "light_blue",
        "purple",
        "orange",
        "black",
        "pink",
    ];
    conductorsCap.forEach((Color) => {
        event.recipes
            .createSequencedAssembly(
                "railways:" + Color + "_conductor_cap",
                "minecraft:" + Color + "_wool",
                [
                    event.recipes.createDeploying(
                        "minecraft:" + Color + "_wool",
                        ["minecraft:" + Color + "_wool", "create:electron_tube"]
                    ),
                    event.recipes.createDeploying(
                        "minecraft:" + Color + "_wool",
                        ["minecraft:" + Color + "_wool", "#forge:string"]
                    ),
                    event.recipes.createPressing(
                        "minecraft:" + Color + "_wool",
                        ["minecraft:" + Color + "_wool"]
                    ),
                ]
            )
            .transitionalItem("minecraft:" + Color + "_wool")
            .loops(1);
    });

    // ROTATIONAL
    // Stonecutting
    event.stonecutting("create:gearbox", "kubejs:rotational_matrix");
    event.stonecutting("2x create:andesite_funnel", "kubejs:rotational_matrix");
    event.stonecutting("2x create:andesite_tunnel", "kubejs:rotational_matrix");
    event.stonecutting("create:depot", "kubejs:rotational_matrix");
    event.stonecutting("2x create:chute", "kubejs:rotational_matrix");
    event.stonecutting(
        "create:portable_storage_interface",
        "kubejs:rotational_matrix"
    );
    event.stonecutting(
        "create:mechanical_harvester",
        "kubejs:rotational_matrix"
    );
    event.stonecutting("create:mechanical_plough", "kubejs:rotational_matrix");
    event.stonecutting("2x create:basin", "kubejs:rotational_matrix");
    event.stonecutting("4x create:linear_chassis", "kubejs:rotational_matrix");
    event.stonecutting(
        "4x create:secondary_linear_chassis",
        "kubejs:rotational_matrix"
    );
    event.stonecutting("4x create:radial_chassis", "kubejs:rotational_matrix");
    event.stonecutting(
        "railways:track_switch_andesite",
        "kubejs:rotational_matrix"
    );
    event.stonecutting(
        "2x create:encased_chain_drive",
        "kubejs:rotational_matrix"
    );
    event.stonecutting("create:rope_pulley", "kubejs:rotational_matrix");

    // Smithing
    event.smithing(
        "create:mechanical_drill",
        "kubejs:rotational_matrix",
        "thermal:drill_head"
    );
    event.smithing(
        "create:mechanical_saw",
        "kubejs:rotational_matrix",
        "thermal:saw_blade"
    );
    event.smithing(
        "create:deployer",
        "kubejs:rotational_matrix",
        "create:brass_hand"
    );
    event.smithing(
        "create:mechanical_press",
        "kubejs:rotational_matrix",
        "minecraft:iron_block"
    );
    event.smithing(
        "create:mechanical_roller",
        "kubejs:rotational_matrix",
        "create:crushing_wheel"
    );
    event.smithing(
        "create:mechanical_mixer",
        "kubejs:rotational_matrix",
        "create:whisk"
    );
    event.smithing(
        "create:brown_toolbox",
        "kubejs:rotational_matrix",
        "#forge:tools"
    );
    event.smithing(
        "create:contraption_controls",
        "kubejs:rotational_matrix",
        "create:electron_tube"
    );
    event.smithing(
        "create:encased_fan",
        "kubejs:rotational_matrix",
        "create:propeller"
    );

    // FLUID
    // Stonecutting
    event.stonecutting("4x create:fluid_pipe", "kubejs:fluid_matrix");
    event.stonecutting("create:fluid_tank", "kubejs:fluid_matrix");
    event.stonecutting("create:spout", "kubejs:fluid_matrix");
    event.stonecutting("create:fluid_valve", "kubejs:fluid_matrix");
    event.stonecutting(
        "create:portable_fluid_interface",
        "kubejs:fluid_matrix"
    );
    event.stonecutting("create:copper_valve_handle", "kubejs:fluid_matrix");

    // Smithing
    event.smithing(
        "create:mechanical_pump",
        "create:fluid_pipe",
        "create:cogwheel"
    );
    event.smithing(
        "create:item_drain",
        "kubejs:fluid_matrix",
        "minecraft:iron_bars"
    );
    event.smithing(
        "create:hose_pulley",
        "kubejs:fluid_matrix",
        "thermal:cured_rubber_block"
    );
    event.smithing(
        "create:smart_fluid_pipe",
        "create:fluid_pipe",
        "create:electron_tube"
    );

    // MOTION
    // Stonecutting
    event.stonecutting("create:track_observer", "kubejs:motion_matrix");
    event.stonecutting("railways:track_coupler", "kubejs:motion_matrix");
    event.stonecutting("create:track_signal", "kubejs:motion_matrix");
    event.stonecutting("4x create:train_door", "kubejs:motion_matrix");
    event.stonecutting("6x create:train_trapdoor", "kubejs:motion_matrix");
    event.stonecutting("create:track_station", "kubejs:motion_matrix");

    // Smithing
    event.smithing(
        "create:controls",
        "kubejs:motion_matrix",
        "create:analog_lever"
    );

    // SMART
    // Stonecutting
    event.stonecutting(
        "4x create:brass_funnel",
        "kubejs:smart_rotational_matrix"
    );
    event.stonecutting(
        "4x create:brass_tunnel",
        "kubejs:smart_rotational_matrix"
    );
    event.stonecutting(
        "2x create:smart_chute",
        "kubejs:smart_rotational_matrix"
    );
    event.stonecutting(
        "create:elevator_pulley",
        "kubejs:smart_rotational_matrix"
    );
    event.stonecutting(
        "create:sequenced_gearshift",
        "kubejs:smart_rotational_matrix"
    );
    event.stonecutting(
        "create:mechanical_arm",
        "kubejs:smart_rotational_matrix"
    );
    event.stonecutting(
        "create:content_observer",
        "kubejs:smart_rotational_matrix"
    );
    event.stonecutting(
        "create:stockpile_switch",
        "kubejs:smart_rotational_matrix"
    );
    event.stonecutting("create:display_link", "kubejs:smart_rotational_matrix");
    event.stonecutting(
        "create:redstone_link",
        "kubejs:smart_rotational_matrix"
    );
    event.stonecutting(
        "create:pulse_repeater",
        "kubejs:smart_rotational_matrix"
    );
    event.stonecutting(
        "create:pulse_extender",
        "kubejs:smart_rotational_matrix"
    );
    event.stonecutting(
        "create:powered_toggle_latch",
        "kubejs:smart_rotational_matrix"
    );
    event.stonecutting(
        "create:powered_latch",
        "kubejs:smart_rotational_matrix"
    );
    event.stonecutting(
        "railways:track_switch_brass",
        "kubejs:smart_rotational_matrix"
    );

    // Smithing
    event.smithing(
        "3x create:mechanical_crafter",
        "kubejs:smart_rotational_matrix",
        "minecraft:crafting_table"
    );
    event.smithing(
        "create:rotation_speed_controller",
        "kubejs:smart_rotational_matrix",
        "create:large_cogwheel"
    );
    event.smithing(
        "railways:remote_lens",
        "kubejs:smart_rotational_matrix",
        "minecraft:ender_eye"
    );
    event.smithing(
        "create:steam_engine",
        "kubejs:smart_rotational_matrix",
        "create:shaft"
    );
});
