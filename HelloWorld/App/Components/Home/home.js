define(["knockout", "text!./home.html"], function (ko, homeTemplate) {

    function homeViewModel(route) {
        this.message = ko.observable('Welcome to Knockout JS!');
    }

    return { viewModel: homeViewModel, template: homeTemplate };

});
