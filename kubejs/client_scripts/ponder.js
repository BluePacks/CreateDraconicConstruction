// for 1.18 pls use: onEvent("ponder.tag", event => { ... })
onEvent("ponder.tag", (event) => {
    /**
     * "kubejs:getting_started" -> the tag name
     * "minecraft:paper"        -> the icon
     * "Getting Started"        -> the title
     * "This is a description"  -> the description
     * [...items]               -> default items
     */
    event.createTag(
        "kubejs:getting_started",
        "kubejs:rotational_matrix",
        "Welcome to the pack",
        "Here we gooo!",
        [
            // some default items
            "kubejs:rotational_matrix",
            "kubejs:smart_rotational_matrix",
            "kubejs:storage_matrix",
        ]
    );
});

onEvent("ponder.registry", (event) => {
    /**
     * Create a new ponder entry with one scene for "minecraft:paper".
     */
    event
        .create("kubejs:rotational_matrix")
        .scene(
            "ch1",
            "First example scene for chapter 1",
            "kubejs:rotation",
            (scene, util) => {
                const cowLink = scene.world.createEntity("cow", [2.5, 1, 2.5]);
                scene
                    .showControls(60, [2.5, 3, 2.5], "down")
                    .withItem("mekanism:configurator")
                    .rightClick();
                scene.showBasePlate();

                // your scene code here
            }
        );
});
