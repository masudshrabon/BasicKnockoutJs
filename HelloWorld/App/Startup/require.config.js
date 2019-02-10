var require = {
    baseUrl: ".",
    paths: {
        "bootstrap": "App/Libs/bootstrap",
        "crossroads": "App/Libs/crossroads/crossroads",
        "jquery": "App/Libs/jquery-2.1.3",
        "knockout": "App/Libs/knockout-3.2.0",
        "knockout-projections": "App/Libs/knockout-projections.min",
        "signals": "App/Libs/crossroads/signals",
        "hasher": "App/Libs/crossroads/hasher",
        "text": "App/Libs/text",
    },
    shim: {
        "bootstrap": { deps: ["jquery"] }
    }
};