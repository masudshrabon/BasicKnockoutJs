define(['knockout', 'text!./Hello.html'], function (ko, template) {
    var helloViewModel = function (firstName, lastName) {
        var model = this;
        model.firstName = ko.observable(firstName);
        model.lastName = ko.observable(lastName);

        this.fullName = ko.pureComputed(function () {
            return model.firstName() + " " + model.lastName();
        }, model);
    }
    return { viewModel: helloViewModel("Masud", "Shrabon"), template: template };
});