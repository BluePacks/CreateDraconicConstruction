onEvent("recipes", (event) => {
    // Misc other
    event.recipes.createMixing("refinedstorage:silicon", [
        "minecraft:quartz",
        "2x minecraft:sand",
    ]);
    event.shaped("refinedstorage:wrench", [" Q ", " SQ", "S  "], {
        Q: "refinedstorage:quartz_enriched_iron",
        S: "#forge:rods/wooden",
    });
    event.recipes
        .createMixing("2x refinedstorage:quartz_enriched_iron", [
            "2x #forge:ingots/iron",
            "2x minecraft:quartz",
        ])
        .heated();
    event.recipes
        .createMixing(Fluid.of("kubejs:molten_quartz_enriched_iron", 270), [
            "2x #forge:ingots/iron",
            "2x minecraft:quartz",
        ])
        .superheated();
    event.recipes.createPressing(
        "refinedstorage:processor_binding",
        "#forge:slimeballs"
    );
    event.shaped("refinedstorage:upgrade", ["GQG", "RPR", "GQG"], {
        G: "#forge:glass",
        Q: "refinedstorage:quartz_enriched_iron",
        R: "minecraft:redstone",
        P: "refinedstorage:improved_processor",
    });
    event.custom({
        type: "create:item_application",
        ingredients: [
            {
                tag: "forge:stripped_logs",
            },
            {
                item: "refinedstorage:quartz_enriched_iron",
            },
        ],
        results: [
            {
                item: "refinedstorage:machine_casing",
            },
        ],
    });
    event.custom({
        type: "create:item_application",
        ingredients: [
            {
                tag: "forge:stripped_wood",
            },
            {
                item: "refinedstorage:quartz_enriched_iron",
            },
        ],
        results: [
            {
                item: "refinedstorage:machine_casing",
            },
        ],
    });

    // matrix stonecutting
    event.stonecutting("refinedstorage:controller", "kubejs:storage_matrix");
    event.stonecutting("refinedstorage:disk_drive", "kubejs:storage_matrix");
    event.stonecutting("refinedstorage:grid", "kubejs:storage_matrix");
    event.stonecutting(
        "refinedstorage:crafting_monitor",
        "kubejs:storage_matrix"
    );
    event.stonecutting(
        "2x refinedstorage:storage_housing",
        "kubejs:storage_matrix"
    );
    event.stonecutting(
        "extradisks:advanced_storage_housing",
        "kubejs:storage_matrix"
    );
    event.stonecutting(
        "refinedstorage:1k_storage_part",
        "kubejs:storage_matrix"
    );
    event.stonecutting(
        "refinedstorage:64k_fluid_storage_part",
        "kubejs:storage_matrix"
    );
    event.stonecutting(
        "2x rebornstorage:multiblock_frame",
        "kubejs:storage_matrix"
    );
    event.stonecutting("rebornstorage:multiblock_cpu", "kubejs:storage_matrix");
    event.stonecutting(
        "rebornstorage:multiblock_storage",
        "kubejs:storage_matrix"
    );
    event.stonecutting(
        "2x rebornstorage:multiblock_heat",
        "kubejs:storage_matrix"
    );
    event.stonecutting(
        "rsrequestify:crafting_emitter",
        "kubejs:storage_matrix"
    );
    event.stonecutting("rsrequestify:requester", "kubejs:storage_matrix");

    // misc smithing
    event.smithing(
        "refinedstorage:network_transmitter",
        "kubejs:storage_matrix",
        "minecraft:ender_eye"
    );
    event.smithing(
        "refinedstorage:network_receiver",
        "kubejs:storage_matrix",
        "rebornstorage:super_advanced_processor"
    );
    event.smithing(
        "refinedstorage:crafter",
        "kubejs:storage_matrix",
        "create:mechanical_crafter"
    );
    event.smithing(
        "refinedstorage:portable_grid",
        "kubejs:storage_matrix",
        "mekanism:basic_energy_cube"
    );
    event.smithing(
        "rebornstorage:super_wireless_crafting_grid",
        "refinedstorage:wireless_grid",
        "rebornstorage:super_advanced_processor"
    );
    event.smithing(
        "refinedstorage:wireless_grid",
        "refinedstorage:grid",
        "minecraft:ender_pearl"
    );
    event.smithing(
        "refinedstorage:wireless_fluid_grid",
        "refinedstorage:fluid_grid",
        "minecraft:ender_pearl"
    );
    event.smithing(
        "rebornstorage:advanced_wireless_transmitter",
        "refinedstorage:wireless_transmitter",
        "rebornstorage:super_advanced_processor"
    );
    event.smithing(
        "refinedstorage:pattern_grid",
        "kubejs:storage_matrix",
        "minecraft:crafting_table"
    );
    event.smithing(
        "refinedstorage:speed_upgrade",
        "refinedstorage:upgrade",
        "minecraft:sugar"
    );
    event.smithing(
        "refinedstorage:stack_upgrade",
        "refinedstorage:upgrade",
        "refinedstorage:speed_upgrade"
    );
    event.smithing(
        "refinedstorage:range_upgrade",
        "refinedstorage:upgrade",
        "minecraft:ender_pearl"
    );
    event.smithing(
        "refinedstorage:crafting_upgrade",
        "refinedstorage:upgrade",
        "minecraft:crafting_table"
    );
    event.smithing(
        "refinedstorage:regulator_upgrade",
        "refinedstorage:upgrade",
        "minecraft:comparator"
    );
    event.smithing(
        "refinedstorage:silk_touch_upgrade",
        "refinedstorage:upgrade",
        Item.of("minecraft:enchanted_book").enchant("minecraft:silk_touch", 1)
    );
    event.smithing(
        "refinedstorage:fortune_1_upgrade",
        "refinedstorage:upgrade",
        Item.of("minecraft:enchanted_book").enchant("minecraft:fortune", 1)
    );
    event.smithing(
        "refinedstorage:fortune_2_upgrade",
        "refinedstorage:upgrade",
        Item.of("minecraft:enchanted_book").enchant("minecraft:fortune", 2)
    );
    event.smithing(
        "refinedstorage:fortune_3_upgrade",
        "refinedstorage:upgrade",
        Item.of("minecraft:enchanted_book").enchant("minecraft:fortune", 3)
    );
    event.smithing(
        "refinedstorageaddons:wireless_crafting_grid",
        "refinedstorage:crafting_grid",
        "minecraft:ender_pearl"
    );
    event.smithing(
        "refinedstorage:crafting_grid",
        "refinedstorage:grid",
        "minecraft:crafting_table"
    );
    event.smithing(
        "refinedstorage:fluid_grid",
        "refinedstorage:grid",
        "minecraft:bucket"
    );

    // disks :c
    event.smithing(
        "refinedstorage:1k_storage_disk",
        "refinedstorage:1k_storage_part",
        "refinedstorage:storage_housing"
    );
    event.smithing(
        "refinedstorage:4k_storage_disk",
        "refinedstorage:4k_storage_part",
        "refinedstorage:storage_housing"
    );
    event.smithing(
        "refinedstorage:16k_storage_disk",
        "refinedstorage:16k_storage_part",
        "refinedstorage:storage_housing"
    );
    event.smithing(
        "refinedstorage:64k_storage_disk",
        "refinedstorage:64k_storage_part",
        "refinedstorage:storage_housing"
    );
    event.smithing(
        "extradisks:256k_storage_disk",
        "extradisks:256k_storage_part",
        "extradisks:advanced_storage_housing"
    );
    event.smithing(
        "extradisks:1024k_storage_disk",
        "extradisks:1024k_storage_part",
        "extradisks:advanced_storage_housing"
    );
    event.smithing(
        "extradisks:4096k_storage_disk",
        "extradisks:4096k_storage_part",
        "extradisks:advanced_storage_housing"
    );
    event.smithing(
        "extradisks:16384k_storage_disk",
        "extradisks:16384k_storage_part",
        "extradisks:advanced_storage_housing"
    );
    event.smithing(
        "extradisks:65536k_storage_disk",
        "extradisks:65536k_storage_part",
        "extradisks:advanced_storage_housing"
    );
    event.smithing(
        "extradisks:262144k_storage_disk",
        "extradisks:262144k_storage_part",
        "extradisks:advanced_storage_housing"
    );
    event.smithing(
        "extradisks:1048576k_storage_disk",
        "extradisks:1048576k_storage_part",
        "extradisks:advanced_storage_housing"
    );
    event.smithing(
        "extradisks:infinite_storage_disk",
        "extradisks:infinite_storage_part",
        "extradisks:advanced_storage_housing"
    );

    event.smithing(
        "refinedstorage:64k_fluid_storage_disk",
        "refinedstorage:64k_fluid_storage_part",
        "refinedstorage:storage_housing"
    );
    event.smithing(
        "refinedstorage:256k_fluid_storage_disk",
        "refinedstorage:256k_fluid_storage_part",
        "refinedstorage:storage_housing"
    );
    event.smithing(
        "refinedstorage:1024k_fluid_storage_disk",
        "refinedstorage:1024k_fluid_storage_part",
        "refinedstorage:storage_housing"
    );
    event.smithing(
        "refinedstorage:4096k_fluid_storage_disk",
        "refinedstorage:4096k_fluid_storage_part",
        "refinedstorage:storage_housing"
    );
    event.smithing(
        "extradisks:16384k_fluid_storage_disk",
        "extradisks:16384k_fluid_storage_part",
        "extradisks:advanced_storage_housing"
    );
    event.smithing(
        "extradisks:65536k_fluid_storage_disk",
        "extradisks:65536k_fluid_storage_part",
        "extradisks:advanced_storage_housing"
    );
    event.smithing(
        "extradisks:262144k_fluid_storage_disk",
        "extradisks:262144k_fluid_storage_part",
        "extradisks:advanced_storage_housing"
    );
    event.smithing(
        "extradisks:1048576k_fluid_storage_disk",
        "extradisks:1048576k_fluid_storage_part",
        "extradisks:advanced_storage_housing"
    );
    event.smithing(
        "extradisks:infinite_fluid_storage_disk",
        "extradisks:infinite_fluid_storage_part",
        "extradisks:advanced_storage_housing"
    );

    // storage parts :')
    event.recipes.createMechanicalCrafting(
        "refinedstorage:4k_storage_part",
        ["PPPB"],
        {
            P: "refinedstorage:1k_storage_part",
            B: "refinedstorage:basic_processor",
        }
    );
    event.recipes.createMechanicalCrafting(
        "refinedstorage:16k_storage_part",
        ["PPPB"],
        {
            P: "refinedstorage:4k_storage_part",
            B: "refinedstorage:improved_processor",
        }
    );
    event.recipes.createMechanicalCrafting(
        "refinedstorage:64k_storage_part",
        ["PPPB"],
        {
            P: "refinedstorage:16k_storage_part",
            B: "refinedstorage:improved_processor",
        }
    );
    event.recipes.createMechanicalCrafting(
        "extradisks:256k_storage_part",
        ["PPPB"],
        {
            P: "refinedstorage:64k_storage_part",
            B: "refinedstorage:advanced_processor",
        }
    );
    event.recipes.createMechanicalCrafting(
        "extradisks:1024k_storage_part",
        ["PPPB"],
        {
            P: "extradisks:256k_storage_part",
            B: "refinedstorage:advanced_processor",
        }
    );
    event.recipes.createMechanicalCrafting(
        "extradisks:4096k_storage_part",
        ["PPPB"],
        {
            P: "extradisks:1024k_storage_part",
            B: "refinedstorage:advanced_processor",
        }
    );
    event.recipes.createMechanicalCrafting(
        "extradisks:16384k_storage_part",
        ["PPPB"],
        {
            P: "extradisks:4096k_storage_part",
            B: "rebornstorage:super_advanced_processor",
        }
    );
    event.recipes.createMechanicalCrafting(
        "extradisks:65536k_storage_part",
        ["PPPB"],
        {
            P: "extradisks:16384k_storage_part",
            B: "rebornstorage:super_advanced_processor",
        }
    );
    event.recipes.createMechanicalCrafting(
        "extradisks:262144k_storage_part",
        ["PPPB"],
        {
            P: "extradisks:65536k_storage_part",
            B: "extradisks:withering_processor",
        }
    );
    event.recipes.createMechanicalCrafting(
        "extradisks:1048576k_storage_part",
        ["PPPB"],
        {
            P: "extradisks:262144k_storage_part",
            B: "extradisks:withering_processor",
        }
    );
    event.recipes.createMechanicalCrafting(
        "extradisks:infinite_storage_part",
        ["  BPB  ", "BPPBPPB", "  BPB  "],
        {
            P: "extradisks:1048576k_storage_part",
            B: "extradisks:withering_processor",
        }
    );
    event.recipes.createMechanicalCrafting(
        "refinedstorage:256k_fluid_storage_part",
        ["PPPB"],
        {
            P: "refinedstorage:64k_fluid_storage_part",
            B: "refinedstorage:basic_processor",
        }
    );
    event.recipes.createMechanicalCrafting(
        "refinedstorage:1024k_fluid_storage_part",
        ["PPPB"],
        {
            P: "refinedstorage:256k_fluid_storage_part",
            B: "refinedstorage:improved_processor",
        }
    );
    event.recipes.createMechanicalCrafting(
        "refinedstorage:4096k_fluid_storage_part",
        ["PPPB"],
        {
            P: "refinedstorage:1024k_fluid_storage_part",
            B: "refinedstorage:advanced_processor",
        }
    );
    event.recipes.createMechanicalCrafting(
        "extradisks:16384k_fluid_storage_part",
        ["PPPB"],
        {
            P: "refinedstorage:4096k_fluid_storage_part",
            B: "rebornstorage:super_advanced_processor",
        }
    );
    event.recipes.createMechanicalCrafting(
        "extradisks:65536k_fluid_storage_part",
        ["PPPB"],
        {
            P: "extradisks:16384k_fluid_storage_part",
            B: "rebornstorage:super_advanced_processor",
        }
    );
    event.recipes.createMechanicalCrafting(
        "extradisks:262144k_fluid_storage_part",
        ["PPPB"],
        {
            P: "extradisks:65536k_fluid_storage_part",
            B: "extradisks:withering_processor",
        }
    );
    event.recipes.createMechanicalCrafting(
        "extradisks:1048576k_fluid_storage_part",
        ["PPPB"],
        {
            P: "extradisks:262144k_fluid_storage_part",
            B: "extradisks:withering_processor",
        }
    );
    event.recipes.createMechanicalCrafting(
        "extradisks:infinite_fluid_storage_part",
        ["  BPB  ", "BPPBPPB", "  BPB  "],
        {
            P: "extradisks:1048576k_fluid_storage_part",
            B: "extradisks:withering_processor",
        }
    );

    // Processors
    event.recipes
        .createSequencedAssembly(
            [
                "kubejs:silicon_wafer", // have this item be a guaranteed output
            ],
            "refinedstorage:silicon",
            [
                // 'create:brass_ingot' is the input.
                // the transitional item set by "transitionalItem('create:incomplete_large_cogwheel')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
                event.recipes.createFilling("kubejs:incomplete_silicon_wafer", [
                    "kubejs:incomplete_silicon_wafer",
                    Fluid.of("thermal:redstone", 100),
                ]),
                event.recipes.createPressing(
                    "kubejs:incomplete_silicon_wafer",
                    ["kubejs:incomplete_silicon_wafer"]
                ), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
                event.recipes
                    .createDeploying("kubejs:incomplete_silicon_wafer", [
                        "kubejs:incomplete_silicon_wafer",
                        "#forge:tools/wrench",
                    ])
                    .keepHeldItem(), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
            ]
        )
        .transitionalItem("kubejs:incomplete_silicon_wafer")
        .loops(1); // set the transitional item and the loops (amount of repetitions)

    event.recipes
        .createSequencedAssembly(
            ["refinedstorage:basic_processor"],
            "kubejs:silicon_wafer",
            [
                event.recipes.createDeploying(
                    "refinedstorage:raw_basic_processor",
                    ["refinedstorage:raw_basic_processor", "#forge:ingots/iron"]
                ),
                event.recipes.createDeploying(
                    "refinedstorage:raw_basic_processor",
                    [
                        "refinedstorage:raw_basic_processor",
                        "refinedstorage:processor_binding",
                    ]
                ),
                event.recipes.createPressing(
                    "refinedstorage:raw_basic_processor",
                    ["refinedstorage:raw_basic_processor"]
                ),
            ]
        )
        .transitionalItem("refinedstorage:raw_basic_processor")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            ["refinedstorage:improved_processor"],
            "kubejs:silicon_wafer",
            [
                event.recipes.createDeploying(
                    "refinedstorage:raw_improved_processor",
                    [
                        "refinedstorage:raw_improved_processor",
                        "#forge:ingots/gold",
                    ]
                ),
                event.recipes.createDeploying(
                    "refinedstorage:raw_improved_processor",
                    [
                        "refinedstorage:raw_improved_processor",
                        "refinedstorage:processor_binding",
                    ]
                ),
                event.recipes.createPressing(
                    "refinedstorage:raw_improved_processor",
                    ["refinedstorage:raw_improved_processor"]
                ),
            ]
        )
        .transitionalItem("refinedstorage:raw_improved_processor")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            ["refinedstorage:advanced_processor"],
            "kubejs:silicon_wafer",
            [
                event.recipes.createDeploying(
                    "refinedstorage:raw_advanced_processor",
                    [
                        "refinedstorage:raw_advanced_processor",
                        "#forge:gems/diamond",
                    ]
                ),
                event.recipes.createDeploying(
                    "refinedstorage:raw_advanced_processor",
                    [
                        "refinedstorage:raw_advanced_processor",
                        "refinedstorage:processor_binding",
                    ]
                ),
                event.recipes.createPressing(
                    "refinedstorage:raw_advanced_processor",
                    ["refinedstorage:raw_advanced_processor"]
                ),
            ]
        )
        .transitionalItem("refinedstorage:raw_advanced_processor")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            ["rebornstorage:super_advanced_processor"],
            "kubejs:silicon_wafer",
            [
                event.recipes.createDeploying(
                    "rebornstorage:raw_super_advanced_processor",
                    [
                        "rebornstorage:raw_super_advanced_processor",
                        "#forge:ingots/netherite",
                    ]
                ),
                event.recipes.createDeploying(
                    "rebornstorage:raw_super_advanced_processor",
                    [
                        "rebornstorage:raw_super_advanced_processor",
                        "refinedstorage:processor_binding",
                    ]
                ),
                event.recipes.createPressing(
                    "rebornstorage:raw_super_advanced_processor",
                    ["rebornstorage:raw_super_advanced_processor"]
                ),
            ]
        )
        .transitionalItem("rebornstorage:raw_super_advanced_processor")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            ["extradisks:withering_processor"],
            "kubejs:silicon_wafer",
            [
                event.recipes.createDeploying(
                    "extradisks:raw_withering_processor",
                    [
                        "extradisks:raw_withering_processor",
                        "#forge:nether_stars",
                    ]
                ),
                event.recipes.createDeploying(
                    "extradisks:raw_withering_processor",
                    [
                        "extradisks:raw_withering_processor",
                        "refinedstorage:processor_binding",
                    ]
                ),
                event.recipes.createPressing(
                    "extradisks:raw_withering_processor",
                    ["extradisks:raw_withering_processor"]
                ),
            ]
        )
        .transitionalItem("refinedstorage:raw_super_advanced_processor")
        .loops(1);
});
