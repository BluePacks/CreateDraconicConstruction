onEvent("lootjs", (event) => {
    let crystalBudding = [
        "tconstruct:budding_earth_slime_crystal",
        "tconstruct:budding_sky_slime_crystal",
        "tconstruct:budding_ichor_slime_crystal",
        "tconstruct:budding_ender_slime_crystal",
        "minecraft:budding_amethyst",
        "kubejs:budding_rose_quartz",
    ];

    crystalBudding.forEach((Type) => {
        event
            .addBlockLootModifier(Type)
            .matchMainHand(Item.of("kubejs:crystal_collector").ignoreNBT())
            .addLoot(Type);
    });

    event
        .addBlockLootModifier("biomesoplenty:rose_quartz_cluster")
        .addLoot("biomesoplenty:rose_quartz_shard");

    event
        .addBlockLootModifier("kubejs:chromium_ore")
        .replaceLoot("kubejs:chromium_ore", "kubejs:raw_chromium");
    event
        .addBlockLootModifier("kubejs:deepslate_chromium_ore")
        .replaceLoot("kubejs:deepslate_chromium_ore", "kubejs:raw_chromium");

    let crystalCluster = [
        "tconstruct:earth_slime_crystal_cluster",
        "tconstruct:ichor_slime_crystal_cluster",
        "tconstruct:ender_slime_crystal_cluster",
        "minecraft:amethyst_cluster",
        "biomesoplenty:rose_quartz_shard",
    ];
});
