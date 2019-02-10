define(['jquery', 'knockout', './router', 'bootstrap', 'knockout-projections'], function ($, ko, router) {
    ko.components.register('nav-bar', { require: 'App/Components/nav-bar/nav-bar' });

    ko.components.register('home', { require: 'App/Components/Home/home' });

    ko.components.register('hello', { require: 'App/Components/Hello/Hello' });
    ko.components.register('click', { require: 'App/Components/Click/Click' });
    ko.components.register('simple-list', { require: 'App/Components/SimpleList/SimpleList' });
    
    ko.components.register('list-add', { require: 'App/Components/SimpleList/SimpleListAdd' });
    ko.components.register('list-grid', { require: 'App/Components/SimpleList/ListGrid' });

    ko.components.register('alignment', { require: 'App/Components/Alignment/Alignment' });
    ko.components.register('page-a', { require: 'App/Components/Alignment/PageA/PageA' });
    ko.components.register('page-b', { require: 'App/Components/Alignment/PageB/PageB' });

    ko.applyBindings({ route: router.currentRoute });
});