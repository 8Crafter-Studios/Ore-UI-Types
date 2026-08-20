var __commands__: {
    vanilla_menus_update_settings: {
        commitString: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        updateNumber: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: [unknown, ...unknown[]]): unknown;
        };
        updateString: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: [unknown, ...unknown[]]): unknown;
        };
        updateOption: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: [unknown, ...unknown[]]): unknown;
        };
        updateBoolean: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: [unknown, ...unknown[]]): unknown;
        };
    };
    vanilla_menus_invoke_action_settings: {
        cancelAsyncAction: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        invokeAction: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: [unknown, ...unknown[]]): unknown;
        };
    };
    coreStorageCommandGroup: {
        changeStorage: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: [unknown, ...unknown[]]): unknown;
        };
    };
    soundCommandGroup: {
        isPlaying: {
            id: number;
            callable: FacetTypeMap["core.sound"]["isPlaying"];
        };
        fadeOut: {
            id: number;
            callable: FacetTypeMap["core.sound"]["fadeOut"];
        };
        play: {
            id: number;
            callable: FacetTypeMap["core.sound"]["play"];
        };
    };
    coreTranslateCommandGroup: {
        getHowLongAgoAsString: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): string;
        };
        formatDate: {
            id: number;
            callable(timestampInSeconds: number): string;
        };
        translate: {
            id: number;
            callable(key: string, parameters: string[]): string;
        };
    };
    routerCommandGroup: {
        go: {
            id: number;
            callable: FacetTypeMap["core.router"]["history"]["go"];
        };
        back: {
            id: number;
            callable: FacetTypeMap["core.router"]["history"]["goBack"];
        };
        replace: {
            id: number;
            callable: FacetTypeMap["core.router"]["history"]["replace"];
        };
        push: {
            id: number;
            callable: FacetTypeMap["core.router"]["history"]["push"];
        };
    };
    vanillaGameplayRecipeBookFilteringCommandGroup: {
        setRecipeBookFiltering: {
            id: number;
            callable(enabled: boolean): null;
        };
    };
    vanillaGameplayTradeCommandGroup: {
        performAutoTrade: {
            id: number;
            callable(tradeTier: number, tradeIndex: number): null;
        };
        pullInIngredientsForSelectedTrade: {
            id: number;
            callable(): null;
        };
        selectTrade: {
            id: number;
            callable(tradeTier: number, tradeIndex: number): null;
        };
    };
    vanillaGameplayRecipeBookSearchStringCommandGroup: {
        setRecipeBookSearchString: {
            id: number;
            callable(searchString: string): null;
        };
    };
    vanillaGameplayAnvilCommandGroup: {
        setPreviewItemName: {
            id: number;
            callable(itemName: string): null;
        };
    };
    coreHapticsCommandGroup: {
        vibrate: {
            id: number;
            callable(duration: number): null;
        };
    };
    vanillaGameplayContainerCommandGroup: {
        autoCraftAllItemsFromRecipe: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        autoCraftOneItemFromRecipe: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        selectRecipe: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        setDistributeAllSource: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        splitSingleItem: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: [number, number, number, number]): unknown;
        };
        splitMultipleItems: {
            id: number;
            callable(containerIDA: number, slotIndexA: number, containerIDB: number, slotIndexB: number): null;
        };
        autoPlaceItems: {
            id: number;
            callable(containerID: number, slotIndex: number): null;
        };
        coalesceOrAutoPlaceItems: {
            id: number;
            callable(containerID: number, slotIndex: number): null;
        };
        coalesceItems: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        dropOneItem: {
            id: number;
            callable(containerID: number, slotIndex: number): null;
        };
        dropAllItems: {
            id: number;
            callable(containerID: number, slotIndex: number): null;
        };
        placeAmountOfItems: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        placeOneItem: {
            id: number;
            callable(fromContainerID: number, fromSlotIndex: number, toContainerID: number, toSlotIndex: number): null;
        };
        placeAllItems: {
            id: number;
            callable(fromContainerID: number, fromSlotIndex: number, toContainerID: number, toSlotIndex: number): null;
        };
        takeHalfItems: {
            id: number;
            callable(destinationContainerID: number, destinationSlotIndex: number, sourceContainerID: number, sourceSlotIndex: number): null;
        };
        takeOneItem: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        takeAllItems: {
            id: number;
            callable(destinationContainerID: number, destinationSlotIndex: number, sourceContainerID: number, sourceSlotIndex: number): null;
        };
        closeContainer: {
            id: number;
            callable(): null;
        };
    };
    vanilla_partyChatCommandGroup: {
        sendComposedMessage: {
            id: number;
            callable(): null;
        };
        setComposedMessage: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        setIsOpen: {
            id: number;
            callable(isOpen: boolean): void;
        };
    };
    vanillaCoreDataStoreSetCommandGroup: {
        dataStoreButtonPress: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(datastore: unknown, property: unknown, hbuiRoute: string): unknown;
        };
        setDataStorePathBool: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(datastore: unknown, property: unknown, hbuiRoute: string, args_3: unknown): unknown;
        };
        setDataStorePathNumber: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(datastore: unknown, property: unknown, hbuiRoute: string, args_3: unknown): unknown;
        };
        setDataStorePathString: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(datastore: unknown, property: unknown, hbuiRoute: string, args_3: unknown): unknown;
        };
    };
    vanillaGameInviteCommandGroup: {
        invitePlatformPlayers: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        inviteXboxPlayers: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
    };
    coreScreenReaderCommandGroup: {
        read: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        clear: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
    };
    vanillaGameplayContainerAPICommands: {
        setPreviewItemName: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        performAutoTrade: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        pullInIngredientsForSelectedTrade: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        selectTrade: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        setRecipeBookTab: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        setRecipeBookFiltering: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        setRecipeBookSearchString: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        setDistributeAllSource: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        resetSplitStack: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        splitSingleItem: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        splitMultipleItemsTouch: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        splitMultipleItems: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        autoPlaceItems: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        coalesceOrAutoPlaceItems: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        coalesceItems: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        dropOneItem: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        dropAllItems: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        placeAmountOfItems: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        placeOneItem: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        placeAllItems: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        takeHalfItems: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        takeOneItem: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        takeAllItems: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        handleBackgroundMouseRelease: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        handlePanelMouseRelease: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        handleSlotMouseDrag: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        handleSlotMouseRelease: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        handleSlotMousePress: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        closeContainer: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
    };
    editorTelemetryCommandGroup: {
        fireScriptAction: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
    };
    vanillaGameplayLocalPlayerWakeUpCommand: {
        wakeUp: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
    };
    vanillaGameplayLocalPlayerRespawnCommand: {
        respawn: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
    };
    realmsServerSettingsCommandGroup: {
        setRealmsServerSimDist: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        setRealmsServerRenderDist: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        setRealmsServerMaxPlayerCount: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        setRealmsServerMode: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        fetchRealmsServerSettings: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
    };
    vanillaRealmsSavesCommandGroup: {
        cancelBackupDownload: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        downloadBackup: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        renameBackup: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        deleteBackup: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        restoreBackup: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        saveAutoBackup: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        saveBackup: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        fetchActiveWorldSize: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        fetchBackupList: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
    };
    vanillaRealmsMembersCommandGroup: {
        addRealmMembers: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
    };
    vanillaAdminLogCommandGroup: {
        fetchAdminLogs: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
    };
    vanilla_menus_auto_save_warning_screen: {
        acknowledge: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
    };
    vanilla_menus_tts_warning_screen: {
        disableTTS: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        markTTSShown: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        doesLanguageSupportTts: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
    };
    personaCommands: {
        equipDefaultSkin: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
    };
    ClientUpdatesCommandGroup: {
        launchStoreForClientUpdates: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
    };
    vanilla_socialSystemCommandGroup: {
        setPollingForReceivedRequests: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        reportIsDrawerVisible: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
    };
    vanilla_inboxCommandGroup: {
        reportSubmit: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        reportClick: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
    };
    vanillaGameplayLeaveGameCommandGroup: {
        leaveGameThenJoinFriendsWorld: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        leaveGame: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
    };
    vanillaWorldStorageCommandGroup: {
        deleteWorld: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
    };
    vanillaWorldCloudSyncCommandGroup: {
        setCloudSaved: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        setLocalOnly: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
    };
    vanillaStorageManagerCommandGroup: {
        convertOldWorld: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        deleteSelectedItems: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        setAllSelected: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        setSelected: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
    };
    vanilla_menus_safe_zone_warning_screen: {
        markShown: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        setSafeZone: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
    };
    editorContentBadgeCommandGroup: {
        restoreAllBadges: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        clearAllBadges: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        clearBadge: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
        setSuppressNewBadges: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
    };
    vanillaRealmsDeleteCommandGroup: {
        deleteRealm: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
    };
    coreApplicationCommandGroup: {
        exit: {
            id: number;
            /**
             * @todo Figure out the types for this method.
             */
            callable(...args: unknown[]): unknown;
        };
    };
};

