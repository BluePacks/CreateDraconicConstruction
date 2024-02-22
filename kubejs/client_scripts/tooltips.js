let mekanismTiers = ["basic", "advanced", "elite", "ultimate"];

onEvent("jei.information", (event) => {
    mekanismTiers.forEach((tier) => {
        event.add(`mekanism:${tier}_tier_installer`, [
            "Upgrades in crafting interfaces are disabled use tiered installers to upgrade your machines",
        ]);
    });

    event.add("mekanism:energized_smelter", [
        "Upgrades in crafting interfaces are disabled use tiered installers to upgrade your machines",
    ]);
});

onEvent("item.tooltip", (tooltip) => {
    tooltip.addAdvanced(
        Item.of(
            "patchouli:guide_book",
            '{"patchouli:book":"patchouli:book_of_dragons"}'
        ),
        (item, advanced, text) => {
            text.add(
                1,
                Text.gold(
                    "This book will guide you through your mission to restore the world"
                )
            );
        }
    );
    tooltip.addAdvanced(
        "kubejs:mekanikal_matrix_part",
        (item, advanced, text) => {
            text.add(1, Text.gray("Created with Mekanikal Assembler"));
        }
    );
    tooltip.addAdvanced("kubejs:mekanikal_matrix", (item, advanced, text) => {
        text.add(1, Text.gray("Created with Mekanikal Assembler"));
    });
    tooltip.addAdvanced(
        Fluid.of("kubejs:machine_lubricant"),
        (item, advanced, text) => {
            text.add(1, Text.gray("Created with Distillation Tower"));
        }
    );

    mekanismTiers.forEach((tier) => {
        tooltip.addAdvanced(
            `mekanism:${tier}_tier_installer`,
            (item, advanced, text) => {
                text.add(
                    1,
                    Text.gray(
                        "Machine upgrading from crafting is disabled, make these instead!"
                    )
                );
            }
        );
    });

    tooltip.addAdvanced("thermal:dynamo_lapidary", (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [
                Text.of("Hold [").darkGray(),
                Text.of("Shift").gray(),
                Text.of("] to see more info.").darkGray(),
            ]);
        } else {
            text.add(1, Text.yellow("Burns matrixes to generate RF/FE"));
            text.add(
                2,
                Text.yellow("Check JEI for amounts & compatible items")
            );
        }
    });

    tooltip.addAdvanced(Ingredient.all, (item, advanced, text) => {
        if (tooltip.alt && item.nbt) {
            text.add(Text.of("NBT: ").append(Text.prettyPrintNbt(item.nbt)));
        }
    });
});
