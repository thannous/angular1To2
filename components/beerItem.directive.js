/*angular.module('Brewery.directive', []).directive('beerItem', function (BreweryService) {
    return {
        restrict: 'E',
        scope: {
            beer: '='
        },
        controllerAs: 'bi',
        bindToController: true,
        template: '<div class="col-md-4 panel panel-default">' +
        '<div class="panel-heading">' +
        '<span ng-class="bi.beer.note | NoteFilter"></span>{{bi.beer.name}}</div>' +
        '<div class="panel-body">' +
        '{{bi.beer.description}}' +
        '</div>' +
        '<button ng-click="bi.selectBeer()" class="btn btn-primary">Give me a pinte !</button>' +
        '</div>',
        controller: ['$scope', function () {
            this.selectBeer = function () {
                BreweryService.getOnePinte(this.beer);
            };
        }]
    };
});*/


(function (app) {
    app.BeerItem =
        ng.core.Component({
            selector: 'beer-item',

            inputs: ['beer'],
            template: '<div class="col-md-4 panel panel-default">' +
            '<div class="panel-heading">' +
            '<span [class]="beer.note"></span>{{beer.name}}</div>' +
            '<div class="panel-body">' +
            '{{beer.description}}' +
            '</div>' +
            '<button (click)="selectBeer(beer)" class="btn btn-primary">Give me a pinte !</button>' +
            '</div>',
        })
            .Class({
                constructor: [app.BreweryService, function (BreweryService) {
                    // this.beers = BreweryService.getBeers();
                    this._BreweryService = BreweryService;
                }],
                selectBeer : function (beer) {

                    this._BreweryService.getOnePinte(beer);
                }
            });

})(window.app || (window.app = {}));