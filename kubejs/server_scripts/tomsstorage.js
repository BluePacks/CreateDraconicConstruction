onEvent("recipes", (event) => {
    event.recipes
        .createSequencedAssembly(
            ["kubejs:crude_storage_matrix"],
            "kubejs:rotational_matrix",
            [
                event.recipes.createDeploying("kubejs:rotational_matrix", [
                    "kubejs:rotational_matrix",
                    "#forge:chests/wooden",
                ]),
                event.recipes.createDeploying("kubejs:rotational_matrix", [
                    "kubejs:rotational_matrix",
                    "#forge:dusts/redstone",
                ]),
            ]
        )
        .transitionalItem("kubejs:rotational_matrix")
        .loops(1);

    event.recipes.createMechanicalCrafting(
        "toms_storage:ts.crafting_terminal",
        ["CCC", "EME", "DSD"],
        {
            C: "create:mechanical_crafter",
            E: "minecraft:ender_pearl",
            D: "#forge:gems/diamond",
            M: "kubejs:crude_storage_matrix",
            S: "toms_storage:ts.storage_terminal",
        }
    );
    event.shaped("toms_storage:ts.paint_kit", ["BD", "DS"], {
        B: "minecraft:bucket",
        D: "#forge:dyes",
        S: "#forge:rods/wooden",
    });

    event.smithing(
        "toms_storage:ts.storage_terminal",
        "kubejs:crude_storage_matrix",
        "create:electron_tube"
    );
    event.smithing(
        "toms_storage:ts.open_crate",
        "kubejs:crude_storage_matrix",
        "#forge:barrels"
    );
    event.smithing(
        "toms_storage:ts.inventory_cable_connector_filtered",
        "toms_storage:ts.inventory_cable_connector",
        "minecraft:paper"
    );
    event.smithing(
        "toms_storage:ts.wireless_terminal",
        "kubejs:crude_storage_matrix",
        "minecraft:ender_pearl"
    );
    event.smithing(
        "toms_storage:ts.adv_wireless_terminal",
        "toms_storage:ts.wireless_terminal",
        "#forge:ingots/netherite"
    );

    event.stonecutting(
        "toms_storage:ts.inventory_connector",
        "kubejs:crude_storage_matrix"
    );
    event.stonecutting("toms_storage:ts.trim", "kubejs:crude_storage_matrix");
    event.stonecutting(
        "4x toms_storage:ts.inventory_cable",
        "kubejs:crude_storage_matrix"
    );
    event.stonecutting(
        "2x toms_storage:ts.inventory_cable_framed",
        "kubejs:crude_storage_matrix"
    );
    event.stonecutting(
        "toms_storage:ts.inventory_cable_connector",
        "kubejs:crude_storage_matrix"
    );
    event.stonecutting(
        "toms_storage:ts.inventory_cable_connector_framed",
        "kubejs:crude_storage_matrix"
    );
    event.stonecutting(
        "toms_storage:ts.inventory_proxy",
        "kubejs:crude_storage_matrix"
    );
    event.stonecutting(
        "toms_storage:ts.inventory_hopper_basic",
        "kubejs:crude_storage_matrix"
    );
    event.stonecutting(
        "toms_storage:ts.level_emitter",
        "kubejs:crude_storage_matrix"
    );
});
