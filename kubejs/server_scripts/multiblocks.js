onEvent("recipes", (event) => {
    event.smithing(
        "mm:mekanikal_assembler_controller",
        "kubejs:smart_rotational_matrix",
        "mekanism:steel_casing"
    );
    event.smithing(
        "mm:distillation_tower_controller",
        "kubejs:fluid_matrix",
        "thermal:fluid_cell"
    );
    event.smithing(
        "mm:mekanikal_assembler_energy_input_port",
        "kubejs:smart_rotational_matrix",
        "kubejs:copper_alloy_wire"
    );
    event.stonecutting(
        "mm:mekanikal_assembler_item_input_port",
        "kubejs:smart_rotational_matrix"
    );
    event.stonecutting(
        "mm:mekanikal_assembler_item_output_port",
        "kubejs:smart_rotational_matrix"
    );
    event.stonecutting(
        "mm:mekanikal_assembler_fluid_input_port",
        "kubejs:fluid_matrix"
    );
    event.stonecutting(
        "mm:mekanikal_assembler_fluid_output_port",
        "kubejs:fluid_matrix"
    );
});

onEvent("mm.recipes", (event) => {
    event.build("cdc:mekanikal_assembler/mekanikal_matrix_part", {
        duration: 180,
        structureId: "cdc:mekanikal_assembler_structure",
        name: {
            text: "Mekanikal Matrix Part",
        },
        inputs: [
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:fluid",
                    fluid: "kubejs:machine_lubricant",
                    amount: 1000,
                },
            },
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:energy",
                    amount: 1000,
                },
            },
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:item",
                    item: "kubejs:recycled_metal_gear",
                    count: 1,
                },
            },
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:item",
                    item: "kubejs:recycled_metal_rod",
                    count: 1,
                },
            },
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:item",
                    item: "kubejs:recycled_metal_plate",
                    count: 1,
                },
            },
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:item",
                    item: "kubejs:copper_alloy_wire",
                    count: 1,
                },
            },
        ],
        outputs: [
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:item",
                    item: "kubejs:mekanikal_matrix_part",
                    count: 1,
                },
            },
        ],
    });

    event.build("cdc:mekanikal_assembler/mekanikal_matrix", {
        duration: 200,
        structureId: "cdc:mekanikal_assembler_structure",
        name: {
            text: "Mekanikal Matrix",
        },
        inputs: [
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:fluid",
                    fluid: "kubejs:machine_lubricant",
                    amount: 1000,
                },
            },
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:energy",
                    amount: 1000,
                },
            },
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:item",
                    item: "kubejs:mekanikal_matrix_part",
                    count: 4,
                },
            },
        ],
        outputs: [
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:item",
                    item: "kubejs:mekanikal_matrix",
                    count: 1,
                },
            },
        ],
    });

    event.build("cdc:mekanikal_assembler/smart_rotational_matrix", {
        duration: 180,
        structureId: "cdc:mekanikal_assembler_structure",
        name: {
            text: "Smart Rotational Matrix",
        },
        inputs: [
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:fluid",
                    fluid: "kubejs:machine_lubricant",
                    amount: 100,
                },
            },
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:energy",
                    amount: 150,
                },
            },
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:item",
                    item: "kubejs:smart_rotational_matrix_part",
                    count: 4,
                },
            },
        ],
        outputs: [
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:item",
                    item: "kubejs:smart_rotational_matrix",
                    count: 1,
                },
            },
        ],
    });
});
