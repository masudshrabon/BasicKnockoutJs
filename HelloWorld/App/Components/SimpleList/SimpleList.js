define(['knockout', 'crossroads', 'text!./SimpleList.html'], function (ko, crossroads, template) {
    var simpleListViewModel = function (params) {
        var model = this;
        model.items = ko.observableArray(["Apple", "Mango", "Banana"]);
        model.itemToAdd = ko.observable("");
        model.selectedItems = ko.observableArray(["Mango"]);

        model.addItem = function () {
            if (model.itemToAdd() != "") {
                model.items.push(model.itemToAdd());
                model.itemToAdd("");
            }
        };

        model.removeItem = function () {
            model.items.removeAll(model.selectedItems());
            model.selectedItems([]);
        };
        model.sortItems = function () {
            model.items.sort();
        };
        model.flag = ko.observable(true);
        model.PageUrl = ko.observable('');

        model.ListGridState = ko.pureComputed(function () {
            return model.PageUrl() == "list" ? "active" : "";
        }, model);
        model.ListAddState = ko.pureComputed(function () {

            return model.PageUrl().indexOf("list/add") > -1 ? "active" : "";
        }, model);

        // visibility works start
        model.flag = ko.observable(true);
        document.getElementById("lists").onclick = function (e) {
            //e.preventDefault();
            model.flag(true);
        };
        document.getElementById("list-add").onclick = function (e) {
           // e.preventDefault();
            model.flag(false);
        };
        // end
        model.Init = function () {
            model.PageUrl(params.request_);
        };
        model.Init();
    };

    return { viewModel: simpleListViewModel, template: template };
});