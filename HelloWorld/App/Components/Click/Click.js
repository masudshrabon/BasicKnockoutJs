define(['knockout', 'text!./Click.html'], function (ko, template) {
    var clickViewModel = function () {
        var model = this;
        model.numberOfClicks = ko.observable(0);

        model.registerClick = function () {
            model.numberOfClicks(model.numberOfClicks() + 1);
        };

        model.resetClicks = function () {
            model.numberOfClicks(0);
        };
        model.hasClickedTooManyTimes = ko.pureComputed(function () {
            return model.numberOfClicks() >= 3;
        });
    }
    return { viewModel: clickViewModel, template: template };
});