define(['knockout', 'text!./PageA.html', 'bootstrap'], function (ko, template) {
    var pageAViewModel = function () {
        var model = this;

    }
    return { viewModel: pageAViewModel, template: template };
});