type CommandTypes = {
    [K in keyof typeof __commands__]: (typeof __commands__)[K] extends (
        Record<keyof (typeof __commands__)[K], { id: number; callable: (...args: unknown[]) => unknown }>
    ) ?
        {
            [C in keyof (typeof __commands__)[K]]: (typeof __commands__)[K][C] extends { id: number; callable: (...args: unknown[]) => unknown } ? true : never;
        }
    :   never;
};

var a = {
    vanillaCoreDataStoreSetCommandGroup: {
        dataStoreCloseButtonPress: {
            id: 4564,
        },
        dataStoreButtonPress: {
            id: 4563,
        },
        setDataStorePathBool: {
            id: 4562,
        },
        setDataStorePathNumber: {
            id: 4561,
        },
        setDataStorePathString: {
            id: 4560,
        },
    },
    vanillaGameplayContainerAPICommands: {
        setPreviewItemName: {
            id: 4559,
        },
        performAutoTrade: {
            id: 4558,
        },
        pullInIngredientsForSelectedTrade: {
            id: 4557,
        },
        selectTrade: {
            id: 4556,
        },
        setRecipeBookTab: {
            id: 4555,
        },
        setRecipeBookFiltering: {
            id: 4554,
        },
        setRecipeBookSearchString: {
            id: 4553,
        },
        setDistributeAllSource: {
            id: 4552,
        },
        resetSplitStack: {
            id: 4551,
        },
        splitSingleItem: {
            id: 4550,
        },
        splitMultipleItemsTouch: {
            id: 4549,
        },
        splitMultipleItems: {
            id: 4548,
        },
        autoPlaceItems: {
            id: 4547,
        },
        coalesceOrAutoPlaceItems: {
            id: 4546,
        },
        coalesceItems: {
            id: 4545,
        },
        dropOneItem: {
            id: 4544,
        },
        dropAllItems: {
            id: 4543,
        },
        placeAmountOfItems: {
            id: 4542,
        },
        placeOneItem: {
            id: 4541,
        },
        placeAllItems: {
            id: 4540,
        },
        takeHalfItems: {
            id: 4539,
        },
        takeOneItem: {
            id: 4538,
        },
        takeAllItems: {
            id: 4537,
        },
        handleBackgroundMouseRelease: {
            id: 4536,
        },
        handlePanelMouseRelease: {
            id: 4535,
        },
        handleSlotMouseDrag: {
            id: 4534,
        },
        handleSlotMouseRelease: {
            id: 4533,
        },
        handleSlotMousePress: {
            id: 4532,
        },
        closeContainer: {
            id: 4531,
        },
    },
    editorTelemetryCommandGroup: {
        fireScriptAction: {
            id: 4530,
        },
    },
    vanillaGameplayLocalPlayerWakeUpCommand: {
        wakeUp: {
            id: 4529,
        },
    },
    vanillaGameplayLocalPlayerRespawnCommand: {
        respawn: {
            id: 4528,
        },
    },
    realmsServerSettingsCommandGroup: {
        setRealmsServerSimDist: {
            id: 4527,
        },
        setRealmsServerRenderDist: {
            id: 4526,
        },
        setRealmsServerMaxPlayerCount: {
            id: 4525,
        },
        setRealmsServerMode: {
            id: 4524,
        },
        fetchRealmsServerSettings: {
            id: 4523,
        },
    },
    vanillaRealmsSavesCommandGroup: {
        cancelBackupDownload: {
            id: 4522,
        },
        downloadBackup: {
            id: 4521,
        },
        renameBackup: {
            id: 4520,
        },
        deleteBackup: {
            id: 4519,
        },
        restoreBackup: {
            id: 4518,
        },
        saveAutoBackup: {
            id: 4517,
        },
        saveBackup: {
            id: 4516,
        },
        fetchActiveWorldSize: {
            id: 4515,
        },
        fetchBackupList: {
            id: 4514,
        },
    },
    vanillaRealmsMembersCommandGroup: {
        addRealmMembers: {
            id: 4513,
        },
    },
    vanillaAdminLogCommandGroup: {
        fetchAdminLogs: {
            id: 4512,
        },
    },
    vanilla_menus_auto_save_warning_screen: {
        acknowledge: {
            id: 4511,
        },
    },
    vanilla_menus_tts_warning_screen: {
        disableTTS: {
            id: 4510,
        },
        markTTSShown: {
            id: 4509,
        },
        doesLanguageSupportTts: {
            id: 4508,
        },
    },
    personaCommands: {
        equipDefaultSkin: {
            id: 4507,
        },
    },
    ClientUpdatesCommandGroup: {
        launchStoreForClientUpdates: {
            id: 4506,
        },
    },
    vanillaGameInviteCommandGroup: {
        invitePlatformPlayers: {
            id: 4505,
        },
        inviteXboxPlayers: {
            id: 4504,
        },
    },
    vanilla_socialSystemCommandGroup: {
        setPollingForReceivedRequests: {
            id: 4503,
        },
        reportIsDrawerVisible: {
            id: 4502,
        },
    },
    vanilla_inboxCommandGroup: {
        reportSubmit: {
            id: 4501,
        },
        reportClick: {
            id: 4500,
        },
    },
    vanilla_partyChatCommandGroup: {
        setIsOpen: {
            id: 4499,
        },
        setComposedMessage: {
            id: 4498,
        },
        sendComposedMessage: {
            id: 4497,
        },
    },
    vanillaGameplayLeaveGameCommandGroup: {
        leaveGameThenJoinFriendsWorld: {
            id: 4496,
        },
        leaveGame: {
            id: 4495,
        },
    },
    vanillaWorldStorageCommandGroup: {
        deleteWorld: {
            id: 4494,
        },
    },
    vanillaWorldCloudSyncCommandGroup: {
        setCloudSaved: {
            id: 4493,
        },
        setLocalOnly: {
            id: 4492,
        },
    },
    vanillaStorageManagerCommandGroup: {
        convertOldWorld: {
            id: 4491,
        },
        deleteSelectedItems: {
            id: 4490,
        },
        setAllSelected: {
            id: 4489,
        },
        setSelected: {
            id: 4488,
        },
    },
    vanilla_menus_safe_zone_warning_screen: {
        markShown: {
            id: 4487,
        },
        setSafeZone: {
            id: 4486,
        },
    },
    editorContentBadgeCommandGroup: {
        restoreAllBadges: {
            id: 4485,
        },
        clearAllBadges: {
            id: 4484,
        },
        clearBadge: {
            id: 4483,
        },
        setSuppressNewBadges: {
            id: 4482,
        },
    },
    vanilla_menus_invoke_action_settings: {
        cancelAsyncAction: {
            id: 4481,
        },
        invokeAction: {
            id: 4480,
        },
    },
    coreScreenReaderCommandGroup: {
        read: {
            id: 4479,
        },
        clear: {
            id: 4478,
        },
    },
    coreStorageCommandGroup: {
        changeStorage: {
            id: 4477,
        },
    },
    vanilla_menus_update_settings: {
        commitString: {
            id: 4476,
        },
        updateNumber: {
            id: 4475,
        },
        updateString: {
            id: 4474,
        },
        updateOption: {
            id: 4473,
        },
        updateBoolean: {
            id: 4472,
        },
    },
    vanillaRealmsDeleteCommandGroup: {
        deleteRealm: {
            id: 4471,
        },
    },
    coreHapticsCommandGroup: {
        vibrate: {
            id: 4470,
        },
    },
    coreApplicationCommandGroup: {
        exit: {
            id: 4469,
        },
    },
    routerCommandGroup: {
        go: {
            id: 4468,
        },
        back: {
            id: 4467,
        },
        replace: {
            id: 4466,
        },
        push: {
            id: 4465,
        },
    },
    soundCommandGroup: {
        isPlaying: {
            id: 4464,
        },
        fadeOut: {
            id: 4463,
        },
        play: {
            id: 4462,
        },
    },
    coreTranslateCommandGroup: {
        getHowLongAgoAsString: {
            id: 4461,
        },
        formatDate: {
            id: 4460,
        },
        translate: {
            id: 4459,
        },
    },
};

type CommandTypesB = {
    [K in keyof typeof a]: (typeof a)[K] extends Record<keyof (typeof a)[K], { id: number }> ?
        {
            [C in keyof (typeof a)[K]]: (typeof a)[K][C] extends { id: number } ? true : never;
        }
    :   never;
};

type MissingCommandTypes = { [K in Exclude<keyof CommandTypesB, keyof CommandTypes>]: true /* CommandTypesB[K] */ } & {
    [K in Extract<keyof CommandTypesB, keyof CommandTypes> as CommandTypes[K] extends CommandTypesB[K] ? never : K]: {
        [K2 in Extract<keyof CommandTypes[K], keyof CommandTypesB[K]> as CommandTypes[K][K2] extends CommandTypesB[K][K2] ? never : K2]: true;
    } & {
        [K2 in Exclude<keyof CommandTypesB[K], keyof CommandTypes[K]>]: true;
    };
};
