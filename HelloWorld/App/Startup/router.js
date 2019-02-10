define(["knockout", "crossroads", "hasher"], function (ko, crossroads, hasher) {

    // This module configures crossroads.js, a routing library. If you prefer, you
    // can use any other routing library (or none at all) as Knockout is designed to
    // compose cleanly with external libraries.
    //
    // You *don't* have to follow the pattern established here (each route entry
    // specifies a 'page', which is a Knockout component) - there's nothing built into
    // Knockout that requires or even knows about this technique. It's just one of
    // many possible ways of setting up client-side routes.

    return new router({
        routes: [
            { url: '', params: { page: 'home' } },
            { url: 'home', params: { page: 'home' } },
            { url: 'hello', params: { page: 'hello' } },
            { url: 'click', params: { page: 'click' } },
            { url: 'list', params: { page: 'simple-list' } },
           // { url: 'list/add', params: { page: 'simple-list' } },
           
            { url: 'alignment', params: { page: 'alignment' } }
        ]
    });

    function router(config) {
        var currentRoute = this.currentRoute = ko.observable({});

        ko.utils.arrayForEach(config.routes, function (route) {
            crossroads.addRoute(route.url, function (requestParams) {
                currentRoute(ko.utils.extend(requestParams, route.params));
            });
            // //start
            // crossroads.bypassed.add(function (request) {
            //     console.log(request);
            // });
            // //won't match any route, triggering `bypassed` Signal
            // crossroads.parse('/#list');
            // //end
            
        });

        activateCrossroads();
    }

    function activateCrossroads() {
        function parseHash(newHash, oldHash) { crossroads.parse(newHash); }
        crossroads.normalizeFn = crossroads.NORM_AS_OBJECT;
        hasher.initialized.add(parseHash);
        hasher.changed.add(parseHash);
        hasher.init();
    }
});